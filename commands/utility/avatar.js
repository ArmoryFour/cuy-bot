const Discord = require("discord.js");
module.exports = {
  commands: ['avatar', 'pp'],
  expectedArgs: '<pregunta>',
  permissionError: 'Necesitas tener permisos para esto',
  minArgs: 0,
  maxArgs: 1,
  callback: (message, args, text) => {
    
        if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**avatar**")
      .setDescription("te da el avatar de un usuario, si quieres la foto de perfil deo server escribe `server` después deo comando")
      .addField("modo de uso", `c!avatar, pp <usuario>`)
      .addField("ejemplo", "c!avatar server, c!avatar <@788192031653494834>")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {
  
  var member = message.mentions.members.first();
  
var img;
var un;

  
  if (!args[0]){
    
 img = message.author.displayAvatarURL({size: 1024, dynamic : true});
   un = message.author.username;
   
  } else if (args[0] === "guild" || args[0] === "server"){
      
      img = message.guild.iconURL({size: 1024, dynamic : true});
      un = message.guild.name;
      console.log(img)
    } else {
    
    img = member.user.displayAvatarURL({size: 1024, dynamic : true});
    un = member.user.username;
   
  } 
  
    
    const avatarE = new Discord.MessageEmbed()

  .setColor('RANDOM')
	.setTitle("Avatar de " + un)
	.setImage(img);

	message.channel.send(avatarE);

    }
  },
  requiredRoles: [],
}