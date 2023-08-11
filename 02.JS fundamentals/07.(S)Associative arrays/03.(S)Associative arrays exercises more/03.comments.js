function comments(input) {
  const users = [];
  const articles = [];
  const comments = {};

  for (let line of input) {
    if (line.indexOf('user') === 0) {
      const [command, userName] = line.split(' ');
      if (!users.includes(userName)) {
        users.push(userName);
      }
    } else if (line.indexOf('article') === 0) {
      const [command, article] = line.split(' ');
      if (!articles.includes(article)) {
        articles.push(article);
      }
    } else {
      const [line1, line2] = line.split(': ');
      const [userName, article] = line1.split(' posts on ');
      const [title, content] = line2.split(', ');
      if (users.includes(userName) && articles.includes(article)) {
        if (!comments.hasOwnProperty(article)) {
          comments[article] = [];
        }
        comments[article].push({ userName, title, content });
      }
    }
  }

  const sortedComments = Object.keys(comments).sort(
    (a, b) => comments[b].length - comments[a].length
  );

  for (let article of sortedComments) {
    console.log(`Comments on ${article}`);
    const commentsArticle = comments[article];

    const sortedComments = commentsArticle.sort((a, b) =>
      a.userName.localeCompare(b.userName)
    );

    console.log(sortedComments);
    for (let comment of sortedComments) {
      console.log(`--- From user ${comment.userName}: ${comment.title} - ${comment.content}`);
    }
  }
}

comments([
  'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books',
  'article Movies',
  'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much',
]);
