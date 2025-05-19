export interface Info extends ErrorProperties {
  context?: string;
  level: string;
  message: unknown;
  timestamp?: string;
  stack?: string;
  serviceName?: string;
  methodName?: string;
  correlationId?: string;
  ip?: string;
}

export interface ErrorProperties {
  errorResponse?: unknown;
  requestConfig?: unknown;
  stack?: string;
  message?: unknown;
  statusCode?: number;
  statusText?: string;
}
