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

describe('A aplicação deve ter o endpoint PUT /schedule/task/:id', () => {

  beforeEach(() => {
    exec('npm run db:reset');
  });

  afterEach(() => {
    (Schedule.update as sinon.SinonStub).restore();
  });

  it('retorna "undefined" quando há erro(s) nas informações passadas', async () => {

    sinon.stub(Schedule, 'update').resolves(undefined);

    const chaiHttpResponse = await chai
      .request(app)
      .put('/schedule/task/75')
      .send({
        "name": "Quinta tarefa",
        "date": "2022-05-27T12:20:05.315Z",
        "time": "12:20",
        "description": "Minha quinta tarefa"
      } as any | ISchedule);

      expect(chaiHttpResponse).to.have.status(409);
  });

  // lógica está certa, porém não está testando o retorno da tarefa
  // it('altera com sucesso as informações.', async () => {

  //   sinon.stub(Schedule, 'update').resolves({
  //     "id": 1,
  //     "name": "Sexta tarefa",
  //     "date": "2022-05-27T12:20:05.315Z",
  //     "time": "12:20",
  //     "description": "Minha sexta tarefa"
  //   } as any | ISchedule);

  //   const chaiHttpResponse = await chai
  //     .request(app)
  //     .put('/schedule/task/1')
  //     .send({
  //       "name": "Sexta tarefa",
  //       "date": "2022-05-27T12:20:05.315Z",
  //       "time": "12:20",
  //       "description": "Minha sexta tarefa"
  //     });

  //     expect(chaiHttpResponse).not.to.be.null;
  //     expect(chaiHttpResponse).to.have.status(200);
  //     expect(chaiHttpResponse.body).to.have.property('id');
  //     expect(chaiHttpResponse.body).to.have.property('name');
  //     expect(chaiHttpResponse.body).to.have.property('date');
  //     expect(chaiHttpResponse.body).to.have.property('time');
  //     expect(chaiHttpResponse.body).to.have.property('description');
  // });
});
