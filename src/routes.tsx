import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:movieId" component={Movies} />
        <Route path="/tv/:tvshowId" component={TvShows} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
