const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
 
if(message.author.id !== "803226910938497024")  return message.channel.send("**Bu Komutu Sadece Sahiplerim Kullanabilir.**");
  
  let nesne = args[0]
  if (!nesne) return message.channel.send('**Bir ID Belirtmelisin!**')
  
  db.set(`gold_${nesne}`, 'gold')
  
   message.channel.send(`**<@${nesne}>:okey: Adlı Kişinin Premium Üyelği Aktif Edildi.**<@${nesne}>**aramıza hoşgeldin dostum.:merhaba:**`)
  client.message.send( new Discord.MessageEmbed() .setDescription(`**<@${nesne}> ID\'li Kullanıcı Premium Üyeliğe Eklendi.**`) .setColor('BLUE'))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldekle','goldver','premium-ver'],
  permLevel: 0
};
exports.help = {
  name: 'premium-ekle',
  description: '',
  usage: ''
};