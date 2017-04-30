const express = require('express');
const app = express();

const users = require('./routes/users');
const messages = require('./routes/messages');

const PORT = 8080;

app.use('/users', users);
app.use('/messages/', messages);

app.get('/', (request, response) => {

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
