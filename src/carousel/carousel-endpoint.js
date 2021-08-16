import loglevel, { version } from '../configs';

import HttpResponseType from '../models/http/http-response-type';

import defaultRouteHandler from '../helpers/http/default-route-handler';
import getImages from '../helpers/http/images-service';
import { objectHandler } from '../helpers/utilities/request-handler';

async function getServiceHealth() {
  loglevel.info('[carousel-endpoint] getServiceHealth(): Start/End');
  return objectHandler({
    status: HttpResponseType.SUCCESS,
    message: `V${version} Carousel service is running`,
  });
}

async function getSlides(httpRequest) {
  try {
    const { limit } = httpRequest.queryParams;

    if (limit > 10) {
      return objectHandler({
        status: HttpResponseType.NOT_FOUND,
        message: 'Maximum slides count must be less than or equal to 10',
      });
    }

    loglevel.info('[carousel-endpoint] getSlides(): Start');
    const payload = getImages(limit);

    return objectHandler({
      payload,
      status: HttpResponseType.SUCCESS,
      message: 'Images retrieval successful',
    });
  } finally {
    loglevel.info('[carousel-endpoint] getSlides(): End');
  }
}

export default function makeCarouselEndPointHandler() {
  return async function handle(httpRequest) {
    switch (httpRequest.path) {
      case '/health':
        return getServiceHealth();
      case '/carousel':
        return getSlides(httpRequest);
      default:
        return defaultRouteHandler();
    }
  };
}
