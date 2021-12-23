import { Router } from 'express';

import epiceRoutes from '@modules/Registration/routes/Register.routes';

const routes = Router();

routes.use('/epiceData', epiceRoutes);

export default routes;
