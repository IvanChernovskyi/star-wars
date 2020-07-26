import React from 'react';
import { NavLink } from 'react-router-dom';
import router from '../../router';

const NotFoundPage = () => (
  <>
    <h1 style={{ textAlign: 'center' }}>
      Sorry, page not found
      <span role="img" aria-label="emoji">
        🤔
      </span>
      <NavLink to={router.FILMS}>Back to Films Page</NavLink>
    </h1>
  </>
);

export default NotFoundPage;
