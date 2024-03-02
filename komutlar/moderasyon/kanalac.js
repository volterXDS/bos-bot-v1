

module.exports = {
    code: 'kanalac',
    run: async (client, message, args, set) => {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) {
        return message.reply('Bu komutu kullanma yetkiniz bulunmuyor.');
      }
  
      const channelName = args.join('-').toLowerCase();
      const channel = await message.guild.channels.create(channelName, { type: 'text' });
  
      message.reply(`${channel} adlı kanal başarıyla oluşturuldu.`);
    },
  };
  