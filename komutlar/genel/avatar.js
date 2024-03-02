
module.exports = {
    code: 'avatar',
    run: async (client, message, args, set) => {
      const user = message.mentions.users.first() || message.author;
      message.channel.send(`${user.tag}'ın avatarı: ${user.displayAvatarURL({ dynamic: true })}`);
    },
  };
  