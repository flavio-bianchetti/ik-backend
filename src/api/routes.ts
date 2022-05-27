import { Router } from 'express';
import * as cors from 'cors';
import { ScheduleController } from '../controllers';
import { ValidateRoutesEntries } from '../middlewares';

const routes = Router();

routes.use(cors());

routes.post(
  '/schedule',
  ValidateRoutesEntries.validateScheduleTask,
  ScheduleController.create,
);
routes.get(
  '/schedule',
  ScheduleController.findAll,
);
routes.get(
  '/schedule/:id',
  ValidateRoutesEntries.validateParamId,
  ScheduleController.find,
);
routes.put(
  '/schedule/task/:id',
  ValidateRoutesEntries.validateParamId,
  ValidateRoutesEntries.validateScheduleTask,
  ScheduleController.update,
);
routes.delete(
  '/schedule/task/:id',
  ValidateRoutesEntries.validateParamId,
  ScheduleController.delete,
);

export default routes;
