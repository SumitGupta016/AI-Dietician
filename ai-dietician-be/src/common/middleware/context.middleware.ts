import { NextFunction, Request, Response } from 'express';
import { AsyncLocalStorage } from 'node:async_hooks';
import { v4 } from 'uuid';

interface RequestContext {
  [key: string]: string;
}

const globalStore = new AsyncLocalStorage<RequestContext>();

export const getALSContext = (): RequestContext => {
  const context = globalStore.getStore();

  if (!context) {
    return {};
  }
  return context;
};

const runWithContext = (func: () => void, context: RequestContext = {}) => {
  globalStore.run(context, func);
};

export const withContext = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  runWithContext(() => next(), {});
};

export const withCorrelationId = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const context = getALSContext();
  const correlationId = v4();
  context.correlationId = correlationId;
  context.ip = request.ip || '';
  response.setHeader('x-correlation-id', correlationId);
  return next();
};
