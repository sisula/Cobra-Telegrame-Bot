const Config = require('./config');
const fs = require('fs');


if (Config.LANG == 'EN') {
    console.log('Loading English language...');
    
    var json = JSON.parse(fs.readFileSync('./language/EN.json'));
} 
else {
    console.log('Loading Sinhala language...');

    var json = JSON.parse(fs.readFileSync('./language/SI.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
