import Home from '../views/pages/home';
import FavoritesPage from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home-page': Home,
  '/favorites': FavoritesPage,
  '/detail/:id': Detail,
};

export default routes;
