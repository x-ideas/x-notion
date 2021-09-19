import pino from "pino";
import pinoLogger from "express-pino-logger";

const logger = pino();
export const SLogger = {
  log: logger.info.bind(logger),
  warn: logger.warn.bind(logger),
  error: logger.error.bind(logger),
};

/**
 * express的log 插件
 */
export const loggerPluginForExpress = pinoLogger;
