async function request(method, url, data) {
  const host = 'http://localhost:3030';
  let userData = localStorage.getItem('user');

  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  if (userData) {
    userData = JSON.parse(userData);
    options.headers['X-Authorization'] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (response.ok !== true) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return;
    }

    const result = await response.json();

    return result;
  } catch (error) {
    alert(error.message);
    throw new Error(error.message);
  }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export { get, post, put, del };
