import { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

export const Create = () => {
  const [createValues, setCreateValues] = useState({
    name: '',
    imageUrl: '',
    createdBy: '',
    performedBy: '',
    firstAppearance: '',
    description: '',
    famousLine: '',
  });
  const { createError, onCreateSubmit } = useContext(globalContext);

  const onCreateChange = (e) => {
    setCreateValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container-create">
      <h1>Create character</h1>
      <form onSubmit={(e) => onCreateSubmit(e, createValues)}>
        <div className="label-input">
          <label htmlFor="name">Name:</label>
          <input
            onChange={onCreateChange}
            value={createValues.name}
            name="name"
            placeholder="Character name"
            type="text"
            required=""
          />
        </div>
        <div className="label-input">
          <label htmlFor="name">Image URL:</label>
          <input
            onChange={onCreateChange}
            value={createValues.imageUrl}
            name="imageUrl"
            placeholder="Use only landscape images"
            type="text"
            required=""
          />
        </div>
        <div className="label-input">
          <label htmlFor="name">Created by:</label>
          <input
            onChange={onCreateChange}
            value={createValues.createdBy}
            name="createdBy"
            placeholder="Created by"
            type="text"
            required=""
          />
        </div>
        <div className="label-input">
          <label htmlFor="name">Performed by:</label>
          <input
            onChange={onCreateChange}
            value={createValues.performedBy}
            name="performedBy"
            placeholder="Performed by"
            type="text"
            required=""
          />
        </div>
        <div className="label-input">
          <label htmlFor="name">First appearance:</label>
          <input
            onChange={onCreateChange}
            value={createValues.firstAppearance}
            name="firstAppearance"
            placeholder="First appearance"
            type="text"
            required=""
          />
        </div>
        <div className="label-input">
          <label htmlFor="name">Description:</label>
          <input
            onChange={onCreateChange}
            value={createValues.description}
            name="description"
            placeholder="Short description"
            type="text"
            required=""
          />
        </div>
        <div className="label-input">
          <label htmlFor="name">Famous line:</label>
          <input
            onChange={onCreateChange}
            value={createValues.famousLine}
            name="famousLine"
            placeholder="Some famous line"
            type="text"
            required=""
          />
        </div>
        {createError && <div className="error">{createError}</div>}
        <button className="button-create" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
