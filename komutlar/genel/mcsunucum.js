
const axios = require('axios');

module.exports = {
  code: 'mcsunucum',
  run: async (client, message, args, set) => {
    try {
      const serverIP = 'play.crafthera.com';
      const serverPort = 25565;

      const response = await axios.get(`https://api.mcsrvstat.us/2/${serverIP}:${serverPort}`);

      if (response.status === 200) {
        const serverData = response.data;

        if (serverData.online) {
          const playersOnline = serverData.players.online;
          const maxPlayers = serverData.players.max;
          const motd = serverData.motd.clean.join('\n');

          message.channel.send(`Minecraft Sunucu Bilgileri:\n${motd}\nOyuncu: ${playersOnline}/${maxPlayers}`);
        } else {
          message.channel.send('Minecraft sunucusu çevrimiçi değil.');
        }
      } else {
        message.channel.send('Minecraft sunucu bilgileri alınamıyor.');
      }
    } catch (error) {
      console.error('Minecraft sunucu bilgileri alınırken bir hata oluştu:', error);
      message.channel.send('Minecraft sunucu bilgileri alınamıyor.');
    }
  },
};
