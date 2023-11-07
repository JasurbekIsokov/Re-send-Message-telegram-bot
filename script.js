const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const fs = require('fs');

const token = '6487757037:AAFiPXFXVB8NhAWWT0EXzeHKKuVJgPpZBL0'; // Telegram botning tokeni
const channelId = '@YOUR_CHANNEL_NAME'; // Kanalni nomi yoki idsi
const groupId = '-738563273'; // Guruh ID'si
const bot = new TelegramBot(token);

// Har soatda boshlash uchun =>| 0 * * * * |
cron.schedule('*/5 * * * * *', () => {
 
  // const message = 'Bu habar har soatda yuborilmoqda!';
  const image = `./rasm.png`; // Rasm fayli manzili
  const caption = '';

  
  // bot.sendPhoto(channelId, fs.readFileSync(image), { caption: caption });
  bot.sendPhoto(groupId, fs.readFileSync(image), { caption: caption });
  // bot.sendMessage(channelId, message);

});
