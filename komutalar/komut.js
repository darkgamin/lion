const { MessageButton } = require('discord-buttons');
const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setDescription('Bir açıklama')
  .setTitle('Bir embed başlığı');
let enginar = new MessageButton()
  .setStyle('url')
  .setLabel('Bana tıkla')
  .setURL("https://npmjs.com")
message.channel.send({ button: enginar, embed: embed });
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "s"
    }