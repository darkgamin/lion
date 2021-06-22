const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted kullanıcı Menüsü',`
   <a:gif_sunucu:788679586456141824>**g!ping** : Pingini gösterir.
   <a:gif_sunucu:788679586456141824>**g!çağır** :Sahibime mesaj atrsın .
   <a:gif_sunucu:788679586456141824>**g!istatistik** : Botun İstatistiklerini Gösterir.
   <a:gif_sunucu:788679586456141824> **g!sesli-aktivite** :Seste youtube ve oyunlar oynarsınız.
   <a:gif_sunucu:788679586456141824> **g!hata** :   Botun hatasını bildirirsiniz.
   <a:gif_sunucu:788679586456141824> **g!kurallar** :  Hazır kurallar.
   <a:gif_sunucu:788679586456141824>*g!kısalt** :  Linkinizi kısaltır .
   <a:gif_sunucu:788679586456141824>**g!kullanıcıbilgim** :kullanıcı bilgine bakarsın.
   <a:gif_sunucu:788679586456141824> **g!ses** : ses kanalında olanlara bakarsın .
   <a:gif_sunucu:788679586456141824> **g!yaz** : Bota yazı yazdırırsınız .
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
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};