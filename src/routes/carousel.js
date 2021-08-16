import express from 'express';

import carouselController from '../carousel/carousel-controller';

const carouselRouter = express.Router();

carouselRouter.get('/health',
  carouselController);

export default carouselRouter;
