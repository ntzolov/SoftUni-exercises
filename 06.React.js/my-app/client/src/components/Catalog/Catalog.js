import { useContext } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { CatalogItem } from './CatalogItem';
import { Spinner } from '../Spinner/Spinner';

export const Catalog = () => {
  const { characters } = useContext(globalContext);

  return (
    <div className="card-container">
      {characters.length ? characters.map((character) => <CatalogItem key={character._id} character={character} />) : <Spinner />}
    </div>
  );
};
