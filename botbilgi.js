const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
process.setMaxListeners(0);
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
   
. setColor("#ffd100")
  .setFooter('Lionhearted bot', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@839226099413942322>")
  .addField("» **Geliştirici** ","<@839226099413942322>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , 1000000)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true) 
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)", )
   .addField(
      `> Wep sitemize Göz Atmak isterseniz`,
      `[Sitemiz](http://lionhearted.bot.unaux.com/)`
    )
.addField(
      `> Youtube Kanalına Göz Atmak isterseniz`,
      `[Youtube](https://www.youtube.com/channel/UC1HLTNAu04Fl6uAVm6YUP_A)`
    )
    .setImage("https://cdn.discordapp.com/attachments/821746986637459509/822725609670574110/standard_8.gif")
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi","botbilgi","i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "gc",
  usage: "istatistik"
};