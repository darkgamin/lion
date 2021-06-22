const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
   if (talkedRecently.has(message.author.id)) {
     const slowmodee = new Discord.MessageEmbed()
     .setColor('#00008B')
     .setDescription('Bu Komutu 5 Saniye de Bir Kullanabilirsin.')
           return message.channel.send(slowmodee);
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  
let isim = args.slice(0).join("+") 
  const logobişeyyaz = new Discord.MessageEmbed() //MrGold
        .setColor("#00008B")
  .setDescription('**Lütfen Bir Yazı Yaz**')
  if(!isim)return message.channel.send(logobişeyyaz)
  let link = "https://flamingtext.com/net-fu/proxy_form.cgi?script=adidas-logo&fontname=ethnocentric&text="+isim+"&script=adidas-logo&text=Discord&fontname=ethnocentric&fillTextColor=%236d81e7&fillOutlineColor=%23fbfaf9&shadowType=0&backgroundRadio=0&imageoutput=true"
  const embed = new Discord.MessageEmbed() //ottamancode
    .setTitle('Lionhearted| Discord Logo ')
        .setColor("#00008B")
  .setImage(link)
     .setFooter(`${message.author.username} komutu kullandı.`)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'discord-logo',
  description: 'Logo Yaparsınız',
  usage: 'logo <yazı>'
};