const host = ' http://localhost:3030';

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
    const res = await fetch(`${host}${url}`, options);

    if (res.ok !== true) {
      if (res.status === 403) {
        localStorage.removeItem('user');
        throw new Error('Access denied!');
      }
      const error = res.json();
      throw new Error(error.message);
    }

    return res.status === 204 ? res : res.json();
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
