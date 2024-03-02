const ownerID = "933833033579114506";

module.exports = {
    code: 'shutdown',
    run: async (client, message, args, set) => {
      if (message.author.id !== ownerID) {
        return message.reply('Bu komutu sadece botun sahipleri kullanabilir.');
      }
  
      try {
        message.reply('Bot kapatılıyor...');
        process.exit();
      } catch (error) {
        console.error(error);
        message.reply('Bot kapatılırken bir hata oluştu.');
      }
    },
  };
  