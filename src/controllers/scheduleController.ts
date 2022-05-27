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

  public static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const Schedule = await ScheduleService.findAll();
      if (Schedule === undefined) return res.status(404).json({ message: 'Schedule task not found' });
      return res.status(200).json(Schedule);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static find = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const task = await ScheduleService.find(Number(id));
      if (task === null) return res.status(404).json({ message: 'Schedule task not found' });
      return res.status(200).json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };

  public static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { name, date, time, description }: ISchedule = req.body;
      const task = await ScheduleService.update(Number(id), name, date, time, description);
      if (task === undefined) return res.status(409).json({ message: 'Schedule task not found' });
      if (task === null) return res.status(422).json({ message: 'Update failure' });
      return res.status(200).json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  };
}
