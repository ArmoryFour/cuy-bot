const Discors = require('discord.js');

module.exports = {
  commands: ['clear', 'delete', 'purge', 'clean'],
  expectedArgs: '<numero de mensajes>',
  permissionError: 'Necesitas permisos',
  minArgs: 1,
  maxArgs: 1,
  callback: (message, args, text) => {
  
      if (args[0] === "help"){
      
      const he = new Discord.MessageEmbed()
      .setTitle("**clear**")
      .setDescription("borra la cantidad de mensajes que quieras")
      .addField("modo de uso", `c!clear <cantidad de mensajes>`)
      .addField("ejemplo", "c!clear 10")
      .setColor("FF0000")
      
      message.channel.send(he)
      
      
    } else {
  
        message.delete()
        if(!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`No tienes permisos para usar este comando`).then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        if(isNaN(clearamount)) return message.reply(`Please do a number value to clear.`).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        if(clearamount <= 0) return message.reply(`Please choose a number greater than **0** and less than **1**`)
        message.channel.send(`⚠ Clearing Messages.. Please Wait! ⚠️`).then(msg => msg.delete({timeout: 2000}));
        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);
        }, 1000)
    }
  },
  requiredRoles: [],
  permissions: ["MANAGE_MESSAGES"]
}