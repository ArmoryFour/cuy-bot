const Discord = require("discord.js")
const { get } = require("snekfetch"); 

module.exports = {
  commands: ['gatos', 'gato', 'cats', 'cat'],
  expectedArgs: '',
  permissionError: 'Necesitas permisos',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, args) => {
    
  if(args[0] === "help"){
    
    const he = new Discord.MessageEmbed()
      .setTitle("**gatos**")
      .setDescription ("te da imagenes de gatos")
      .addField("modo de uso", `c!gatos, cats`)
      .addField("ejemplo", "c!gatos")
      .setColor("FF0000")
      
      message.channel.send(he)
    
  } else {
    
try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.MessageEmbed()
				.setColor("RANDOM")
				.setImage(res.body.file)
				return message.channel.send(embed);
			});
		} catch(err) {
			return message.channel.send(err.stack);
		}
  }
},
  requiredRoles: [],
}