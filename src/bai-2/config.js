const BASE_URL = "https://665f0fcd1e9017dc16f2a71a.mockapi.io/api";

/**
 * @param {RequestInfo} url
 * @param {RequestInit} opts
 */
export const fetchApi = (url, opts = {}) => {
  // fetch: Là hàm để gọi api mặc định của trình duyệt.

  /**
   * method
   * body
   * headers
   */
  return fetch(`${BASE_URL}/${url}`, {
    ...opts,
    headers: {
      "content-type": "application/json",
      ...opts.headers,
    },
  });
};
