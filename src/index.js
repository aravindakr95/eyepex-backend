import express from 'express';
import cors from 'cors';

import loglevel, { deployment, versionIdentifier } from './configs';

import carouselRouter from './routes/carousel';
import defaultRouter from './routes/default';

import initializeDB from './helpers/storage/database-handler';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initializeDB();

app.use(`/${versionIdentifier}/api`, carouselRouter);
app.use('*', defaultRouter);

app.listen(deployment.port, () => {
  loglevel.info(`[app] Carousel service is up and running on: ${deployment.host}:${deployment.port}`);
});
