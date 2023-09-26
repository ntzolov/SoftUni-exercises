import { useContext, useEffect, useState } from 'react';
import { getCharacterById } from '../../services/characterServices';
import { useParams } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';
import { Spinner } from '../Spinner/Spinner';

export const Edit = () => {
  const { characterId } = useParams();
  const [isComplete, setIsComplete] = useState(false);
  const { editError, onEditSubmit } = useContext(globalContext);
  const [editValues, setEditValues] = useState({
    name: '',
    imageUrl: '',
    createdBy: '',
    performedBy: '',
    firstAppearance: '',
    description: '',
    famousLine: '',
  });

  useEffect(() => {
    getCharacterById(characterId)
      .then((character) => {
        setEditValues({
          name: character.name,
          imageUrl: character.imageUrl,
          createdBy: character.createdBy,
          performedBy: character.performedBy,
          firstAppearance: character.firstAppearance,
          description: character.description,
          famousLine: character.famousLine,
        });
        setIsComplete(true);
      })
      .catch((error) => console.log(error));
  }, [characterId]);

  const onEditChange = (e) => {
    setEditValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {isComplete ? (
        <div className="container-create">
          <h1>Edit character</h1>
          <form onSubmit={(e) => onEditSubmit(e, characterId, editValues)}>
            <div className="label-input">
              <label htmlFor="name">Name:</label>
              <input
                onChange={onEditChange}
                value={editValues.name}
                name="name"
                placeholder="Character name"
                type="text"
                required=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="name">Image URL:</label>
              <input
                onChange={onEditChange}
                value={editValues.imageUrl}
                name="imageUrl"
                placeholder="Use only landscape images"
                type="text"
                required=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="name">Created by:</label>
              <input
                onChange={onEditChange}
                value={editValues.createdBy}
                name="createdBy"
                placeholder="Created by"
                type="text"
                required=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="name">Performed by:</label>
              <input
                onChange={onEditChange}
                value={editValues.performedBy}
                name="performedBy"
                placeholder="Performed by"
                type="text"
                required=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="name">First appearance:</label>
              <input
                onChange={onEditChange}
                value={editValues.firstAppearance}
                name="firstAppearance"
                placeholder="First appearance"
                type="text"
                required=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="name">Description:</label>
              <input
                onChange={onEditChange}
                value={editValues.description}
                name="description"
                placeholder="Short description"
                type="text"
                required=""
              />
            </div>
            <div className="label-input">
              <label htmlFor="name">Famous line:</label>
              <input
                onChange={onEditChange}
                value={editValues.famousLine}
                name="famousLine"
                placeholder="Some famous line"
                type="text"
                required=""
              />
            </div>
            {editError && <div className="error">{editError}</div>}
            <button className="button-create" type="submit">
              Edit
            </button>
          </form>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
