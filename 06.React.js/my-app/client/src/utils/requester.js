const requester = async (method, url, data) => {
  const host = 'http://localhost:3030';
  try {
    let options = {
      method,
    };

    if (data) {
      options.headers = {
        'content-type': 'application/json',
      };

      options.body = JSON.stringify(data);
    }

    const response = await fetch(host + url, options);
    const result = await response.json();

    if (response.ok !== true) {
      throw result;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
