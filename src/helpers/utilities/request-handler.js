import HttpResponseType from '../../models/http/http-response-type';

function normalizeRequest(req = {}) {
  return Object.freeze({
    host: req.hostname,
    path: req.path,
    method: req.method,
    pathParams: req.params,
    queryParams: req.query,
    body: req.body,
  });
}

function objectHandler(data) {
  const { status, message, slides } = data;
  return {
    status,
    data: {
      success: status === HttpResponseType.SUCCESS,
      message: message || '',
      slides: slides || null,
    },
  };
}

export { normalizeRequest, objectHandler };
