// Importando el Router de Express
import { Router } from 'express';
// Importando el controlador
import homeController from './homeController';
// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get(['/', '/home', '/index'], homeController.home);

// GET '/main
router.get(['/main'], homeController.main);

// Exporto este tramo de ruta
export default router;