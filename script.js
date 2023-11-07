const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const fs = require('fs');

const token = '6487757037:AAFiPXFXVB8NhAWWT0EXzeHKKuVJgPpZBL0'; // Telegram botning tokeni
const groupId1 = '-738563273'; // Birinchi guruh ID'si
// const groupId2 = 'Rassom4444'; // Ikkinchi guruh ID'si
// const groupId3 = 'mulkushyoshlari11111'; // Uchinchi guruh ID'si
const bot = new TelegramBot(token);

// 3 ta guruh uchun har 3 soatda boshlash uchun
cron.schedule('0 */3 * * *', () => {
  const image = `./rasm.png`; // Rasm fayli manzili
  const caption = '';

  bot.sendPhoto(groupId1, fs.readFileSync(image), { caption: caption });
  // bot.sendPhoto(groupId2, fs.readFileSync(image), { caption: caption });
  // bot.sendPhoto(groupId3, fs.readFileSync(image), { caption: caption });
});
