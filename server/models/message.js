const moment = require('moment');

const db = require('../db');

const User = require('./user.js');

function collate() {
  return db('messages')
        .join('users', 'messages.user_id', 'users.id')
        .select('messages.id',
                'messages.content',
                'messages.date',
                'messages.user_id',
                'users.first',
                'users.last');
}

function convert(message) {
  return new Message(message.id, new User(message.user_id, message.first, message.last), message.content, message.date);
}

class Message {
  static all() {
    return new Promise((resolve, reject) => {
      collate().then(messages => {
          resolve(messages.map(convert));
        });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      collate()
        .first()
        .where('messages.id', id)
        .then(message => {
          resolve(convert(message));
        });
    });
  }

  constructor(id, user, content, date) {
    this.id = id;
    this.user = user;
    this.content = content;
    this.date = moment(date).from();
  }
}

module.exports = Message;
