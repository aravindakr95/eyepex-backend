import loglevel, { version } from '../configs';

import HttpResponseType from '../models/http/http-response-type';

import defaultRouteHandler from '../helpers/http/default-route-handler';
import { objectHandler } from '../helpers/utilities/request-handler';

async function getServiceHealth() {
  loglevel.info('[carousel-endpoint] getServiceHealth(): Start/End');
  return objectHandler({
    status: HttpResponseType.SUCCESS,
    message: `V${version} Carousel service is running`,
  });
}

export default function makeCarouselEndPointHandler() {
  return async function handle(httpRequest) {
    switch (httpRequest.path) {
      case '/health':
        return getServiceHealth();
      default:
        return defaultRouteHandler();
    }
  };
}
