declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: 'development' | 'production';
      DATABASE_URL: string;
      JWT_ACCESS_TOKEN: string;
      JWT_REFRESH_TOKEN: string;
      ETHEREAL_NAME: string;
      ETHEREAL_USERNAME: string;
      ETHEREAL_PASSWORD: string;
    }
  }
}

export {};
