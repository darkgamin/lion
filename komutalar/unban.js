const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`İznin yok.`))
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed() .setDescription(` Yetkin yok.`))
        
        let user = args[0];
        if(!user){
            message.channel.send("Geçerli bir kullanıcı kimliği belirtmiyorsunuz.")
        }
else {
        const banList = await message.guild.fetchBans();
        if (!user || isNaN(user) || !banList.has(user)) {
            return message.channel.send(new MessageEmbed().setDescription(`Kullnaıcı sucnudan yasaklanmamıl.`))
        }
        message.guild.members.unban(user);
        message.channel.send(new MessageEmbed().setDescription(`Kullanıcının yasağını kaldırdım!`))
}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unban'
};