import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { getSpeciesPage } from '../../services/Api';
import S from '../../assets/style.module.css';

const SpeciesPage = props => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    drowSpeciesPage();
  }, []);

  const drowSpeciesPage = () =>
    getSpeciesPage().then(({ data }) => setSpecies(data.results));

  return (
    <ul className={S.list}>
      {species.map(({ name, classification, language, skin_colors }) => (
        <li className={S.list__item} key={shortid()}>
          <h2 className={S.list__title}>{name}</h2>
          <span className={S.list__date}>Classification: {classification}</span>
          <p className={S.list__hair_color}>Language: {language}</p>
          <p className={S.list__height}>Skin colors: {skin_colors}</p>
        </li>
      ))}
    </ul>
  );
};

export default SpeciesPage;
