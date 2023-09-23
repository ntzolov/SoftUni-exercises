import * as request from '../utils/requester';

export const register = async (userData) => {
  try {
    const result = await request.post('/auth/register', userData);

    return result
  } catch (error) {
    throw error;
  }
};
