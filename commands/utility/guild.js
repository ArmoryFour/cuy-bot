const Discord = require ('discord.js');
const moment = require("moment");

module.exports = {
  commands: ['guild', 'server', 'gremio'],
  expectedArgs: '',
  permissionError: 'Necesitas permisos',
  minArgs: 0,
  maxArgs: 0,
  callback: (message, client, args) => {

    if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**Server**")
      .setDescription("te da informacion sobre el server")
      .addField("modo de uso", `c!server, guild, gremio`)
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {


var guild = message.guild;

function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return "Hace " + days + (days == 1 ? " dia" : " dias");
    };
    
    let ownerTag = message.guild.ownerID;

    let verificationLevel = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
   
let region = {
  "brazil": ":flag_br: Brazil",
  "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
  moment.locale("es");
  
    const Embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(guild.name)
  .setDescription(`ℹ️ Informacion sobre el server`)
.addField("Region", region [guild.region], false)
.addField("Propietario", `👑 <@${ownerTag}>`, false)
.addField("Miembros totales", `📋 ${guild.memberCount}`)
.addField("Nivel de verificacion", `⚠️ ${guild.verificationLevel}`, true)
.addField("Channels", `🗨️ ${guild.channels.cache.size}`, true)
.addField("Roles", `🗞️ ${guild.roles.cache.size}`, true)
.addField("Fecha de creacion", `📅 ${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
.addField("ID", `:id: ${guild.id}`)
.setThumbnail(guild.iconURL());
message.channel.send(Embed);

}
},
  requiredRoles: [],
}