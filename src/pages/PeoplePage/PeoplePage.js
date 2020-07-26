import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { getPeoplePage } from '../../services/Api';
import S from '../../assets/style.module.css';

const PeoplePage = props => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    drowPeoplePage();
  }, []);

  const drowPeoplePage = () =>
    getPeoplePage().then(data => setPeople(data.results));

  return (
    <ul className={S.list}>
      {people.map(({ name, hair_color, mass, gender, homeworld, height }) => (
        <li className={S.list__item} key={shortid()}>
          <h2 className={S.list__title}>{name}</h2>
          <span className={S.list__date}>{gender}</span>
          <p className={S.list__hair_color}>Hair color: {hair_color}</p>
          <p className={S.list__height}>Height: {height}</p>
          <p className={S.list__mass}>Mass: {mass}</p>
        </li>
      ))}
    </ul>
  );
};

export default PeoplePage;
