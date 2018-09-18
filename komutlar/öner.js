//        ___       _                        
//       / _ \  ___| |_ ___  _ __  _   _ ___ 
//      | | | |/ __| __/ _ \| '_ \| | | / __|
//      | |_| | (__| || (_) | |_) | |_| \__ \
//       \___/ \___|\__\___/| .__/ \__,_|___/
//                          |_|              

const Discord = require("discord.js");
const kernel = require("../Main.json");
var davet = kernel.davet;
module.exports.run = async (Octopus, message, args) => {
if (args == 0) return message.channel.send("**Önerinizi Wolfy Yöneticisine Yollayabilmem İçin Bir Öneri Belirtin** `Örnek: w!öner Yeni Komutlar Gelsin!`")
let komut = args.join(" ").slice(0)
let user = message.author.username;
let guild = message.guild.name;
let channel = Octopus.channels.get("160411336948318209")
let embed = new Discord.RichEmbed()
.setTitle("Öneri")
.addField("Belirtilen Öneri:", komut)
.addField("Öneriyi Yollayan:", user)
.addField("Önerinin Yollandığı Sunucu:", guild)
.setColor("#f49542")

message.channel.send("**:ok_hand: Öneriniz Wolfy Yöneticisine Doğru Yola Çıktı.**")
message.channel.send("**:pray: Öneriniz İçin Teşşekürler**")
message.channel.send("**Herhangi Bir Desteğe İhtiyaç Duyarsınız Destek Sunucumuz:**")
message.channel.send(`${davet}`)
channel.send(embed).then(i => i.react("⏳")) 


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öner'],
  permLevel: 0
};

exports.help = {
  name: 'öner'
};