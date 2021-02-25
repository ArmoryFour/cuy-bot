const Discord = require("discord.js")
module.exports = {
    commands: ['say', 'repeat', 'di', 'repite'],
    expectedArgs: 'texto',
    permissionError: 'Necesitas permisos',
    minArgs: 1,
    maxArgs: null,
    callback: (message, args, text) => {
      
          if (args[0] === "help"){
        
        const he = new Discord.MessageEmbed()
        .setTitle("**Say**")
        .setDescription("Repite lo que escribas")
        .addField("modo de uso", `c!say, di, repeat, repite<texto>`)
        .addField("ejemplo", "c!say hola uwu")
        .setColor("FF0000")
        
        message.channel.send(he)
        
        
      } else {
      
  var say = args.join(" ");
        message.channel.send(say);
          message.delete();
      }
        
      },
    requiredRoles: [],
  }