// rolal.js

module.exports = {
    code: 'rolal',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('MANAGE_ROLES')) {
        return message.reply('Bu komutu kullanma yetkiniz bulunmuyor.');
      }
  
      const user = message.mentions.users.first();
      if (!user) {
        return message.reply('Lütfen bir kullanıcı etiketleyin.');
      }
  
      const roleName = args.slice(1).join(' ');
      const role = message.guild.roles.cache.find(role => role.name === roleName);
      if (!role) {
        return message.reply('Belirtilen isimde bir rol bulunamadı.');
      }
  
      try {
        const member = message.guild.members.cache.get(user.id);
        await member.roles.remove(role);
        message.reply(`${user.tag}'dan ${roleName} rolü başarıyla alındı.`);
      } catch (error) {
        console.error(error);
        message.reply('Rol alınırken bir hata oluştu.');
      }
    },
  };
  