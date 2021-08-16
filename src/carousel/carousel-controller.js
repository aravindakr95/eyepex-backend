import loglevel from '../configs';

import carouselEndpointHandler from './index';

import HttpResponseType from '../models/http/http-response-type';

import dispatchResponse from '../helpers/http/response-dispatcher';
import { normalizeRequest, objectHandler } from '../helpers/utilities/request-handler';

export default function carouselController(req, res) {
  loglevel.info('[carousel-controller] carouselController(): Start');
  const httpRequest = normalizeRequest(req);

  carouselEndpointHandler(httpRequest)
    .then((data) => dispatchResponse(res, data))
    .catch((error) => {
      loglevel.error(`[carousel-controller] ${error.message}`);
      dispatchResponse(res, objectHandler({
        status: HttpResponseType.INTERNAL_SERVER_ERROR,
        message: error.message,
      }));
    })
    .finally(() => loglevel.info('[carousel-controller] carouselController(): End'));
}
