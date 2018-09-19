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
                    name: `Wolfy Güncel Sürüm Notları (Sürüm: 1.0.2 > ${surum})`,
                    icon_url: "https://cdn.discordapp.com/attachments/486838723422715904/491572996277010432/8.png"
                  },
                color: 0xD97634,
                description: `**v1.0.3:** Bot oylamak için link *(${prefix}botoyla)*`
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
