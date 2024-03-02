module.exports = {
    code: 'sil',
    run: async (client, message, args, set) => {
      const amount = parseInt(args[0]) + 1;
  
      if (isNaN(amount)) {
        return message.reply('Lütfen geçerli bir sayı belirtin.');
      } else if (amount <= 1 || amount > 100) {
        return message.reply('Silinmesi gereken mesaj sayısı 1 ile 99 arasında olmalıdır.');
      }
  
      await message.channel.bulkDelete(amount, true).catch(error => {
        console.error(error);
        message.channel.send('Mesajları silerken bir hata oluştu.');
      });
    },
  };