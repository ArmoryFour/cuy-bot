const Discord = require("discord.js");
module.exports = {
  commands: ['dm', 'md', 'privado'],
  expectedArgs: '<persona> <mensaje>',
  permissionError: 'Necesitas permisos',
  minArgs: 1,
  maxArgs: null,
  callback: (message, args, text) => {

    if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**DM**")
      .setDescription("manda un mensaje privado al usuario que menciones")
      .addField("modo de uso", `c!dm, md, privado <usuario> <mensaje>`)
      .addField("ejemplo", "c!dm <@788192031653494834> hola uwu")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {
    
    
  let {guild} = message;
var ust = message.mentions.users.first();

const dm = new Discord.MessageEmbed()
.setTitle(args.slice(1).join(" "))
.setColor("RANDOM")
.setFooter(guild.name)
ust.send(dm);

message.channel.send("mensaje enviado uwu");

}
},
  requiredRoles: [],
}