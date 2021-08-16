import HttpResponseType from '../../models/http/http-response-type';
import { objectHandler } from '../utilities/request-handler';

export default function defaultRouteHandler() {
  return objectHandler({
    status: HttpResponseType.METHOD_NOT_ALLOWED,
    message: 'Request path or method not allowed',
  });
}
