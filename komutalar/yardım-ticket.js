
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted ticket Menüsü',`
  <a:mor:855098937097584671>   **g!ticket-kanal ayarla/sıfırla** : Ticket Mesajının Gideceği Kanalı Ayarlarsınız.
  <a:mor:855098937097584671>   **g!ticket-kapat** : :Ticket'ınızı Kapatırsınız .
  <a:mor:855098937097584671>   **g!ticket-sil** :  Ticket'ınızı Kapatırsınız.
  <a:mor:855098937097584671>   **g!ticket-aç**:Ticket açarsınız.\``)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)", )
  .setImage("https://cdn.discordapp.com/attachments/828602357637447681/829233717284438046/standard_9.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: "ticket",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};