const Discord = require('discord.js');
const db = require('quick.db');
const p = "."
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir komut belirtmelisiniz. Lionhearted  Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
if(args[0] === "log"){
var kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir kanal belirtmelisiniz. Lionhearted Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
db.set(`uyarilog_${message.guild.id}`, kanal.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı Log kanalı ayarlandı."))
};
if(args[0] === "yetkili" || args[0] === "görevli"){
var rol = message.mentions.roles.first();
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir rol belirtmelisiniz. Lionhearted  Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
db.set(`uyariyetkili_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`\`Uyarı Yetkilisi\` rol'ü <@&${rol.id}> olarak ayarlandı!`))
};
if(args[0] === "sınır"){
var sınır = args.slice(1).join('')
if(!sınır) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir sayı belirtmelisiniz. Lionhearted Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
if(isNaN(sınır)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir sayı belirtmelisiniz. Lionhearted  Uyarı Sistemi'ni kullanmayı bilmiyorsanız: \`${p}uyar-a yardım\``))
if(sınır > 2000) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Girdiğiniz sayı 2000'den küçük olmalıdır.`))
db.set(`uyarisinir_${message.guild.id}`, sınır)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Uyarı sınırı ayarlandı!"))
};
if(args[0] === "cezalı"){
var rol = message.mentions.roles.first()
if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir rol berlirtin!"))
db.set(`uyaricezarol_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("Uyarı ceza rolü ayarlandı!"))
};
if(args[0] === "yardım"){
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle("Lionhearted Sistemi | Yardım Paneli")
.setDescription(`
**g!uyarı-a log** : Log kanalını ayarlar.
**g!uyarı-a yetkili** : Uyarı yetkilisini ayarlar.
**g!uyarı-a sınır** : Ceza Puanı sınırını ayarlar.
**g!uyarı-a cezalı** : Ceza rolünü ayarlar
**g!sicil @kisi** : Kişinin uyarı geçmişini gösterir.
(Eğer kişi etiketlenmezse kendisinin uyarı geçmişini gösterir)
**g!uyarı-sil @kisi** : Kişinin tüm uyarı geçmişini siler.
**g!uyar @kisi <sebep>** : Kişiyi uyarır.
`)
return message.channel.send(embed)
};
};
exports.conf = {
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: "uyarı-a"
};