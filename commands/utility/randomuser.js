const Discord = require("discord.js");
module.exports = {
  commands: ['randomuser', 'userrandom'],
  expectedArgs: '',
  permissionError: 'Necesitas permisos',
  minArgs: 0,
  maxArgs: null,
  callback: (message, args, text) => {

    if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**RandomUser**")
      .setDescription("manda un usuario aleatorio del servidor")
      .addField("modo de uso", `c!randomuser, userrandom`)
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {

var randomUser = message.guild.members.cache.random();

const ust = new Discord.MessageEmbed()
.setTitle("Usuario Random")
.setColor('RANDOM')
	.setDescription(`El usuario elegido es ${randomUser}`);





message.channel.send(ust);
  
    }

 },
  requiredRoles: [],
}