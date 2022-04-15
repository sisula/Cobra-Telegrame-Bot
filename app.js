/*======================================= COBRA TELEGRAM USER BOT =======================================
Coded By Sisula Welgamage
2021
*/
const path = require("path");
const telegramBot = require("node-telegram-bot-api");
const textmaker = require('cobra-telebot');
const fs = require("fs");
const Config = require('./config');
const Heroku = require('heroku-client');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const token = Config.BOT_TOKEN;
//
//
const bot = new TelegramBot(token, {polling: true});

bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});

console.log('telegram වෙත සම්බන්ද වෙමින්!...මඳක් රැඳී සිටින්න.')
console.log('⬇️  Plugin ස්ථාපනය කිරීම ...')
console.log('✅ සාර්ථකව telegram වෙත සම්බන්ද විය!')

