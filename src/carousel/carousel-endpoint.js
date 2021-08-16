import loglevel, { version } from '../configs';

import HttpResponseType from '../models/http/http-response-type';

import defaultRouteHandler from '../helpers/http/default-route-handler';
import customException from '../helpers/utilities/exception-handler';
import { objectHandler } from '../helpers/utilities/request-handler';

export default function makeCarouselEndPointHandler({ carouselList }) {
  async function getServiceHealth() {
    loglevel.info('[carousel-endpoint] getServiceHealth(): Start/End');
    return objectHandler({
      status: HttpResponseType.SUCCESS,
      message: `V${version} Carousel service is running`,
    });
  }

  async function getSlides(httpRequest) {
    try {
      loglevel.info('[carousel-endpoint] getSlides(): Start');
      const { limit } = httpRequest.queryParams;

      if (limit > 10) {
        return objectHandler({
          status: HttpResponseType.NOT_FOUND,
          message: 'Maximum slides count must be less than or equal to 10',
        });
      }

      const slides = await carouselList.findImages(limit).catch(() => {
        customException('Communication with database is failed');
      });

      return objectHandler({
        slides,
        status: HttpResponseType.SUCCESS,
        message: 'Images retrieval successful',
      });
    } finally {
      loglevel.info('[carousel-endpoint] getSlides(): End');
    }
  }

  async function addSlide(httpRequest) {
    try {
      loglevel.info('[carousel-endpoint] addSlides(): Start');
      const { image, title, subTitle } = httpRequest.body;

      await carouselList.insertImage({ image, title, subTitle }).catch(() => {
        customException('Communication with database is failed');
      });

      return objectHandler({
        status: HttpResponseType.CREATED,
        message: 'Image inserted successful',
      });
    } finally {
      loglevel.info('[carousel-endpoint] addSlides(): End');
    }
  }

  return async function handle(httpRequest) {
    switch (httpRequest.path) {
      case '/health':
        return getServiceHealth();
      case '/carousel':
        return getSlides(httpRequest);
      case '/carousel/add':
        return addSlide(httpRequest);
      default:
        return defaultRouteHandler();
    }
  };
}
