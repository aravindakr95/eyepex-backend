import appRoot from 'app-root-path';
import DailyRotateFile from 'winston-daily-rotate-file';
import { createLogger, transports, format } from 'winston';

import config from './config';

import EnvironmentType from '../models/http/environment-type';

const {
  combine,
  timestamp,
  printf,
  simple,
} = format;
const customFormat = printf(({ level, message, timestamp: timeNow }) => `${timeNow.split('.')[0]}Z ${level}: ${message}`);

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/${config.environment.toLowerCase()}/%DATE%.log`,
    datePattern: 'MM-DD-YYYY-HH',
    handleExceptions: true,
    json: true,
    maxsize: '100m',
    maxFiles: '14d',
    timestamp: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const loglevel = createLogger({
  level: 'info',
  format: combine(timestamp(), customFormat),
  transports: [new DailyRotateFile(options.file)],
  exitOnError: false, // do not exit on handled exceptions
});

loglevel.stream = {
  write: (message) => {
    loglevel.info(message);
  },
};

if (config.environment !== EnvironmentType.PRODUCTION) {
  loglevel.add(new transports.Console({
    format: combine(timestamp(), simple(), customFormat),
  }));
}

export default loglevel;
