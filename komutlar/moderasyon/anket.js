// anket.js

module.exports = {
    code: 'anket',
    run: async (client, message, args, set) => {
      const question = args.join(' ');
  
      if (!question) {
        return message.reply('Lütfen bir soru belirtin.');
      }
  
      message.channel.send(`Anket: ${question}`).then((msg) => {
        msg.react('👍');
        msg.react('👎');
      });
    },
  };
  