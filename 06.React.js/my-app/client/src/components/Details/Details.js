import { useContext, useEffect, useState } from 'react';
import { editCharacter, getCharacterById } from '../../services/characterServices';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { globalContext } from '../../contexts/globalContext';

export const Details = () => {
  const [character, setCharacter] = useState({});
  const { characterId } = useParams();
  const { user, onDeleteSubmit } = useContext(globalContext);
  const [isUserLiked, setIsUserLiked] = useState(false);
  const [isUserFavorited, setIsUserFavorited] = useState(false);
  const navigate = useNavigate();
  const isAdmin = user ? user.isAdmin : null;
  const isOwner = user ? user._id === character._ownerId : null;

  useEffect(() => {
    getCharacterById(characterId)
      .then((character) => {
        setCharacter(character);
        if (user !== null) {
          setIsUserLiked(character.usersLiked.some((userId) => userId === user._id));
          setIsUserFavorited(character.usersFavorited.some((userId) => userId === user._id));
        }
      })
      .catch((error) => console.log(error));
  }, [characterId, user]);

  const onEditClick = (e) => {
    navigate(`/catalog/${characterId}/edit`);
  };

  const onDeleteClick = (e, characterId) => {
    onDeleteSubmit(e, characterId);
  };

  const onBackHandler = () => {
    navigate(-1);
  };

  const onLikeClick = async () => {
    const character = await getCharacterById(characterId);

    if (!isUserLiked) {
      character.likes++;
      character.usersLiked.push(user._id);
      setCharacter(character);
      setIsUserLiked(true);
    } else {
      character.likes--;
      const indexDelete = character.usersLiked.findIndex((id) => id === user._id);
      character.usersLiked.splice(indexDelete, 1);
      setCharacter(character);
      setIsUserLiked(false);
    }

    await editCharacter(characterId, character);
  };

  const onFavoriteClick = async () => {
    const character = await getCharacterById(characterId);

    if (!isUserFavorited) {
      character.usersFavorited.push(user._id);
      setCharacter(character);
      setIsUserFavorited(true);
    } else {
      const indexDelete = character.usersFavorited.findIndex((id) => id === user._id);
      character.usersFavorited.splice(indexDelete, 1);
      setCharacter(character);
      setIsUserFavorited(false);
    }

    await editCharacter(characterId, character);
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

          <div className="container-details-wrapper">
            {user ? (
              <>
                <div className="container-likes">
                  <i className="fa-solid fa-heart" style={{ color: isUserLiked ? 'red' : 'grey' }} onClick={onLikeClick}></i>
                  <p>Total likes: {character.likes}</p>
                </div>

                <div className="container-favorites">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: isUserFavorited ? 'goldenrod' : 'grey' }}
                    onClick={onFavoriteClick}></i>
                  <p>{isUserFavorited ? 'Added in favorites' : 'Add in favorites'}</p>
                </div>
              </>
            ) : (
              ''
            )}

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
            {/* </div> */}
          </div>

          <button onClick={onBackHandler} className="button-back">
            BACK
          </button>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
