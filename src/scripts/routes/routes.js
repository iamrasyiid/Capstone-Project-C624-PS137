import Beranda from '../views/pages/beranda';
import Explore from '../views/pages/explore';
import Detail from '../views/pages/detail';
import Contact from '../views/pages/contact';
 
const routes = {
  '/': Beranda,
  '/bbl': Beranda,
  '/beranda': Beranda,
  '/explore': Explore,
  '/contact': Contact,
  '/detail/:id': Detail,
};
 
export default routes;