
module.exports = {
    code: 'ban',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply('Bu komutu kullanmak için gerekli izinlere sahip değilsiniz.');
      }
  
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Lütfen bir kullanıcı etiketleyin.');
      }
  
      if (member.id === message.author.id) {
        return message.reply('Kendinizi yasaklayamazsınız.');
      }
  
      await member.ban({ reason: 'Volterizm Moderasyon' });
  
      message.reply(`${member.user.tag} başarıyla yasaklandı.`);
    },
  };
  