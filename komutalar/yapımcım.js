const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle(" Lionhearted | Yapımcım")
.setDescription(`
**Botu Kodlayan** |**🔥<@!839226099413942322>🔥**

**Botun Sahibi** | **🔥<@!839226099413942322>🔥**

`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };

