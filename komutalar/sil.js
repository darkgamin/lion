const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setTitle('**`Mesajları Yönet` İzni sende yok.**'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setTitle('Silinecek miktar giriniz.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setTitle('<a:avilon_unlem2:848949825181319198>  Mesaj silme limiti `100` üzeri mesajı aynı anda silemem. <a:avilon_unlem2:848949825181319198> '));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed()
.addField(`Temizleyen Yetkili`, `<@${message.author.id}>`)
.setTitle('<a:782614379401183252:843919125369061376>  Tamamdır Patron! '+`${args[0]}`+' adet mesaj silindi.<a:782614379401183252:843919125369061376> ')).then(m => m.delete({timeout: 3900}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};