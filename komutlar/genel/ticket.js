const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  code: 'ticket',
  run: async (client, message, args, set) => {
    const channelName = `ticket-${message.author.username}-${message.author.discriminator}`;

    const channel = message.guild.channels.cache.find(ch => ch.name === channelName) ||
      await message.guild.channels.create(channelName, {
        type: 'text',
        parent: '1189944701659381800',//yetkilirolid
        permissionOverwrites: [
          { id: message.guild.id, deny: ['VIEW_CHANNEL'] },
          { id: message.author.id, allow: ['VIEW_CHANNEL'] },
        ],
      });

    message.reply(`Yeni bir ticket oluşturuldu: ${channel}`);

    channel.send(`Merhaba ${message.author}, hoş geldin!`);

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('close')
          .setLabel('Kapat')
          .setStyle('DANGER'),
      );

    const closeFilter = (interaction) => {
      return interaction.customId === 'close' && interaction.user.id === message.author.id;
    };

    const collector = channel.createMessageComponentCollector({ filter: closeFilter, time: 60000 });

    collector.on('collect', async (interaction) => {
      await channel.send('Ticket kapatılıyor...');
      await channel.delete();
    });

    collector.on('end', (collected, reason) => {
      if (reason === 'time') {
        channel.send('Ticket kapatma zaman aşımına uğradı.');
      }
    });

    channel.send({ content: 'Bu ticketi kapatmak için aşağıdaki butona basın.', components: [row] });
  },
};
