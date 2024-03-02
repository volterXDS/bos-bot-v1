
const { MessageEmbed } = require('discord.js');

module.exports = {
  code: 'roller',
  run: async (client, message, args, set) => {
    const embed = new MessageEmbed()
      .setColor('#3498db')
      .setTitle('Sunucu Rolleri')
      .setDescription(message.guild.roles.cache.map(role => role.toString()).join(' '))
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
