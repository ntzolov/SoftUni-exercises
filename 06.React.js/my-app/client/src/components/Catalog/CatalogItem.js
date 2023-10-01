import { useNavigate } from 'react-router-dom';

export const CatalogItem = ({ character }) => {
  const navigate = useNavigate();

  const onCharacterClick = (e) => {
    navigate(`/catalog/${character._id}`);
  };

  return (
    <div className="card" onClick={onCharacterClick}>
      <div className="image">
        <img src={character.imageUrl} alt="" />
      </div>
      <div className="content">
        <h1>{character.name}</h1>
        <p className="card-description">{character.description}</p>
        <p className="info">Click for more</p>
      </div>
    </div>
  );
};
