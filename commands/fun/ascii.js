const figlet = require('figlet');
const Discord = require('discord.js');

module.exports = {
  commands: 'ascii',
  expectedArgs: '<texto>',
  permissionError: 'Necesitas tener permisos para usar este comando',
  minArgs: 1,
  maxArgs: null,
  callback: (message, args) => {
        
          if (args[0] === "help"){

const he = new Discord.MessageEmbed()
      .setTitle("**ascii**")
      .setDescription ("este comando convierte el texto que tu quieras a estilo `ascii`")
      .addField("modo de uso", `c!ascii <texto>`)
      .addField("ejemplo", "c!ascii <texto>")
      .setColor("FF0000")
      
      message.channel.send(he)
       
     } else {   
        


        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                message.channel.send('Algo falló');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Pon un texto que tenga menos de 2000 caracteres')

            message.channel.send('```' + data + '```')
        })
  
     }
     },
  requiredRoles: [],
}