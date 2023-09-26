import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';

export const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(globalContext);

  useEffect(() => {
    setUser(true, true);
    navigate('/');
  }, [navigate, setUser]);
};
