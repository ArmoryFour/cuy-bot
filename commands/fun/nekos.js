const Discord = require("discord.js")
const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  commands: ['neko', 'nekos'],
  expectedArgs: '',
  permissionError: 'Necesitas permisos',
  minArgs: 0,
  maxArgs: null,
  callback: async (message, args, text) => {

    if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**Nekos**")
      .setDescription("manda imagenes de nekos")
      .addField("modo de uso", `c!neko, nekos`)
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {
  
    let data = await random.getNeko()
    message.channel.send(data)
    }
 },
  requiredRoles: [],
}