import { connect } from 'mongoose';

import loglevel, { database } from '../../configs';

export default function initializeDB() {
  loglevel.info('[database-handler]: Start');
  connect(database.mongoUrl, {
    dbName: database.name,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
    loglevel.info(`[database-handler]: Connected to ${database.mongoUrl}`);
    loglevel.info('[database-handler]: End');
  }).catch((error) => {
    loglevel.error(`Database starting error: ${error.message}`);
    loglevel.info('[database-handler]: End');
    process.exit(1);
  });
}
