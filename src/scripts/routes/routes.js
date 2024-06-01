import Beranda from '../views/pages/beranda';
import Explore from '../views/pages/explore';
import Detail from '../views/pages/detail';
import Contact from '../views/pages/contact';
 
const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/explore': Explore,
  '/contact': Contact,
  '/detail': Detail,
};
 
export default routes;