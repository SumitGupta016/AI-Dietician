import { HttpException } from '@nestjs/common';
import { isAxiosError } from 'axios';
import { ErrorProperties } from '../../core/logger/error-properties.interface';

export function formatError(
  error: unknown,
  isPrivate = false,
): ErrorProperties {
  let errorDetails: ErrorProperties = {};

  if (isAxiosError(error)) {
    errorDetails = {
      errorResponse: error.response?.data as unknown,
      message: error.message,
      statusCode: error.response?.status,
      statusText: error.response?.statusText,
    };

    if (!isPrivate) {
      errorDetails.requestConfig = error.response?.config;
      errorDetails.stack = error.stack;
    }
  } else if (error instanceof HttpException) {
    errorDetails = {
      errorResponse: error.getResponse(),
      stack: error.stack,
    };
  } else if (error instanceof Error) {
    errorDetails = {
      errorResponse: error.message,
      stack: error.stack,
    };
  }
  return errorDetails;
}
