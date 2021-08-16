import express from 'express';

import dispatchResponse from '../helpers/http/response-dispatcher';
import defaultRouteHandler from '../helpers/http/default-route-handler';

const defaultRouter = express.Router();
const defaultRoute = defaultRouteHandler();

defaultRouter.all('*', (req, res) => dispatchResponse(res, defaultRoute));

export default defaultRouter;
