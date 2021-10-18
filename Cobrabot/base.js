const telegramBot = require("node-telegram-bot-api");
const Config = require('../config');
const token = Config.BOT_TOKEN;

async function cobrabotmain() {
  var data = {
    connect: ''

  } 
  data.connect = new telegramBot(token, {polling:true});

  return data;
}
module.exports = cobrabotmain
