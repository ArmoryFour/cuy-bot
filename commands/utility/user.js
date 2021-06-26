const Discord = require("discord.js")
const moment = require("moment")

module.exports = {
  commands: ['user', 'member'],
  expectedArgs: '<usuario>',
  permissionError: 'Necesitas permisos',
  minArgs: 1,
  maxArgs: 1,
  callback: (message, args) => {

    if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**user**")
      .setDescription("te da informacion sobre algún miembro")
      .addField("modo de uso", `c!user, member <usuario>`)
      .addField("ejemplo", "c!user <@788192031653494834>")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {

  const user = message.mentions.members.first();
  var em;
  var raza;
  
  if(user.user.bot){
    
    em = "🤖";
    raza = "BOT"
    
  } else {
    
    em = "🙋";
    raza = "HUMANO";
    
  }
  
  




   var e = user.roles.highest.id;

  moment.locale("es");
   
   const userE = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("ℹ️ informacion sobre ℹ️")
  .setDescription(user.user.username)

.addField("Se unió el",`👋 ${moment.utc(user.joinedAt).format('LLLL')}`)

.addField("Cuenta creada el "
, `🖌️ ${moment(user.user.createdAt).format("LLLL")}`)

.addField(" Rol mas alto", `👑 <@&${e}>`)


.setThumbnail(user.user.displayAvatarURL())
.addField(`Es un `, `${em} ${raza}`)
.setFooter(user.user.tag, "https://cdn.discordapp.com/attachments/781563687026294797/790417788107096134/images.png")

message.channel.send(userE);

    }
    }
}