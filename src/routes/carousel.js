import express from 'express';

import carouselController from '../carousel/carousel-controller';
import { fieldStateChecker, validate } from '../middlewares/field-validator';

const carouselRouter = express.Router();

carouselRouter.get('/health',
  validate('carousel', '/health'),
  fieldStateChecker,
  carouselController);

carouselRouter.get('/carousel',
  validate('carousel', '/'),
  fieldStateChecker,
  carouselController);

export default carouselRouter;
