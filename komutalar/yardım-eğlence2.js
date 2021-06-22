const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted eğlence2 Menüsü',`
   <a:hehabugold:798143960550735872> **g!8ball** :  espri yapar.
   <a:hehabugold:798143960550735872> **g!hediye-ver** :espri yapar 2 .
   <a:hehabugold:798143960550735872> **g!akinator** :akinator oynarsınız .
   <a:hehabugold:798143960550735872> **g!rastgele-sayı-** : Birisiyle Düello Atarsınız.
   <a:hehabugold:798143960550735872> **g!şanslırengim** :Minecraft skinlerine bakarsın.
   <a:hehabugold:798143960550735872> **g!piyango** :   Bot Sizin Yada Başkasının Falına Bakar.
   <a:hehabugold:798143960550735872> **g!kasaaç** :  yazınızı terse çevirir.
   <a:hehabugold:798143960550735872> **g!oyver**-bota : oyverirsiniz).\``)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)", )
  .setImage("https://cdn.discordapp.com/attachments/828602357637447681/829233717284438046/standard_9.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence2'],
  permLevel: 0
};

exports.help = {
  name: "eğlence2",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};