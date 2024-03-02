// database.js
const Database = require('quick.db');
const db = new Database({ path: './database.json' });

function getMessageCount(userId) {
  return db.get(`messageCount_${userId}`) || 0;
}

function setMessageCount(userId, messageCount) {
  db.set(`messageCount_${userId}`, messageCount);
}

module.exports = { getMessageCount, setMessageCount };
