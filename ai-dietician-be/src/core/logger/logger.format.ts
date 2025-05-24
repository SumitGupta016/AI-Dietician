import winston, { format, transports } from 'winston';
import { Info } from './error-properties.interface';

const getFormats = () => {
  const formats = [
    format.errors({ stack: true }),
    format.timestamp(),
    format.splat(),
  ];

  if (process.env.PRETTY_LOG === 'TRUE') {
    return formats.concat([
      format.colorize(),
      format.printf((info: Info) => {
        const logOrder = [
          info.timestamp,
          info.level,
          info.context,
          info.serviceName,
          info.methodName,
          info.message,
          info.statusCode,
          info.statusText,
          JSON.stringify(info.errorResponse, null, 2),
          info.stack,
          info.correlationId && `correlationId: ${info.correlationId}`,
          info.ip,
        ];
        const filteredLog = logOrder.filter((value) => !!value);
        return filteredLog.join(' | ');
      }),
    ]);
  }
  return formats.concat([format.json()]);
};

export const getLoggerOptions = (): winston.LoggerOptions => ({
  exitOnError: false,
  format: format.combine(...getFormats()),
  transports: [new transports.Console({ level: 'debug' })],
});
