export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function removeUser() {
  localStorage.removeItem('user');
}

export function getFormData() {
  try {
    const formData = Object.fromEntries(new FormData(document.querySelector('form')));

    for (let value of Object.values(formData)) {
      if (value === '') {
        throw new Error('All fields are required!');
      }
    }

    return formData;
  } catch (error) {
    throw error
  }
}
