

module.exports = {
    code: 'emojiliste',
    run: async (client, message, args, set) => {
      const emojis = message.guild.emojis.cache.map(emoji => emoji.toString()).join(' ');
  
      message.reply(`Sunucudaki Emojiler: ${emojis}`);
    },
  };
  