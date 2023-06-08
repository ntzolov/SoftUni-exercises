async function requester(method, url, data) {
  const host = 'http://localhost:3030/';

  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options['body'] = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    alert(error);
  }
}

const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export { get, post, put, del };
