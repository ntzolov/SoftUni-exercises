import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <span>
          This APP was made with React.js - <Link to={'https://github.com/ntzolov'}>My Github</Link>
        </span>{' '}
        <span>All rights reserved &#169;</span>
      </div>
    </footer>
  );
};
