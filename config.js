/* Copyright (C) 2020 cobra telebot
coded by sisula welgamage
cobra telegrame bot 2021
*/
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    VERSION: '1.0 Pro',
    CHANNEL: 'https://t.me/',
    BOT_TOKEN: process.env.BOT_TOKEN === undefined ? '' : process.env.BOT_TOKEN,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'false' : process.env.BOT_NAME,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'false' : process.env.ALIVE_LOGO,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    OWNER: "Sisula Welgamage",
    SUPPORT: "94766239744"
};
