import * as sinon from 'sinon';
import * as chai from 'chai';
import 'chai-http';

import App from '../app';
const app = new App().app;
import { Schedule } from '../models';

import { exec } from 'child_process';
import { ISchedule } from '../interfaces';

chai.use(require('chai-http'));

const { expect } = chai;

describe('A aplicação deve ter o endpoint GET /schedule', () => {

  beforeEach(() => {
    exec('npm run db:reset');
  });

  afterEach(() => {
    (Schedule.findAll as sinon.SinonStub).restore();
  });

  it('retorna um array vazio quando não há registros no banco de dados.', async () => {

    sinon.stub(Schedule, 'findAll').resolves([]);

    const chaiHttpResponse = await chai
      .request(app)
      .get('/schedule');

      expect(chaiHttpResponse).not.to.be.null;
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.length(0);
  });

  it('retorna um array de tarefas quando há registros no banco de dados.', async () => {

    sinon.stub(Schedule, 'findAll').resolves([{
      "id": 1,
      "name": "Quinta tarefa",
      "date": "2022-05-27T12:20:05.315Z",
      "time": "12:20",
      "description": "Minha quinta tarefa"
    },
    {
      "id": 2,
      "name": "Segunda tarefa",
      "date": "2022-05-27T12:20:05.315Z",
      "time": "12:20",
      "description": "Minha segunda tarefa"
    }] as any | ISchedule);

    const chaiHttpResponse = await chai
      .request(app)
      .get('/schedule');
      
      expect(chaiHttpResponse).not.to.be.null;
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.length(2);
  });
});
