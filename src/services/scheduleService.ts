import { Schedule } from '../models';
import { ISchedule } from '../interfaces';

export default class ScheduleService {

  public static create
  = async (name: string, description: string)
  : Promise<ISchedule | undefined> => {
    const date = new Date().toISOString();
    const time = ((new Date().toISOString()).match(/\d\d:\d\d/) || '00:00').toString();
    const task = await Schedule.create({ name, date, time, description });
    if (!task.id) return undefined;
    return {
      id: task.id,
      name,
      date,
      time,
      description,
    } as ISchedule;
  };

  public static findAll = async (): Promise<ISchedule[]> => {
    const schedule = await Schedule.findAll();
    return schedule as ISchedule[];
  };

  public static find = async (id: number): Promise<ISchedule> => {
    const task = await Schedule.findByPk(id);
    return task as ISchedule;
  };

  public static update
  = async (id: number, name: string, description: string, date: string, time: string)
  : Promise<ISchedule | undefined | null> => {
    const task = await Schedule.findByPk(id);
    if (!task) return undefined;
    const result = await Schedule.update({ name, date, time, description }, { where: { id }});
    const [affectedCount] = result;
    if (affectedCount === 0) return null;
    return {
    id,
    name,
    description,
    date,
    time,
    } as ISchedule;
  };

  public static exclude = async (id: number): Promise<number> => {
    const result = await Schedule.destroy({ where: { id }});
    return result;
  };
}
