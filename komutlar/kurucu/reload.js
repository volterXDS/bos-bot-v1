module.exports = {
    code: 'reload',
    run: async (client, message, args, set) => {
      if (message.author.id !== '933833033579114506') {
        return message.reply('Bu komutu sadece belirli bir kullanıcı kullanabilir.');
      }
      message.reply('Bot yeniden başlatılıyor...');
      process.exit();
    },
  };
  