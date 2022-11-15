import chai from 'chai';
import chaiHttp from 'chai-http';
chai.should();
chai.use(chaiHttp);

describe('Server Loads', () => {
  require('./server.ts');
  const app = require('./server.ts').app;
  before(function () {
    return new Promise<void>(resolve => {
      app.on('app_started', function () {
        return resolve();
      });
      //app.emit('ready');
    });
  });
  after(function () {
    return new Promise<void>(resolve => {
      app.emit('stop');
      return resolve();
    });
  });
  it('responds with HTTP 200', () => {
    return chai
      .request('http://localhost:3001')
      .get('/')
      .then(res => {
        res.should.have.status(200);
      })
      .catch(err => {
        throw err;
      });
  });
});
