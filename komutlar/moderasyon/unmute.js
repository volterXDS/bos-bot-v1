// unmute.js

module.exports = {
    code: 'unmute',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('MANAGE_ROLES')) {
        return message.reply('Bu komutu kullanma yetkiniz bulunmuyor.');
      }
  
      const user = message.mentions.users.first();
      if (!user) {
        return message.reply('Lütfen bir kullanıcı etiketleyin.');
      }
  
      const muteRole = message.guild.roles.cache.get(muteRoleID);
      if (!muteRole) {
        return message.reply('Muted rolü bulunamadı. Lütfen bir Muted rolü oluşturun.');
      }
  
      try {
        const member = message.guild.members.cache.get(user.id);
        await member.roles.remove(muteRole);
        message.reply(`${user.tag} başarıyla susturulması kaldırıldı.`);
      } catch (error) {
        console.error(error);
        message.reply('Kullanıcının susturulması kaldırılırken bir hata oluştu.');
      }
    },
  };
  