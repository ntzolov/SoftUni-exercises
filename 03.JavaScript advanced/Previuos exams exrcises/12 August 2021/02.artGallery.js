class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
    this.personalities = {
      Vip: 500,
      Middle: 250,
    };
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();

    if (this.possibleArticles.hasOwnProperty(articleModel)) {
      const elFound = this.listOfArticles.find((el) => {
        return el.articleModel === articleModel;
      });

      if (elFound) {
        return elFound.quantity += quantity;
      } else {
        this.listOfArticles.push({
          articleModel,
          articleName,
          quantity,
        });
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
      }
    }

    throw new Error('This article model is not included in this gallery!');
  }

  inviteGuest(guestName, personality) {
    const findGuest = this.guests.find((el) => {
      return el.guestName === guestName;
    });

    if (findGuest) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points = null;
    if (this.personalities[personality]) {
      points = this.personalities[personality];
    } else {
      points = 50;
    }

    this.guests.push({
      guestName,
      points,
      purchaseArticle: 0,
    });

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    const findName = this.listOfArticles.find((el) => {
      return el.articleName === articleName;
    });

    if (!findName) {
      throw new Error('This article is not found.');
    }

    if (findName.articleModel !== articleModel) {
      throw new Error('This article is not found.');
    }

    if (findName.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    const findGuest = this.guests.find((el) => {
      return el.guestName === guestName;
    });

    if (!findGuest) {
      return 'This guest is not invited.';
    }

    if (findGuest.points < this.possibleArticles[articleModel]) {
     return 'You need to more points to purchase the article.';
    } else {
      findGuest.points -= this.possibleArticles[articleModel];
      findName.quantity--;
      findGuest.purchaseArticle++;
      return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }
  }

  showGalleryInfo(criteria) {
    const toPrint = [];

    if (criteria === 'article') {
      toPrint.push('Articles information:');

      this.listOfArticles.forEach((el) => {
        toPrint.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`);
      });
    } else if (criteria === 'guest') {
      toPrint.push('Guests information:');

      this.guests.forEach((el) => {
        toPrint.push(`${el.guestName} - ${el.purchaseArticle}`);
      });
    }

    return toPrint.join('\n');
  }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

