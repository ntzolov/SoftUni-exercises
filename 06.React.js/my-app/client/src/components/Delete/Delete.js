import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteCharacterById } from '../../services/characterServices';

export const Delete = () => {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const [result, setResult] = useState('');

  useEffect(() => {
    deleteCharacterById(characterId).then((result) => {
      setResult(result);
    });
  }, [characterId]);

  useEffect(() => {
    navigate('/catalog');
  }, [result, navigate]);
};
