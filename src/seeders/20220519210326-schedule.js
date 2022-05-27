'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('schedules', [{
      name: 'Primeira tarefa',
      date: new Date().toISOString(),
      // https://stackoverflow.com/questions/47607666/how-to-extract-only-time-from-iso-date-format-in-javascript
      time: ((new Date().toISOString()).match(/\d\d:\d\d/) || '00:00').toString(),
      description: 'Minha primeira tarefa',
    }, {
      name: 'Segunda tarefa',
      date: new Date().toISOString(),
      time: ((new Date().toISOString()).match(/\d\d:\d\d/) || '00:00').toString(),
      description: 'Minha primeira tarefa',
    }, {
      name: 'Terceira tarefa',
      date: new Date().toISOString(),
      time: ((new Date().toISOString()).match(/\d\d:\d\d/) || '00:00').toString(),
      description: 'Minha terceira tarefa',
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('schedules', null, {});
  },
};
