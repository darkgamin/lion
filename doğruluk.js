const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?',"Birdenbire görünmez olsaydın ne yapardın?", 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?',"Bir diş fırçasını en iyi arkadaşınla paylaşır mısın?","Hiç arkadaşının sırrını başkasıyla paylaştın mı?","Ayak kokunuz kötü mü?","Banyoda kaldığınız en uzun süre nedir ve neden bu kadar uzun süre kaldınız?", 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'Saçınızı herhangi bir renge boyayabilseydiniz, hangi rengi seçersiniz?',"Yaşadığınız devletin başkenti nedir?","Sınıfta hiç uyuya kaldın mı?"]
    var cesaret = ['İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır',"Kedi gibi miyavla","10 kere etrafında dön, bittiğinde düz bir çizgide yürümeye çalışın","Senin sıran gelene kadar gözlerini kapat","1 dakika boyunca hiç müzik olmadan dans edin.","En yakın dürümcüyü ara ve 300 tavuk dürüm siparişi ver. 1 dakika sonra siparişi başka yerden verdik diye iptal et."]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk ise (d)\` mu yoksa \`cesaret lik ise(C)\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};