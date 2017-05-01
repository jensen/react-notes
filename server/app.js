const express = require('express');
const body = require('body-parser');
const cookies = require('cookie-parser');

const users = require('./routes/users');
const messages = require('./routes/messages');

const User = require('./models/user');

const app = express();

const PORT = 8080;

app.use(body.json());
app.use(cookies());

app.use((request, response, next) => {
  if(!request.cookies.user) {
    User.create().then(user => {
      response.cookie('user', user.id);
      next();
    });
    return;
  }

  next();
});

app.use('/users', users);
app.use('/messages/', messages);

app.get('/', (request, response) => {

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
