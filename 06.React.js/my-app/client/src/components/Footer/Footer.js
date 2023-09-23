import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <span>
          All rights reserved &#169; <Link to={'https://github.com/ntzolov'}>My Github</Link>
        </span>
      </div>
    </footer>
  );
};
