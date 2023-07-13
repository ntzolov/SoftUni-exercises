const host = 'http://localhost:3030';

async function requester(method, url, data) {
  const userData = JSON.parse(localStorage.getItem('user'));

  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if (userData) {
    options.headers['X-Authorization'] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (response.ok !== true) {
      if (response.status === 403) {
        localStorage.removeItem('user');
        throw new Error('Access denied!');
      }
      const error = response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export { get, post, put, del };
