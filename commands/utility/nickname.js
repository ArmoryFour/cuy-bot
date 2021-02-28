module.exports = {
    commands: ['nickname', 'username', "name", 'changename', "nombre", "cambiarnombre"],
    expectedArgs: '<num1> <num2>',
    permissionError: 'Necesitas permisos',
    minArgs: 1,
    maxArgs: null,
    callback: (message, args, text) => {
   
       if (args[0] === "help"){
        
        const he = new Discord.MessageEmbed()
        .setTitle("**Nickname**")
        .setDescription("cambia el nombre al usuario que menciones")
        .addField("modo de uso", `c!nickname, username, name, changename <usuario>`)
        .addField("ejemplo", "c!nickname <@788192031653494834> El mejor bot")
        .setColor("FF0000")
        
        message.channel.send(he)
        
        
      } else {   
  
  const target = message.mentions.users.first()
      const member = message.guild.members.cache.get(target.id)
  
      args.shift()
      const nickname = args.join(' ')
  
      member.setNickname(nickname)
  
  }
  },
    requiredRoles: [],
    permissions: ["MANAGE_NICKNAMES"]
  }