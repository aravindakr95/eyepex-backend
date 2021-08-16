function dispatchResponse(res, obj) {
  const headers = { 'Content-Type': 'application/json' };
  const { status, data } = obj;
  const {
    success,
    message,
    slides,
  } = data;
  const response = {
    success,
    message,
    slides,
  };

  return res
    .set(headers)
    .status(status)
    .json(response);
}

export default dispatchResponse;
