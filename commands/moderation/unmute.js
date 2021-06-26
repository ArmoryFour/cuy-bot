const Discord = require("discord.js")
module.exports = {
    commands: ['unmute', 'desmute'],
    expectedArgs: '<persons>',
    permissionError: 'Necesitas permisos',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, args) => {
      
          if (args[0] === "help"){
        
        const he = new Discord.MessageEmbed()
        .setTitle("**DM**")
        .setDescription("desmutea a un usuario muteado")
        .addField("modo de uso", `c!unmute <usuario>`)
        .addField("ejemplo", "c!unmute <@788192031653494834>")
        .setColor("FF0000")
        
        message.channel.send(he)
        
        
      } else {
  
  let member = message.mentions.members.first();
  let role = message.guild.roles.cache.find(role => role.name === 'Muted');
  if (member.roles.cache.get(role.id)) {
        member.roles.remove(role)
        message.channel.send(`${member.user} ya no está muteado`)
        
    
  } else {
        message.channel.send(`${member.user} no está muteado`)
      }
      }
  },
    requiredRoles: [],
  }