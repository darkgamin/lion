const Discord = require('discord.js'); 
var request = require('request');
const db = require('quick.db')
exports.run = async(client, msg, args) => {
 
 if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription("Doğru kullanım: `g!yavaş-mod [0-∞]`")
              .setColor("RANDOM")
     .setFooter('Lionhearted',client.user.avatarURL())
.setTimestamp()
              msg.channel.send({embed: embed})
            return
          }
  
if (isNaN(limit)) {
  var s = new Discord.MessageEmbed()
  .setDescription("Doğru kullanım: `g!yavaş-mod [0-∞]`")
  .setColor("RANDOM")
       .setFooter('Lionhearted',client.user.avatarURL())
.setTimestamp()
  msg.channel.send({embed: s});
    return
}
  
if (limit > 300) {
  var x = new Discord.MessageEmbed()

    var es = new Discord.MessageEmbed()
    .setDescription(`Yazma süre limiti **${limit}** Saniye olarak ayarlanmıştır!`)
    .setColor("RANDOM")
     .setFooter(' Lionhearted',client.user.avatarURL())
.setTimestamp()
    msg.channel.send({embed: es})
  

request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
    return
}
    var e = new Discord.MessageEmbed()
    .setDescription(`Yazma süre limiti **${limit}** Saniye olarak ayarlanmıştır!`)
     .setFooter('Lionhearted',client.user.avatarURL())
.setTimestamp()
    .setColor("RANDOM")
    msg.channel.send({embed: e});
  

request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yavaşmod'],
  permLevel: 0
};

module.exports.help = {
  name: 'yavaşmod-ayarla',
  description: '',
  usage: ''
};
