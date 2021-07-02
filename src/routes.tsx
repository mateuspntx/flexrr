import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import SearchPage from './pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie" component={Movies} exact />
        <Route path="/movie/:movieId" component={Movies} />
        <Route path="/tv" component={TvShows} exact />
        <Route path="/tv/:tvshowId" component={TvShows} />
        <Route path="/search" component={SearchPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
