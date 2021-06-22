const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'g!'
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Lionhearted Abone Rol Menüsü',`
 <a:EmojiGif18:846288775407337522> **g!aboneyetkilisi-ayarla** : Abone Yetkilisini Seçer.
 <a:EmojiGif18:846288775407337522> **g!abonerol-ayarla** : Vericeğiniz Rolü ayarlarsınız.
 <a:EmojiGif18:846288775407337522> **g!abonekanal-ayarla** : Log mesajınn gitceği yer seçilir.
 <a:EmojiGif18:846288775407337522> **g!aboneistatistik** : Kaç tane abone rol verildiğine bakılır.
 <a:EmojiGif18:846288775407337522> **g!abonesistem-kapat** : Abone-rol sistemini kapatırsınız.
 <a:EmojiGif18:846288775407337522> **g!abone** : Abone Rolü verme komutudur.`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)", )
    .setImage("https://cdn.discordapp.com/attachments/844518851827990549/846388310813442088/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım'],
  permLevel: 0
};

exports.help = {
  name: "abone-yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};