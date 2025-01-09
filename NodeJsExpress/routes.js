import { Router } from 'express';
import DogController from './controllers/DogController.js';
import SchemaValidationMiddleware from './middlewares/SchemaValidationMiddleware.js';
import updateDogPayload from './schemas/updateDogPayload.js';
import createDogPayload from './schemas/createDogPayload.js';

const router = Router();

router.get('/:id', [], DogController.getDog);

router.get('/', [], DogController.getAllDogs);

router.post('/', [
    SchemaValidationMiddleware.verify(createDogPayload)
], DogController.addDog);

router.patch('/:id', [
    SchemaValidationMiddleware.verify(updateDogPayload)
], DogController.updateDog);

router.delete('/:id', [], DogController.deleteDog);

export default router;