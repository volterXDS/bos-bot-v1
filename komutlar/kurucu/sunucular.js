
const ownerID = "933833033579114506";

module.exports = {
  ownerID,
  code: 'servers',
  run: async (client, message, args, set) => {
    if (message.author.id !== ownerID) return message.reply('Bu komutu sadece botun sahipleri kullanabilir.');

    try {
      const guilds = client.guilds.cache.map(guild => `${guild.name} (ID: ${guild.id}) - Üye Sayısı: ${guild.memberCount}`);
      message.channel.send(`Sunucular:\n${guilds.join('\n')}`);
    } catch (error) {
      console.error(error);
    }
  },
};
