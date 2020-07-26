import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Loader from '../components/Loader/Loader';
import Header from '../components/Header/Header';
import router from '../router';
import S from './style.module.css';

const AsyncHomePage = lazy(() =>
  import('../pages/FilmsPage/FilmsPage' /* webpackChunkName: "FilmsPage" */),
);

const AsyncFilmsDetailPage = lazy(() =>
  import(
    '../pages/DetailPage/FilmsDetailPage' /* webpackChunkName: "FilmsDetailPage" */
  ),
);

const AsyncPeoplePage = lazy(() =>
  import('../pages/PeoplePage/PeoplePage' /* webpackChunkName: "PeoplePage" */),
);

const AsyncPlanetsPage = lazy(() =>
  import(
    '../pages/PlanetsPage/PlanetsPage' /* webpackChunkName: "PlanetsPage" */
  ),
);

const AsyncSpeciesPage = lazy(() =>
  import(
    '../pages/SpeciesPage/SpeciesPage' /* webpackChunkName: "SpeciesPage" */
  ),
);

const AsyncStarshipsPage = lazy(() =>
  import(
    '../pages/StarshipsPage/StarshipsPage' /* webpackChunkName: "StarshipsPage" */
  ),
);

const AsyncVehiclesPage = lazy(() =>
  import(
    '../pages/VehiclesPage/VehiclesPage' /* webpackChunkName: "VehiclesPage" */
  ),
);

const AsyncNotFoundPage = lazy(() =>
  import(
    '../pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "NotFoundPage" */
  ),
);

const App = () => {
  return (
    <div className={S.App}>
      <Navigation />
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={router.FILMS} component={AsyncHomePage} />
          <Route path="/films/:id" component={AsyncFilmsDetailPage} />
          <Route path={router.PEOPLE} component={AsyncPeoplePage} />
          <Route path={router.PLANETS} component={AsyncPlanetsPage} />
          <Route path={router.SPECIES} component={AsyncSpeciesPage} />
          <Route path={router.STARSHIPS} component={AsyncStarshipsPage} />
          <Route path={router.VIHICLES} component={AsyncVehiclesPage} />

          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
