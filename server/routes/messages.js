const router = require('express').Router();

const Message = require('../models/message');

router.get('/', (request, response) => {
  Message.all().then(messages => {
    response.json(messages);
  });
});

router.get('/:id', (request, response) => {
  Message.find(request.params.id).then(message => {
    response.json(message);
  });
});

module.exports = router;