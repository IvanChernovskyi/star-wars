import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { getPlanetsPage } from '../../services/Api';
import S from '../../assets/style.module.css';

const PalnetsPage = props => {
  const [palnets, setPalnets] = useState([]);

  useEffect(() => {
    drowPlanetsPage();
  }, []);

  const drowPlanetsPage = () =>
    getPlanetsPage().then(({ data }) => setPalnets(data.results));

  return (
    <ul className={S.list}>
      {palnets.map(({ name, climate, gravity, population, terrain }) => (
        <li className={S.list__item} key={shortid()}>
          <h2 className={S.list__title}>{name}</h2>
          <span className={S.list__date}>Population: {population}</span>
          <p className={S.list__hair_color}>Gravity: {gravity}</p>
          <p className={S.list__height}>Climate: {climate}</p>
          <p className={S.list__mass}>Terrain: {terrain}</p>
        </li>
      ))}
    </ul>
  );
};

export default PalnetsPage;
