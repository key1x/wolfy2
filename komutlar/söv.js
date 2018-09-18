//Octopus by R4dar
//
//v2

const Discord = require('discord.js');
const söv = [
  { s: "**Bak seni ısırırım ha!**" }
];

module.exports.run = async (Octopus, message, args) => {
  
  const item = söv[Math.floor(Math.random() * söv.length)];
  await message.channel.send(item.s);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'söv'
};
