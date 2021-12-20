import { Router } from 'express';

import epiceDbControllers from '../controllers/epiceDbControllers';

const routes = Router();

const registerController = new epiceDbControllers();

routes.post('/', registerController.create);
routes.get('/', registerController.index);
routes.put('/:id', registerController.update);
routes.delete('/:id', registerController.delete);

export default routes;
