import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import { getVehiclesPage } from '../../services/Api';
import S from '../../assets/style.module.css';

const VehiclesPage = props => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    drowVehiclesPage();
  }, []);

  const drowVehiclesPage = () =>
    getVehiclesPage().then(data => setVehicles(data.results));

  return (
    <ul className={S.list}>
      {vehicles.map(({ name, manufacturer, vehicle_class }) => (
        <li className={S.list__item} key={shortid()}>
          <h2 className={S.list__title}>{name}</h2>
          <span className={S.list__date}>vehicle_class: {vehicle_class}</span>
          <p className={S.list__hair_color}>Manufacturer: {manufacturer}</p>
        </li>
      ))}
    </ul>
  );
};

export default VehiclesPage;
