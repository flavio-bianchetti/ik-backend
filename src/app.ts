import * as express from 'express';
import routes from './api/routes';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    this.app.use(express.json());
    this.app.use('/', routes);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  }
}
