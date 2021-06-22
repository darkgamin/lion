const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted gif Menüsü',`
  <a:gif_sunucu:788679586456141824> **g!token**   :Botun tokenine bakarsınız.
  <a:gif_sunucu:788679586456141824>**g!baby**     :  baby gif atar.
  <a:gif_sunucu:788679586456141824> **g!animal**  : animal gif atar.  
  <a:gif_sunucu:788679586456141824> **g!atatürk** :  atatürk gif atar
  <a:gif_sunucu:788679586456141824> **g!ağla**    : Botu Ağlatırsınız.      
  <a:gif_sunucu:788679586456141824> **g!man**     : man gif atar,
  <a:gif_sunucu:788679586456141824> **g!woman**   : woman gif atar .
  <a:gif_sunucu:788679586456141824> **g!fbi:Fbi** : gif atar.
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
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: "gif",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};