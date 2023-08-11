import { getUser, removeUser } from '../util.js';

const host = 'http://localhost:3030';

async function requester(method, url, data) {
  const userData = getUser();

  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if (userData) {
    options.headers['X-Authorization'] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    let result;
    if (response.status !== 204) {
      result = await response.json();
    }

    if (response.ok === false) {
      if (response.status === 403) {
        removeUser();
      }
      const error = result;
      throw error;
    }

    return result;
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
