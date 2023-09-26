import { useContext, useEffect, useState } from 'react';
import { getCharacterById } from '../../services/characterServices';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { globalContext } from '../../contexts/globalContext';

export const Details = () => {
  const [character, setCharacter] = useState({});
  const { characterId } = useParams();
  const { user, onDeleteSubmit } = useContext(globalContext);
  const navigate = useNavigate();
  const isAdmin = user ? user.isAdmin : null;
  const isOwner = user ? user._id === character._ownerId : null;

  useEffect(() => {
    getCharacterById(characterId)
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => console.log(error));
  }, [characterId]);

  const onEditClick = (e) => {
    navigate(`/catalog/${characterId}/edit`);
  };

  const onDeleteClick = (e, characterId) => {
    onDeleteSubmit(e, characterId);
  };

  return (
    <>
      {Object.values(character).length ? (
        <div className="container-details">
          <div className="image-title">
            <div className="image">
              <img src={character.imageUrl} alt="" />
            </div>
            <h1>{character.name}</h1>
          </div>

          <div className="content">
            <div className="title-text">
              <p className="section-title">Created By:</p>
              <div className="section-text">{character.createdBy}</div>
            </div>
            <div className="title-text">
              <p className="section-title">Performed By:</p>
              <div className="section-text">{character.performedBy}</div>
            </div>
            <div className="title-text">
              <p className="section-title">First appearance:</p>
              <div className="section-text">{character.firstAppearance}</div>
            </div>
            <div className="title-text">
              <p className="section-title">Description:</p>
              <div className="section-text">{character.description}</div>
            </div>
            <div className="title-text">
              <p className="section-title">Famous line:</p>
              <div className="section-text">{character.famousLine}</div>
            </div>
          </div>
          <div className="buttons">
            {isOwner || isAdmin ? (
              <>
                <button onClick={onEditClick} className="button-edit">
                  edit
                </button>
                <button onClick={(e) => onDeleteClick(e, characterId)} className="button-delete">
                  delete
                </button>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
