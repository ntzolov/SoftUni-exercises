import { useState } from 'react';

export const useUser = () => {
  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    let user = JSON.parse(userString);

    return user;
  };

  const [user, setUser] = useState(getUser());
  const saveUser = (user, isDelete) => {
    if (isDelete) {
      sessionStorage.removeItem('user');
      setUser(null);
      return;
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };
  return {
    setUser: saveUser,
    user,
  };
};

export default useUser;
