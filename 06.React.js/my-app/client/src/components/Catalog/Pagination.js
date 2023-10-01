import { useContext, useEffect } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { useNavigate } from 'react-router-dom';

export const Pagination = () => {
  const navigate = useNavigate();
  const { setPage, page, searchValue } = useContext(globalContext);

  useEffect(() => {
    // navigate(`/catalog?search=${searchValue}&page=${page}`);
  }, [navigate, page, searchValue]);

  const setPageDecreaseHandler = () => {
    setPage((state) => {
      state = Number(state);
      if (state > 1) {
        return state - 1;
      } else {
        return state;
      }
    });
  };

  const setPageIncreaseHandler = () => {
    setPage((state) => Number(state) + 1);
  };

  return (
    <div className="pagination">
      <div className="pagination-buttons">
        <button onClick={setPageDecreaseHandler}>previous</button>
        <button onClick={setPageIncreaseHandler}>next</button>
      </div>
    </div>
  );
};
