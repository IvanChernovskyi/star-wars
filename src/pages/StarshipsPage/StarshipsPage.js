import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { getStarshipsPage } from '../../services/Api';
import S from '../../assets/style.module.css';

const StarshipsPage = props => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    drowStarshipsPage();
  }, []);

  const drowStarshipsPage = () =>
    getStarshipsPage().then(data => setStarships(data.results));

  return (
    <ul className={S.list}>
      {starships.map(({ name, manufacturer, starship_class }) => (
        <li className={S.list__item} key={shortid()}>
          <h2 className={S.list__title}>{name}</h2>
          <span className={S.list__date}>Starship class: {starship_class}</span>
          <p className={S.list__hair_color}>Manufacturer: {manufacturer}</p>
        </li>
      ))}
    </ul>
  );
};

export default StarshipsPage;
