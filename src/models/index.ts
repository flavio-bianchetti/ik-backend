import { Sequelize } from 'sequelize';
import * as Config from '../config/database';

export default new Sequelize(Config);

export { default as Schedule } from './schedule';
