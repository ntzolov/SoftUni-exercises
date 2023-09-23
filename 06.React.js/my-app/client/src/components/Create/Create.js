export const Create = () => {
  return (
    <div class="container-create">
      <form>
        <div className="label-input">
          <label htmlFor="name">Name:</label>
          <input name="name" placeholder="Character name" type="text" required="" />
        </div>
        <div className="label-input">
          <label htmlFor="name">Image URL:</label>
          <input name="imageUrl" placeholder="Use only landscape images" type="text" required="" />
        </div>
        <div className="label-input">
          <label htmlFor="name">Created by:</label>
          <input name="createdBy" placeholder="Created by" type="text" required="" />
        </div>
        <div className="label-input">
          <label htmlFor="name">Performed by:</label>
          <input name="performedBy" placeholder="Performed by" type="text" required="" />
        </div>
        <div className="label-input">
          <label htmlFor="name">First appearance:</label>
          <input name="firstAppearance" placeholder="First appearance" type="text" required="" />
        </div>
        <div className="label-input">
          <label htmlFor="name">Description:</label>
          <input name="description" placeholder="Short description" type="text" required="" />
        </div>
        <div className="label-input">
          <label htmlFor="name">Famous line:</label>
          <input name="famousLine" placeholder="Some famous line" type="text" required="" />
        </div>
        <button className="button-create" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
