

module.exports = {
    code: 'kilitle',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        return message.reply('Bu komutu kullanma yetkiniz bulunmuyor.');
      }
  
      const channel = message.mentions.channels.first() || message.channel;
  
      try {
        await channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false });
        message.reply(`${channel} kanalı başarıyla kilitlendi.`);
      } catch (error) {
        console.error(error);
        message.reply('Kanal kilitlenirken bir hata oluştu.');
      }
    },
  };
  