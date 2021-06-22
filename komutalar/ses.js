const Discord = require('discord.js');

exports.run = async(client, message, args) => {

let user = message.mentions.members.first()

if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanabilmek İçin Yeterli Yetkin Bulunmuyor.").then(x => x.delete({timeout: 10000}))

if(!user) return message.channel.send("Lütfen Bir Kişiyi Etiketle yada ID Belirt.")

let sonuc; if(!user.voice.channelID) sonuc = `${user} Adlı Kullanıcı Sesli Kanalda Değil.`; if(user.voice.channelID) sonuc = `${user} Adlı Kullanıcı \`${user.voice.channel.name}\` İsimli Sesli Odada!`

message.channel.send(sonuc)

}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: []
}
    
exports.help = {
name: 'ses'
};
