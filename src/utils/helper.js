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
function convertUpdateBody(body, keys) {
  const newBody = {};
  keys.forEach(k => {
    if (body[k]) {
      newBody[k] = body[k];
    }
  });
  return newBody;
}

function convertQuery(query, total) {
  const pagination = convertPagination(query, total);
  const sort = convertSortQuery(query.sort);
  const search = query.q;
  return { pagination, sort, search };
}


module.exports = {
  formatResponse,
  convertUpdateBody,
  convertQuery
};
