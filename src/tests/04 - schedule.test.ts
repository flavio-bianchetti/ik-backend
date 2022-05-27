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

describe('A aplicação deve ter o endpoint DELETE /schedule/:id', () => {

  beforeEach(() => {
    exec('npm run db:reset');
  });

  afterEach(() => {
    (Schedule.destroy as sinon.SinonStub).restore();
  });

  it('a tarefa não existe', async () => {

    sinon.stub(Schedule, 'destroy').resolves(0);

    const chaiHttpResponse = await chai
      .request(app)
      .delete('/schedule/task/75');

      expect(chaiHttpResponse).to.have.status(409);
  });

  it('a tarefa é excluída com sucesso', async () => {

    sinon.stub(Schedule, 'destroy').resolves(1);

    const chaiHttpResponse = await chai
      .request(app)
      .delete('/schedule/task/2');
      

      expect(chaiHttpResponse).to.have.status(200);
  });
});
