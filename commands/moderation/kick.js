const Discord = require("discord.js");
const { giphyToken } = require('../../config.json');
module.exports = {
  commands: ['kick'],
  expectedArgs: '<persona>',
  permissionError: 'Necesitas permisos',
  minArgs: 1,
  maxArgs: null,
  callback: (message, args) => {
    
        if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**Kick**")
      .setDescription("saca a un usuario del servidor")
      .addField("modo de uso", `c!kick <usuario>`)
      .addField("ejemplo", "c!kick <@788192031653494834>")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {
    
    let member = message.mentions.members.first();
    member.kick().then((member) => {
  

const kickE = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription('👋 ' + member.user.username + ' ha sido kickeado del server')
	.setAuthor('por ' + message.author.username, message.author.avatarURL())



       message.channel.send(kickE)
    
        })
    }
  },
  requiredRoles: [],
}