import { formatError, getALSContext } from "@/common";
import { Injectable, Scope } from "@nestjs/common";
import { createLogger } from 'winston';
import { getLoggerOptions } from "./logger.format";
import { ErrorProperties } from "./error-properties.interface";

@Injectable({scope: Scope.TRANSIENT})
export class LoggerService { 
  private _serviceName = '';

  private _methodName = '';

  public get serviceName(): string {
    return this._serviceName;
  }

  public set serviceName(value: string) {
    this._serviceName = value;
  }

  public get methodName(): string {
    return this._methodName;
  }

  public set methodName(value: string) {
    this._methodName = value;
    this.info(`Calling ${this.serviceName}.${this.methodName}`);
  }

  info(msg: string, ...meta: unknown[]) {
    this.getLogger().info(msg, ...meta);
  }

  debug(msg: string, details?: unknown, ...meta: unknown[]) {
    this.getLogger().debug(
      `${msg} ${details ? JSON.stringify(details, null, 2) : ''}`.trim(),
      ...meta,
    );
  }

  error(error: unknown, msg = '', ...meta: unknown[]) {
    this.getLogger(error).error(msg || (error as Error).message, ...meta);
  }

  private getLogger(error?: unknown) {
    const { correlationId, ip } = getALSContext();
    const errorProps: ErrorProperties = formatError(error);
    const childLogger = createLogger(getLoggerOptions()).child({
      correlationId,
      ip,
      methodName: this.methodName,
      serviceName: this.serviceName,
      ...errorProps,
    });
    return childLogger;
  }
}