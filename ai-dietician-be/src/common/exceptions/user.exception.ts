export const userUnauthorizedTokenExpired = () => ({
  error: 'expired',
  details: {},
});

export const userUnauthorizedTokenMismatch = () => ({
  error: 'mismatch',
  details: {},
});

export const userUnauthorizedAccessDenied = () => ({
  error: 'access_denied',
  details: {},
});

export const notAllowedToAccessRoute = () => ({
  error: `You are not allowed to access this route!`,
  details: {},
});

export const userNotFound = (userId?: string) => ({
  error: 'User not found',
  details: { userId },
});
