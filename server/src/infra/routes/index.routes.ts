import { Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';
import VisitController from '../controllers/VisitController';
const routes = Router();
import multer from 'multer';
import uploadConfig from '../../config/upload';

const upload = multer(uploadConfig);

const orphanagesController = new OrphanagesController();
const visitController = new VisitController();
routes.post(
    '/orphanages', 
    upload.array('images'), 
    orphanagesController.create
);
routes.post(
    '/visit',
    visitController.create
);
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);

export default routes;