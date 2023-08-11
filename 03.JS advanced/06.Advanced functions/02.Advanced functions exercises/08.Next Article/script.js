function getArticleGenerator(articles) {
  let input = articles

  return () => {
    if (input.length > 0) {
      let content = document.getElementById('content');
      let article = document.createElement('article');
      let text = input.shift()
      article.innerText = text;
      content.appendChild(article);
    }
  };
}
