import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

export const Category = () => {
  const { categoryValue, setCategoryValue } = useContext(globalContext);
  const onChangeCategory = (e) => {
    setCategoryValue(e.target.value);
  };

  return (
    <>
      <div className="container-category">
        <label htmlFor="category">Category:</label>
        <select onChange={onChangeCategory} value={categoryValue} name="category" id="category">
          <option value="all">All</option>
          <option value="liked">Liked</option>
          <option value="favorites">Favorites</option>
          <option value="my characters">My characters</option>
        </select>
      </div>
    </>
  );
};
