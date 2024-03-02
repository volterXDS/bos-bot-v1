
const ownerID = "933833033579114506";
module.exports = {
    code: 'dm',
    run: async (client, message, args, set) => {
      if (message.author.id !== ownerID) {
        return message.reply('Bu komutu sadece botun sahipleri kullanabilir.');
      }
  
      const targetUser = message.mentions.users.first() || client.users.cache.get(args[0]);
      if (!targetUser) return message.reply('Bir kullanıcı belirtmelisin.');
  
      const dmContent = args.slice(1).join(' ');
      if (!dmContent) return message.reply('Bir mesaj belirtmelisin.');
  
      try {
        await targetUser.send(dmContent);
        message.reply('Özel mesaj başarıyla gönderildi.');
      } catch (error) {
        console.error(error);
        message.reply('Özel mesaj gönderirken bir hata oluştu.');
      }
    },
  };
  