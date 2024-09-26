const assert = require('assert');
const app = require('../../src/app');

describe('\'trainingProgramOwnershio\' service', () => {
  it('registered the service', () => {
    const service = app.service('trainingProgramOwnershio');

    assert.ok(service, 'Registered the service (trainingProgramOwnershio)');
  });
});
