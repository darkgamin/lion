const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted logo Menüsü',`
  <a:gif_sunucu:788679586456141824> **g!ejderha-yazı**   : Ejderga logo yapar.
  <a:gif_sunucu:788679586456141824>**g!discord-logo**     :   Discord logo yapar.
  <a:gif_sunucu:788679586456141824> **g!banner**  :  Yazdığınız yazıyı bannera çevirir.  
  <a:gif_sunucu:788679586456141824> **g!flash** :  Flash Logo Üretir.
  <a:gif_sunucu:788679586456141824> **g!gamer**    :  Gamer Logo Üretir.      
  <a:gif_sunucu:788679586456141824> **g!graffiti**     : Graffiti Logo Üretir.
  <a:gif_sunucu:788679586456141824> **g!orumcek**   : Orumcek Logo Üretir .
  <a:gif_sunucu:788679586456141824> **g!köpek**   :Köpek Logo Üretir .
  <a:gif_sunucu:788679586456141824> **g!roket** : Roket Logo Üretir.
  <a:gif_sunucu:788679586456141824> **g!oyver**-bota : oyverirsiniz).\``)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)", )
  .setImage("https://cdn.discordapp.com/attachments/828602357637447681/829233717284438046/standard_9.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['logo'],
  permLevel: 0
};

exports.help = {
  name: "logo",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};