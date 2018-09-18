//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const Octopus = new Discord.Client();
const main = require('../Main.json');

var prefix = main.prefix;
var surum = main.surum;

exports.run = (Octopus, message) => {
  message.channel.send({embed: {
                author: {
                    name: `Octopus Güncel Sürüm Notları (Sürüm: 1.0.0 > ${surum})`,
                    icon_url: "https://cdn.discordapp.com/attachments/486838723422715904/491572996277010432/8.png"
                  },
                color: 0xD97634,
                description: `**v1.0.0:** Yeni Müzik Komutları *(${prefix}müzik)*, Çeşitli Hata Düzeltmeleri \n**v1.0.1:** Müzik Komutlarındaki Ufak Hatalar Giderildi \n**v1.0.2:** ${prefix}ping Komutu Wolfy'nin Trafiğini Gösterdiğinden Wolfy İçin Yeniden Tasarlandı, Giriş Mesajı Yeniden Düzenlendi, Ufak Hatalar Düzeltildi, ${prefix}sürümNotları Komutu Düzenlendi`
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sürümnotları'
};
