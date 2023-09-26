import * as request from '../utils/requester';

export const register = async (userDataObject) => {
  try {
    const result = await request.post('/auth/register', userDataObject);

    return result;
  } catch (error) {
    throw error;
  }
};

export const login = async (userDataObject) => {
  try {
    const result = await request.post('/auth/login', userDataObject);

    return result;
  } catch (error) {
    throw error;
  }
};
