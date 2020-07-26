const API_URL = 'https://swapi.dev/api/';

export const getFilmsPage = () =>
  fetch(`${API_URL}films`.replace('http', 'http')).then(res => res.json());

export const getPeoplePage = () =>
  fetch(`${API_URL}people`.replace('http', 'https')).then(res => res.json());

export const getPlanetsPage = () =>
  fetch(`${API_URL}planets`.replace('http', 'https')).then(res => res.json());

export const getSpeciesPage = () =>
  fetch(`${API_URL}species`.replace('http', 'https')).then(res => res.json());

export const getStarshipsPage = () =>
  fetch(`${API_URL}starships`.replace('http', 'https')).then(res => res.json());

export const getVehiclesPage = () =>
  fetch(`${API_URL}vehicles`.replace('http', 'https')).then(res => res.json());
