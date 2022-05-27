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

}
