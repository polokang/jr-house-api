function formatResponse(res, payload, code = 200) {
  const response = { code };
  if (code < 400) {
    if (payload.data) {
      response.data = payload.data;
    } else {
      response.data = payload;
    }
  } else {
    response.error = payload;
  }
  if (payload.pagination) {
    response.pagination = payload.pagination;
  }
  return res.status(code).send(response);
}

module.exports = {
  formatResponse
};
