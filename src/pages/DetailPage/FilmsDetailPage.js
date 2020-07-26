import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import S from './FilmsDetailPage.module.css';

const FilmsDetailPage = props => {
  const { id } = useParams();
  const [description, setDescription] = useState([]);

  useEffect(() => {
    getSinglFilms(id);
  }, []);

  const getSinglFilms = async id => {
    const res = await fetch(`https://swapi.dev/api/films/${id}`);
    const resJson = await res.json();
    const resCharacters = resJson.characters.map(url =>
      fetch(url.replace('http', 'https'))
        .then(data => data.json())
        .then(c => c.name),
    );
    const resPlanets = resJson.planets.map(url =>
      fetch(url.replace('http', 'https'))
        .then(data => data.json())
        .then(c => c.name),
    );
    const resSpecies = resJson.species.map(url =>
      fetch(url.replace('http', 'https'))
        .then(data => data.json())
        .then(c => c.name),
    );
    const resStarships = resJson.starships.map(url =>
      fetch(url)
        .then(data => data.json())
        .then(c => c.name),
    );
    const resVehicles = resJson.vehicles.map(url =>
      fetch(url.replace('http', 'https'))
        .then(data => data.json())
        .then(c => c.name),
    );

    const characters = await Promise.all(resCharacters);
    const planets = await Promise.all(resPlanets);
    const species = await Promise.all(resSpecies);
    const starships = await Promise.all(resStarships);
    const vehicles = await Promise.all(resVehicles);
    const data = {
      characters,
      director: resJson.director,
      description: resJson.opening_crawl,
      planets,
      producer: resJson.producer,
      releaseDate: resJson.release_date,
      species,
      starships,
      title: resJson.title,
      vehicles,
    };
    return setDescription(data);
  };

  const handleGoBack = () => {
    const { location, history } = props;
    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  console.log('description', description);
  const transformToArrDescription = [description];
  return (
    <>
      <ul className={S.list}>
        {transformToArrDescription.map(
          ({ title, producer, description, director }) => (
            <li className={S.list__item} key={shortid()}>
              <button className={S.btn} onClick={handleGoBack}>
                ← Back to list
              </button>
              <div className={S.main__info}>
                <h2 className={S.list__title}>{title}</h2>
                <p>Producer: {producer}</p>
                <p>Director: {director}</p>
              </div>
              <p>Descriptions:</p>
              <p>{description}</p>
            </li>
          ),
        )}
      </ul>
      <div>
        <h4 className={S.list__text}>vehicles</h4>

        <ul className={S.list}>
          {transformToArrDescription.map(({ vehicles }) => (
            <li className={S.description__item} key={shortid()}>
              {`${vehicles}`.split(' ,')}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className={S.list__text}>characters</h4>
        <ul className={S.list}>
          {transformToArrDescription.map(({ characters }) => (
            <li className={S.description__item} key={shortid()}>
              {`${characters}`.split(' ,')}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className={S.list__text}> planets</h4>
        <ul className={S.list}>
          {transformToArrDescription.map(({ planets }) => (
            <li className={S.description__item} key={shortid()}>
              {`${planets}`.split(' ,')}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={S.list__text}>species</h4>
        <ul className={S.list}>
          {transformToArrDescription.map(({ species }) => (
            <li className={S.description__item} key={shortid()}>
              {`${species}`.split(' ,')}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilmsDetailPage;
