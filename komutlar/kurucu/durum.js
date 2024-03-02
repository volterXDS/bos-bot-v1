const ownerID = "933833033579114506";

module.exports = {
    code: 'durum',
    run: async (client, message, args, set) => {
      if (message.author.id !== ownerID) return message.reply('Bu komutu sadece botun sahipleri kullanabilir.');
  
      const yenidurum = args.join(' ');
      if (!yenidurum) return message.reply('Yeni bir durum belirtmelisiniz.');
  
      try {
        await client.user.setActivity(yenidurum);
        message.reply(`Bot durumu güncellendi: ${yenidurum}`);
      } catch (error) {
        console.error(error);
      }
    },
  };