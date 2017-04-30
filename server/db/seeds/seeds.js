const generate = require('random-name');

exports.seed = function(knex, Promise) {
  return knex('users').del().then(() => {
    return knex('users').insert([
      { id: 1, first: generate.first(), last: generate.last() },
      { id: 2, first: generate.first(), last: generate.last() },
      { id: 3, first: generate.first(), last: generate.last() }
    ]);
  }).then(() => {
    return knex('messages').del()
  }).then(() => {
    return knex('messages').insert([
      { id: 1, user_id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim cursus enim sit amet aliquet. Donec gravida nec tellus posuere.' },
      { id: 2, user_id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit posuere.' },
      { id: 3, user_id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lectus nibh nullam.' }
    ]);
  });
};
