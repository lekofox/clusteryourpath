import { Router } from 'express';
import WhispController from './controller/fetchWhisp/WhispController';

const routes = new Router();

routes.get('/', (req, res) => res.status(200).json({
  message: 'Obrigado por acessar!',
}));

routes.get('/api/v1/large/8/:id/:position', WhispController.fetchEightPassivesClusterWhisp);
routes.get('/api/v1/large/12/:id/:position', WhispController.fetchTwelvePassiveClusterWhisp);
routes.get('/api/v1/medium/5/:id/:position', WhispController.fetchFivePassiveClusterWhisp);
routes.get('/api/v1/medium/4/:id/:position', WhispController.fetchFourPassiveClusterWhisp);

export default routes;
