function solution(string) {
  switch (string) {
    case 'upvote':
      this.upvotes++;
      break;
    case 'downvote':
      this.downvotes++;
      break;
    case 'score':
      let upvotesPrint = this.upvotes;
      let downvotesPrint = this.downvotes;
      let totalVotes = this.upvotes + this.downvotes;
      let rating = '';

      if (totalVotes > 50) {
        let addNumber = Math.ceil(
          Math.max(this.upvotes, this.downvotes) * 0.25
        );
        upvotesPrint += addNumber;
        downvotesPrint += addNumber;
      }

      if ((this.upvotes / totalVotes) * 100 > 66) {
        rating = 'hot';
      } else if ((this.upvotes / totalVotes) * 100 >= 50 && totalVotes > 100) {
        rating = 'controversial';
      } else if ((this.upvotes / totalVotes) * 100 < 50) {
        rating = 'unpopular';
      }

      if (totalVotes < 10 || !rating) {
        rating = 'new';
      }

      let result = [];
      result.push(upvotesPrint);
      result.push(downvotesPrint);
      result.push(this.upvotes - this.downvotes);
      result.push(rating);
      return result;
      // console.log(result);
  }
}

let post = {
  id: '1',
  author: 'pesho',
  content: 'hi guys',
  upvotes: 0,
  downvotes: 0,
};

solution.call(post, 'upvote');
// solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
