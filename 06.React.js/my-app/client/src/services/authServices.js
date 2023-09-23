import * as request from '../utils/requester';

export const register = async (userData) => {
  const result = await request.post('/auth/register', userData);
  console.log('client register service');

  return result;
};
