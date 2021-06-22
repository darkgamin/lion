const synex = require('discord.js')
exports.run = function(client, message, args) {

const embed = new synex.MessageEmbed()
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'toplam-komut'
  };
