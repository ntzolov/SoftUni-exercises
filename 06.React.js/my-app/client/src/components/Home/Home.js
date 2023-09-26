import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

export const Home = () => {
  const { user } = useContext(globalContext);
  const username = user?.username;

  return <>{user ? <h1>Hello, {username}!</h1> : <h1>Hello, guest!</h1>}</>;
};
