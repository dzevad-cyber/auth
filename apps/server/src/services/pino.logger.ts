import pino from 'pino';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      customColors: 'error:red,info:yellow',
    },
  },
});
