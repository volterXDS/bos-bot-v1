// komutlistele.js
const { readdirSync } = require('fs');
const { join } = require('path');

module.exports = {
  code: 'komutlistele',
  run: async (client, message, args, set) => {
    if (message.author.id !== set.ownerID) return message.reply('Bu komutu sadece botun sahipleri kullanabilir.');

    const commandList = {};

    const commandFolders = readdirSync('./komutlar');
    for (const folder of commandFolders) {
      const folderPath = join('./komutlar', folder);
      const commandFiles = readdirSync(folderPath).filter(file => file.endsWith('.js'));

      commandList[folder] = commandFiles.map(file => file.replace('.js', '')).join(', ');
    }

    let response = 'Botun komutları:\n';
    for (const folder in commandList) {
      response += `**${folder} Klasörü:** ${commandList[folder]}\n`;
    }

    message.channel.send(response);
  },
};
