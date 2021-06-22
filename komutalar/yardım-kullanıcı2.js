const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField('Lionhearted kullanıcı2 Menüsü',`
  <a:gif_sunucu:788679586456141824> **g!sunucu-kur** :  Sunucu kurar.
  <a:gif_sunucu:788679586456141824> **g!sor** : Botla sohbet edersiniz.
  <a:gif_sunucu:788679586456141824>**g!oylama** : : Sunucunuzda oylama yaparsınız. 
 <a:gif_sunucu:788679586456141824> **g!hava-durum** :hava-durumunu gösterir.. 
  <a:gif_sunucu:788679586456141824> **g!osmanlı-bilgi** : Osmanlı İmparatorluğu hakındabigi verir .
  <a:gif_sunucu:788679586456141824> **g!avatar** : Etiketlediğiniz Kişinin veya kendi Avatarını Gösterir.
  <a:gif_sunucu:788679586456141824> **g!sunucubilgi** : Sunucunuzun Bilgisini Gösterir.
  <a:gif_sunucu:788679586456141824>**g!sunucuresmi** : : Sunucunuzun resmini Gösterir.           
  <a:gif_sunucu:788679586456141824> **g!yapımcım** : yapımcıma bakarsınız.
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
  aliases: ['kullanıcı2'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı2",
  category: "kullanıcı",
    description: "Eğlence Komutları Gösterir."
};