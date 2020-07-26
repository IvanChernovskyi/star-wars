import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

import { formatDate } from '../../helpers/helpers';
import { getFilmsPage } from '../../services/Api';
import S from '../../assets/style.module.css';

const FilmsPage = props => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    drowFilmsPage();
  }, []);

  const drowFilmsPage = () =>
    getFilmsPage().then(data => setFilms(data.results));

  const { location } = props;
  return (
    <ul className={S.list}>
      {films.map(({ title, producer, opening_crawl, release_date, url }) => (
        <li className={S.list__item} key={shortid()}>
          <Link
            to={{
              pathname: `${url}`.slice(21),
              state: { from: location },
            }}
            className={S.list__link}
          >
            <button className={S.list__btn}>{`\u25c0`} More Info</button>
          </Link>
          <h2 className={S.list__title}>{title}</h2>
          <span className={S.list__date}>{formatDate(release_date)}</span>
          <p className={S.list__producer}>Producer: {producer}</p>
          <p className={S.list__description}>
            {opening_crawl.substring(0, 260)}...
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FilmsPage;
