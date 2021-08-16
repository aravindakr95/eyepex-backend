import dotenv from 'dotenv';
import { version } from '../../package.json';

import EnvironmentType from '../models/http/environment-type';

dotenv.config();

const config = {
  version,
  versionIdentifier: process.env.VERSION_IDENTIFIER || 'v1',
  environment: EnvironmentType.DEVELOPMENT, // PRODUCTION, DEVELOPMENT
  deployment: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3600,
  },
};

export default config;
