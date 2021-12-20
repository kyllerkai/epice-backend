import { Router } from 'express';

import epiceRoutes from '@modules/Registration/routes/Register.routes';

const routes = Router();

routes.use('/epiceDb', epiceRoutes);

export default routes;
