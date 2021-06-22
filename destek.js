const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('853963715313664020') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketlemelisin!').setColor("RANDOM"));
  let user = message.mentions.users.first();
  let member = message.guild.member(kullanıcı)
 let isim = args[1];
      if(!isim) return message.channel.send(" **Lütfen bir isim girin!** ").then(m => m.delete(5000));
   let yas = args[2];
      if(!yas) return message.channel.send(" **Lütfen bir yaş girin!** ")
await member.setNickname(`${isim} | ${yas}`); 
  const kanal = message.guild.channels.find(c => c.id == "856415765195128873") //LOGİD
  const embed1 = new Discord.RichEmbed()
  let embed = new Discord.RichEmbed() 
  .addField(`İsimKayıt`, `\n**Kayıt Edilen Kullanıcı:** ${member.user} \n **Güncellenen İsim: \` ${isim} | ${yas}\`** \n **Kayıt Eden Yetkili:** ${message.member}` ) 
.setThumbnail(user.avatarURL)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp()
  return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["i" , "isim"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'kayıt',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'isim '
} 