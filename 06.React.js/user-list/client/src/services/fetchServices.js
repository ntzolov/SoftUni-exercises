const baseUrl = 'http://localhost:3005/api/users';

export async function createUser(dataObj) {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  });

  const json = await res.json();
  return json.user;
}

export async function editUser(dataObj, id) {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(dataObj),
  });

  const json = await res.json();
  return json.user;
}

export async function deleteUser(id) {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });

  const userId = await res.json();
  return userId;
}

export async function getUser(id) {
  const res = await fetch(`${baseUrl}/${id}`);
  const user = res.json();

  return user;
}
