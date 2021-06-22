const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const atam = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(atam);
    
};
//
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//
exports.help = {
  name: 'atatürk',
  description: 'Atamın Resmini Atar',
  usage: 'atatürk'
};