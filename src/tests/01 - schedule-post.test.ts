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

describe('A aplicação deve ter o endpoint POST /schedule', () => {

  beforeEach(() => {
    exec('npm run db:reset');
  });

  afterEach(() => {
    (Schedule.create as sinon.SinonStub).restore();
  });

  it('o body está vazio e retorna um erro', async () => {

    sinon.stub(Schedule, 'create').resolves(undefined);

    const chaiHttpResponse = await chai
      .request(app)
      .post('/schedule')
      .send({});

      expect(chaiHttpResponse).not.to.be.null;
      expect(chaiHttpResponse).to.have.status(402);
  });

  it('o body contém as informações corretas e a tarefa é cadastrada com sucesso.', async () => {

    sinon.stub(Schedule, 'create').resolves({
      "id": 1,
      "name": "Quinta tarefa",
      "date": "2022-05-27T12:20:05.315Z",
      "time": "12:20",
      "description": "Minha quinta tarefa"
    } as any | ISchedule);

    const chaiHttpResponse = await chai
      .request(app)
      .post('/schedule')
      .send({
        "name": "Quinta tarefa",
        "date": "2022-05-27T12:20:05.315Z",
        "time": "12:20",
        "description": "Minha quinta tarefa"
      });

      expect(chaiHttpResponse).not.to.be.null;
      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.have.property('id');
      expect(chaiHttpResponse.body).to.have.property('name');
      expect(chaiHttpResponse.body).to.have.property('date');
      expect(chaiHttpResponse.body).to.have.property('time');
      expect(chaiHttpResponse.body).to.have.property('description');
  });
});
