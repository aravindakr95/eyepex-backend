import HttpResponseType from '../../models/http/http-response-type';

function normalizeRequest(req = {}) {
  return Object.freeze({
    host: req.hostname,
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
  });
}

function objectHandler(data) {
  const { status, message, payload } = data;
  return {
    status,
    data: {
      success: status === HttpResponseType.SUCCESS,
      message: message || '',
      payload: payload || null,
    },
  };
}

export { normalizeRequest, objectHandler };
