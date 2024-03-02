// moderasyon/mute.js
module.exports = {
    code: 'mute',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('MUTE_MEMBERS')) {
        return message.reply('Bu komutu kullanmak için gerekli izinlere sahip değilsiniz.');
      }
  
      const member = message.mentions.members.first();
      if (!member) {
        return message.reply('Lütfen bir kullanıcı etiketleyin.');
      }
  
      const muteRoleID = '31'; 
  
      if (!muteRoleID) {
        return message.reply('Mute rolü tanımlanmamış. Lütfen muteRoleID değerini ayarlayın.');
      }
  
      const muteRole = message.guild.roles.cache.get(muteRoleID);
  
      if (!muteRole) {
        return message.reply('Belirtilen mute rolü geçerli değil. Lütfen muteRoleID değerini doğru bir rol ID si ile güncelleyin.');
      }
      await member.roles.add(muteRole);
  
      message.reply(`${member.user.tag} başarıyla susturuldu.`);
      const muteDuration = 60 * 60 * 1000; 
      
      setTimeout(async () => {
        await member.roles.remove(muteRole);
        message.channel.send(`${member.user.tag} susturması kaldırıldı.`);
      }, muteDuration);
    },
  };
  