import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} />
        <Route path="/tv" component={TvShows} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
