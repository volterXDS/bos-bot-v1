const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const set = require('./ayarlar.json');
const { readdirSync } = require('fs');
const Database = require('quick.db');
const { join } = require('path');

client.login(set.token).catch(err => console.error('Tokene bağlanılamıyor. Tokeni kontrol edin!'));

client.commands = new Collection();

const commandFolders = readdirSync(join(__dirname, 'komutlar'));

for (const folder of commandFolders) {
  const commandFiles = readdirSync(join(__dirname, 'komutlar', folder)).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(join(__dirname, 'komutlar', folder, file));
    client.commands.set(command.code, command);
    console.log(`[ ${command.code} ] adlı komut başarıyla yüklendi.`);
  }
}

client.once('ready', () => console.log('Bot başarıyla giriş yaptı!'));

client.on('messageCreate', async message => {
  if (message.author.bot || !message.content.startsWith(set.prefix)) return;

  const args = message.content.slice(set.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command) || client.commands.find(x => x.aliases && x.aliases.includes(command));

  if (!cmd) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulunamadı.`);

  try {
    cmd.run(client, message, args, set);
  } catch (error) {
    console.error(error);
  }
});


// KÜÇÜK BİR HG MESAJI 

client.on('guildMemberAdd', member => {
  const hgkanalid = '';

  const hgmesaj = `Sunucumuza hoş geldin, ${member.user.username}! Burada harika vakit geçireceğine eminim.`;

  const hgkanal = member.guild.channels.cache.get(hgkanalid);

  if (welcomeChannel) {
    welcomeChannel.send(hgmesaj).catch(error => console.error(error));
  }
});
