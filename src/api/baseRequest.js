const HEADERS = {
  Accept: 'application/json',
};

export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
  BLOB: 'blob',
};

export function baseRequest(url, options = {}) {
  const { body, method = 'GET', contentType = CONTENT_TYPES.JSON, withoutResponse = false } = options;
  const stringifiedBody = contentType === CONTENT_TYPES.JSON ? JSON.stringify(body) : body;
  const headers = {
    ...HEADERS,
    ...contentType === CONTENT_TYPES.JSON ? { 'Content-Type': contentType } : {},
  };

  return fetch(`/api/${url}`, { body: stringifiedBody, method, headers })
    .then(async (response) => {
      if (response === undefined) {
        return null;
      }

      if (!response.ok) {
        // create error object and reject if not a 2xx response code
        const err = new Error(`HTTP status code: ${response.status}`);
        err.response = response;
        err.status = response.status;

        throw await err.response.json();
      }

      return withoutResponse ? response : response.json();
    })
    .catch(error => Promise.reject(error));
}
