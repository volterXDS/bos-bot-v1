

module.exports = {
    code: 'kanalsil',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        return message.reply('Bu komutu kullanma yetkiniz bulunmuyor.');
      }
  
      const channel = message.mentions.channels.first();
      if (!channel) {
        return message.reply('Lütfen bir kanal etiketleyin.');
      }
  
      try {
        await channel.delete();
        message.reply(`${channel} adlı kanal başarıyla silindi.`);
      } catch (error) {
        console.error(error);
        message.reply('Kanal silinirken bir hata oluştu.');
      }
    },
  };
  