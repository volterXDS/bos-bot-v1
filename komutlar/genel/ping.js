module.exports = {
  code: 'dbping',
  run: async (client, message, args, set) => {
    message.channel.send(`Veritabanı Ping: ${client.ws.ping}ms`);
  },
};