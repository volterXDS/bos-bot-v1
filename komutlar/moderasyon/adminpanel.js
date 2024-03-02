// adminpanel.js
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
  code: 'adminpanel',
  run: async (client, message, args, set) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('adminpanel')
          .setPlaceholder('Bir seçenek seçin...')
          .addOptions([
              {
                label: 'Uptime',
                value: 'uptime',
              },
            {
              label: 'Toplam Komut Sayısı',
              value: 'commandcount',
            },
            {
              label: 'Toplam Sunucu Sayısı',
              value: 'guildcount',
            },
            {
              label: 'Toplam Üye Sayısı',
              value: 'membercount',
            },
            {
                label: 'Volterizm :D',
                value: 'voltermisinbe',
              },

          ]),
      );

    message.reply({ content: 'İşte admin paneli:', components: [row] });

    const filter = (interaction) => {
      return interaction.customId === 'adminpanel';
    };

    const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });

    collector.on('collect', async (interaction) => {
      const selectedValue = interaction.values[0];

      if (selectedValue === 'uptime') {
        const uptime = getUptime(client.uptime);
        interaction.reply(`Bot Uptime: ${uptime}`);
      } else if (selectedValue === 'commandcount') {
        const commandCount = client.commands.size;
        interaction.reply(`Toplam Komut Sayısı: ${commandCount}`);
      } else if (selectedValue === 'guildcount') {
        const guildCount = client.guilds.cache.size;
        interaction.reply(`Toplam Sunucu Sayısı: ${guildCount}`);
      } else if (selectedValue === 'membercount') {
        const memberCount = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
        interaction.reply(`Toplam Üye Sayısı: ${memberCount}`);
      }else if (selectedValue === 'voltermisinbe') {
        const voltermisinbe = "Volter kirve";
        interaction.reply(`Volterizme özel alan`);
      }
//{
// buraya özel kodunu yazcan
//}

    });

    collector.on('end', (collected, reason) => {
      if (reason === 'time') {
        message.channel.send('Admin panel zaman aşımına uğradı.');
      }
    });
  },
};

function getUptime(uptime) {
  const seconds = Math.floor(uptime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return `${days} gün, ${hours % 24} saat, ${minutes % 60} dakika, ${seconds % 60} saniye`;
}
