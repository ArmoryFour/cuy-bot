const Discord = require ('discord.js');

module.exports = {
    commands: ['help'],
    expectedArgs: '',
    permissionError: 'Necesitas permisos',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, client, args) => {

const help = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**Help**")
.setDescription("Información de todos los comandos del cuy bot \n usar c! como prefix \n usar c!<comando> help para información sobre cada comando")
.addField("**FUN**", "`8ball`, `ascii`, `cats`, `say`, `nekos`, `dm`, `meme`")
.addField("**MODERATION**", "`ban`, `clear`, `mute`, `unmute`, `kick`")
.addField("**UTILITY**", "`avatar`, `guild`, `nickname`, `randomuser`, `user`")
message.channel.send(help)
}
}