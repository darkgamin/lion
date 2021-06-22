const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setAuthor(`lionhearted Bot`, client.user.avatarURL)
    .addField(
      `> Neden Biz ?`,
      `**Çünkü işimizi en iyi şekilde yaptığımızı düşünüyoruz.**`
    )
    .addField(
      `> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Et!](https://discord.com/oauth2/authorize?client_id=822826129014521878&scope=bot&permissions=2135948799)`
    )
  .addField(
      `> Wep site Göz Atmak isterseniz`,
      `[Sitemiz](http://lionhearted.bot.unaux.com/)`
    )
  .addField(
      `> Bot panel Göz Atmak isterseniz`,
      `[Panel](https://lionhearted-panel.glitch.me)`
    )
    .addField(
      `> Youtube Kanalına Göz Atmak isterseniz`,
      `[Youtube](https://www.youtube.com/channel/UC1HLTNAu04Fl6uAVm6YUP_A)`
    )
    .setThumbnail( 
      "https://cdn.discordapp.com/emojis/670167074584395816.gif?v=1"
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};
