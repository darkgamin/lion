const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Lionhearted | Oyver")
.setDescription(`
**Bota OY VER ve bizi öne çıkart!**

[≫ Oy Vermek İçin Tıkla ≪](https://discordbotlist.com/bots/lionhearted)
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["support"],
  };
  
  exports.help = {
    name: 'oyver'
  };

