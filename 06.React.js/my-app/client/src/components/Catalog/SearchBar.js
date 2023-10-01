import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';

export const SearchBar = () => {
  const { onSearchSubmit, setSearchValue, searchValue } = useContext(globalContext);

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={(e) => onSearchSubmit(e)}>
        <input
          onChange={onSearchChange}
          value={searchValue}
          type="search"
          className="search-input"
          name="search"
          placeholder="Search character..."
        />
        <input type="submit" className="search-submit" value="Submit" />
      </form>
    </div>
  );
};
