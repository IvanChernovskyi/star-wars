import axios from 'axios';
const API_URL = 'https://swapi.dev/api/';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const getFilmsPage = () => axios.get(`${API_URL}films`);

export const getPeoplePage = () => axios.get(`${API_URL}people`);

export const getPlanetsPage = () => axios.get(`${API_URL}planets`);

export const getSpeciesPage = () => axios.get(`${API_URL}species`);

export const getStarshipsPage = () => axios.get(`${API_URL}starships`);

export const getVehiclesPage = () => axios.get(`${API_URL}vehicles`);
