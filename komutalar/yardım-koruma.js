const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted koruma Menüsü',`
   <a:emoji_58:814183062035365900> **g!çağır** :   Sahibime mesaj atrsın.
   <a:emoji_58:814183062035365900> **g!ban** : : Ban atar.
   <a:emoji_58:814183062035365900> **g!kick** : Biri sunucudan atarısnız  .
   <a:emoji_58:814183062035365900> **g!ban-say** : Sunucuda kaç kişinin banlandığını sayar  .
   <a:emoji_58:814183062035365900> **g!forceban** : Ip ban atarsınız  .
   <a:emoji_58:814183062035365900> **g!unban** : Ban kaldırır  .
   <a:emoji_58:814183062035365900> **g!bot-güvenlik** :  sunucuya bot giremez.
   <a:emoji_58:814183062035365900> **g!reklam-engel** :  Suncuda reklam engeller.      
   <a:emoji_58:814183062035365900> **g!yapımcım** : yapımcıma bakarsınız.
   <a:emoji_58:814183062035365900> **g!oyver**-bota : oyverirsiniz).\``)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)", )
  .setImage("https://cdn.discordapp.com/attachments/828602357637447681/829233717284438046/standard_9.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma'],
  permLevel: 0
};

exports.help = {
  name: "koruma",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};