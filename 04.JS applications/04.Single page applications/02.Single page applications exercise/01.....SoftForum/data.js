export async function request(method, url, dataObj) {
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}
