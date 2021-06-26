const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
  commands: ['mute'],
  expectedArgs: '<persona> <tiempo>',
  permissionError: 'Necesitas permisos',
  minArgs: 0,
  maxArgs: 2,
  callback: async (message, args, text) => {
    
        if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**Mute**")
      .setDescription("mutea a un usuario por un cierto tiempo")
      .addField("modo de uso", `c!mute <usuario> <tiempo>`)
      .addField("ejemplo", "c!mute<@788192031653494834> 1d")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {

const member = message.mentions.members.first();

if (!message.member.hasPermission('MANAGE_ROLES')) {
            message.reply("no tienes permisos :(");
}
   


        if (!member) {
            message.reply("no pude encontrar a este miembro");

            return;
        }
if (member.hasPermission('MANAGE_MESSAGES')) {
            message.reply("no puedes mutear a este usuario");

            return;
        }


let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');

   if(!mutedRole){
message.guild.roles.create({
  data: {
    name: 'muted',
    color: '#000000',
  },
}).then((role) => {
  message.guild.channels.each((channel) => { // iterate through all channels
    channel.updatePermissions(role,  { // identify the role to update
      
        SEND_MESSAGES: false, // set the overwrites
        ADD_REACTIONS: false,
      }
   );
  });
});
}
var mutetime = args[1]



    
    if(!mutetime) return message.reply("Pon un tiempo");

await(member.roles.add(mutedRole.id));   


            const muteE = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(`🔇 ${member.user.username} ha sido muteado del server por ${mutetime}`)
	.setAuthor('por ' + message.author.username, message.author.avatarURL())

message.channel.send(muteE);


  setTimeout(function(){
    member.roles.remove(mutedRole.id);
    message.channel.send(`${member} ha sido desmuteado!`);
    
}, ms(mutetime));
    }
  },
  requiredRoles: [],
}