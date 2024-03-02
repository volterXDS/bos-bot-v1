// emojikanal.js

module.exports = {
    code: 'emojikanal',
    run: async (client, message, args, set) => {
      const onerikanal = args.join('-').toLowerCase();
  
      if (!onerikanal) {
        return message.reply('Lütfen bir emojikanal adı belirtin.');
      }
  
      const emojiChannel = message.guild.channels.cache.find(ch => ch.name === onerikanal && ch.type === 'text');
  
      if (!emojiChannel) {
        return message.reply('Belirtilen isimde bir metin kanalı bulunamadı.');
      }
  
      message.reply(`#${onerikanal} kanalına eklenen her mesaja 👍 ve 👎 tepkisi eklenecek.`);
  
      client.on('messageCreate', async (msg) => {
        if (msg.channel === emojiChannel) {
          await msg.react('👍');
          await msg.react('👎');
        }
      });
    },
  };
  