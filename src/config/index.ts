const config = () => ({
  appName: process.env.APP_NAME,
  environment: process.env.NODE_ENV,
  port: process.env.APP_PORT,
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    synchronize: true,
    maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS, 10) || 100,
    supportBigNumbers: false,
    logging: false,
    charset: 'utf8mb4',
    migrationsTableName: 'migration',
    entities: ['dist/app/entities/**/*.js'],
    timezone: 'Z',
  },
});

export default config;
