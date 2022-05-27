import { Request, Response } from 'express';
import { ScheduleService } from "../services";
import { ISchedule } from '../interfaces';

export default class ScheduleController {
  public static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, description }: ISchedule = req.body;
      const task = await ScheduleService.create( name, description );
      if (task === undefined) return res.status(409).json({ message: 'Schedule task already exists' });
      return res.status(201).json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };
}
