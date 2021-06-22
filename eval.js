const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if(message.author.id !== "839226099413942322") return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);
    const embed = new Discord.MessageEmbed().setColor('RANDOM');
    try {
        let codein = args.join(" ");
        let code = eval(codein);
        if (codein.length < 1) return message.reply(`deneyebilmek için bir kod girmelisin!`)
        if (typeof code !== 'string') code = require('util').inspect(code, { depth: 0 });
        message.channel.send(embed.addField('» Kod', `\`\`\`js\n${codein}\`\`\``).addField('» Sonuç', `\`\`\`js\n${code}\n\`\`\``))
    } catch(e) {
        message.channel.send(embed.addField('» Hata', "\`\`\`js\n"+e+"\n\`\`\`"));
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kod'],
    permLevel: `Bot sahibi olmak gerekir.`
};
  
exports.help = {
    name: 'eval',
    description: 'Kod denemeyi sağlar.',
    usage: 'eval'
};