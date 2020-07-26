import React from 'react';
import { NavLink } from 'react-router-dom';
import router from '../../router';
import S from './Navigation.module.css';

const Navigation = () => (
  <ul className={S.lsit}>
    <li className={S.list__item}>
      <NavLink
        exact
        className={S.link}
        activeClassName={S.active__link}
        to={router.FILMS}
      >
        films
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        className={S.link}
        activeClassName={S.active__link}
        to={router.PEOPLE}
      >
        people
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        className={S.link}
        activeClassName={S.active__link}
        to={router.PLANETS}
      >
        planets
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        className={S.link}
        activeClassName={S.active__link}
        to={router.SPECIES}
      >
        species
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        className={S.link}
        activeClassName={S.active__link}
        to={router.STARSHIPS}
      >
        starships
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        className={S.link}
        activeClassName={S.active__link}
        to={router.VIHICLES}
      >
        vehicles
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
