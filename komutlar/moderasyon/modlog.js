// moderasyon/modlog.js
const { MessageActionRow, MessageSelectMenu, TextChannel } = require('discord.js');
const set = require('../../ayarlar.json');

module.exports = {
  code: 'modlog',
  run: async (client, message, args, set) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) {
      return message.reply('Bu komutu kullanmak için gerekli izinlere sahip değilsiniz.');
    }

    const modLogChannelID = ayarlar.modLogChannelID; 

    if (!modLogChannelID) {
      return message.reply('Moderasyon log kanalı tanımlanmamış. Lütfen modLogChannelID değerini ayarlar.json dosyasında belirtin.');
    }

    const modLogChannel = client.channels.cache.get(modLogChannelID);

    if (!modLogChannel || !(modLogChannel instanceof TextChannel)) {
      return message.reply('Belirtilen mod log kanalı geçerli değil. Lütfen modLogChannelID değerini doğru bir kanal ID si ile güncelleyin.');
    }
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    modLogChannel.send(`[${formattedDate}] ${message.author.tag} tarafından bir moderasyon komutu kullanıldı.`);
  },
};
