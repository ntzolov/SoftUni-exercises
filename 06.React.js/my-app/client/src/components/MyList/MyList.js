export const MyList = () => {
  return (
    <div className="container-details">
      <div className="image-title">
        <div className="image">
          <img src="https://static.digitecgalaxus.ch/Files/1/8/4/8/3/1/3/6/Teaser_Bild_format21.jpeg" alt="" />
        </div>
        <h1>Gollum/Smeagol</h1>
      </div>

      <div className="content">
        <div className="title-text">
          <p className="section-title">Created By:</p>
          <div className="section-text">Gollum is a fictional character in J. R. R. Tolkien's Middle-earth legendarium</div>
        </div>
        <div className="title-text">
          <p className="section-title">Performed By:</p>
          <div className="section-text">
            Andy Serkis in The Lord of the Rings film trilogy (2001-2003) and The Hobbit: An Unexpected Journey (2012){' '}
          </div>
        </div>
        <div className="title-text">
          <p className="section-title">First appearance:</p>
          <div className="section-text">Gene Deitch's 1967 short film The Hobbit</div>
        </div>
        <div className="title-text">
          <p className="section-title">Description:</p>
          <div className="section-text">
            Sméagol was a Hobbit of riverland Stoor-kind who lived on the banks of the Anduin in the later Third Age. Sméagol
            belonged to the reputable family of the stern and wise Matriarch. He spent the early years of his life living with his
            extended family during the Watchful Peace, when Sauron was in the East.
          </div>
        </div>
        <div className="title-text">
          <p className="section-title">Famous line:</p>
          <div className="section-text">"It came to me, my own, my love, my precious." </div>
        </div>
      </div>
      <div className="buttons">
        <button className="button-edit">edit</button>
        <button className="button-delete">delete</button>
      </div>
    </div>
  );
};
