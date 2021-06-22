const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted yardım Menüsü',`
  <a:mor:855098937097584671>    **g!koruma** : koruma komutları.
  <a:mor:855098937097584671>  **g!abone-yardım** : :ZilGif: Ayarlamalı Abone Rol Sistemi .
  <a:mor:855098937097584671>   **g!eğlence** :  Eğlence Komutlarını gösterir.
  <a:mor:855098937097584671>   **g!eğlence2** : Eğlence2 Komutlarını gösterir.
  <a:mor:855098937097584671>   **g!uyarı-a yardım** : Uyarı komutları gösterir.
  <a:mor:855098937097584671>   **g!gif** : Gif Komutlarını gösterir.
  <a:mor:855098937097584671>   **g!ticket** : Ticket komutlarını gösterir.
  <a:mor:855098937097584671>   **g!kullanıcı2** :  Kullanıcı2 Komutlarını gösterir.
  <a:mor:855098937097584671>   **g!kullanıcı** :  Kullanıcı Komutlarını gösterir.
  <a:mor:855098937097584671>   **g!logo**:Logo komutlarını gösterir.\``)
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
  name: "yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};