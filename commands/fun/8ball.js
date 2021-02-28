const Discord = require("discord.js");
module.exports = {
  commands: ['8ball', 'pregunta'],
  expectedArgs: '<pregunta>',
  permissionError: 'Necesitas tener permisos para esto',
  minArgs: 1,
  maxArgs: null,
  callback: (message, args, text) => {
      
     if (args[0] === "help"){

const he = new Discord.MessageEmbed()
      .setTitle("**8ball**")
      .setDescription ("este comando te responde a una pregunta de si o no")
      .addField("modo de uso", `c!8ball, pregunta <pregunta>`)
      .addField("ejemplo", "c!8ball ¿soy guapo?")
      .setColor("FF0000")
      
      message.channel.send(he)
       
     } else {
      
      let replies = ['si', 'no', 'nunca', 'es imposible', 'puede ser', 'definitivamente']; 

    let result = Math.floor(Math.random() * replies.length); 
    
    const ball8 = new Discord.MessageEmbed()
    .setColor('RANDOM')
	.setTitle(`Pregunta: ${args.join(" ")}`)
	.setDescription(replies[result]);
      
 message.channel.send(ball8);
      
    
    
     }
    
    
  },
  requiredRoles: [],
};