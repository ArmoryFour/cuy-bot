const Discord = require('discord.js');
const { giphyToken } = require('../../config.json');
const bot = new Discord.Client();


module.exports = {
  commands: ['ban'],
  expectedArgs: '<user>',
  permissionError: 'Necesitas permisos',
  minArgs: 1,
  maxArgs: 2,
  callback: (message, args) => {
    
        if (args[0] === "help"){
      
      
      
      const he = new Discord.MessageEmbed()
      .setTitle("**Ban**")
      .setDescription("Banea a un miembro del server")
      .addField("modo de uso", `c!ban <usuario> <razón>`)
      .addField("ejemplo", "c!ban <@788192031653494834> spam")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {
    
    let member = message.mentions.members.first();
    member.ban({reason: args[1]}).then((member) => {

const kickE = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setDescription('👋 ' + member.user.username + ' ha sido baneado del server')
	.setAuthor('por ' + message.author.username, message.author.avatarURL())



       message.channel.send(kickE)
    
        })
    
}
  },
  requiredRoles: [],
}