import { Router } from 'express';
import OrphanagesController from '../controllers/OrphanagesController';
const routes = Router();
import multer from 'multer';
import uploadConfig from '../../config/upload';

const upload = multer(uploadConfig);

const orphanagesController = new OrphanagesController();

routes.post(
    '/orphanages', 
    upload.array('images'), 
    orphanagesController.create
);
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);

export default routes;