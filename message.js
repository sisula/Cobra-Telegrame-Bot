/*Cobra Telegram Bot
Coded by Sisula Welgamage
2021 cobra project*/
module.exports = {
  songdownloadoptions: {
      reply_markup: JSON.stringify({
           inline_keyboard: [
                 [{ text: 'document', callback_data: 'document_song'}], 
                 [{ text: 'audio', callback_data: 'audio_song'}]
                            ]
          }) 
     }
}
