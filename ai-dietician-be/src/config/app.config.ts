export default () => ({
  FeAppURL: process.env.FE_APP_URL,
  database: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5436', 10),
    user: process.env.DB_USER,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expireLimit: process.env.JWT_EXPIRE_LIMIT || '1d',
  },
  port: parseInt(process.env.APP_PORT || '8000', 10) || 8000,
});
