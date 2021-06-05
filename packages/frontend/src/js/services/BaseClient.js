export default class BaseClient {
  constructor() {
    this.domain = 'http://localhost/api';
  }

  async get(url) {
    return this.apiCall('GET', url);
  }

  async add(url, body) {
    return this.apiCall('POST', url, body);
  }

  async update(url, body) {
    return this.apiCall('PUT', url, body);
  }

  async delete(url) {
    return this.apiCall('DELETE', url);
  }

  async apiCall(method, url, body, headers) {
    const response = await fetch(url, {
      method,
      ...this.getHeaders(headers),
      ...body,
    });
    const result = await response.json();
    result.status = response.status;

    if (response.status === 200) {
      return result;
    }
    return Promise.reject(result);
  }

  getHeaders(headers) {
    return {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
  }
}
