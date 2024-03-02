module.exports = {
    code: 'logtemizle',
    run: async (client, message, args, set) => {
      if (message.author.id !== set.ownerID) {
        return message.reply('Bu komutu sadece botun sahipleri kullanabilir.');
      }
        message.channel.send('aynen kankam kod yerinide doldur bakıyım');
      }
    }