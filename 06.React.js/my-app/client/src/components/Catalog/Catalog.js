import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { CatalogItem } from './CatalogItem';
import { Spinner } from '../Spinner/Spinner';
import { SearchBar } from './SearchBar';
import { Pagination } from './Pagination';
import { Category } from './Category';

export const Catalog = () => {
  const { characters, user } = useContext(globalContext);

  return characters.length ? (
    <div className="container-catalog">
      <SearchBar />
      {user && <Category />}
      <div className="card-container">
        {characters[0].error ? (
          <h1>No characters found!</h1>
        ) : (
          characters.map((character) => <CatalogItem key={character._id} character={character} />)
        )}
      </div>
      <Pagination />
    </div>
  ) : (
    <Spinner />
  );
};
