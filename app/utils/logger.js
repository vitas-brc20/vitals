// logger.js
import pino from 'pino';

const logger = pino();

export const log = (msg) => logger.info(msg);