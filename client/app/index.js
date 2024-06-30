
import ClientRouter from './ClientRouter.js';
import routes from '../common/routes.js';

const container = document.getElementById('container');
const router = new ClientRouter(container, routes);

router.run();
