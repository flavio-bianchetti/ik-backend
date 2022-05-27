import { DataTypes, Model } from 'sequelize';
import database from '.';

class Schedule extends Model {
  public id!: number;

  public name!: string;

  public date!: string;

  public time!: string;

  public description!: string;
}

Schedule.init({
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: database,
  modelName: 'schedules',
  timestamps: false,
});

export default Schedule;
