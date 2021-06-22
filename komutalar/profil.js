const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, tools) => {
let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    const codwaembed = new Discord.MessageEmbed()
    
        .setColor("BLACK")
    
    .setThumbnail(user.avatarURL)
    
    .setTitle(`${user.username}#${user.discriminator} `)
    
    .addField("  İsminiz :",`${user.username}#${user.discriminator}`, true)
    .addField("  İdniz :", `${user.id}`, true)
    .addField("  Discord Etiketiniz :", `#${user.discriminator}`, true)
        .addField("  Hesap Oluşturma Tarihiniz :", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, ')}`, true)
        .addField("  Sunucuya Katılma Tarihiniz :", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')}`, true)
        .addField("  Oynadığınız Oyun :", `${user.presence.game ? user.presence.game.name : 'Bilinmiyor'}`, true)
        
    message.channel.send({codwaembed});
    }

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['profil-bilgi','profilbilgi','kullanıcı-bilgi','kullanıcıbilgi','k-bilgi','kbilgi'], 
  permLevel: 0 
};

exports.help = {
  name: 'profil', 
  description: 'codwa & ottomancode',
  usage: 'profil' 
};
