const Discord = require('discord.js')
const moment = require(`moment`)
moment.locale('pt-br');

module.exports ={ 
    name: "ban",
    description: "banir.",

    async run (client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}, você não tem permissão para utilizar esse comando.`)
        let member = message.mentions.users.first() || client.users.cache.get(args[0])
        if(!member){
          return message.reply(`${message.author}, por favor mencione um usuário válido !`)
        }
        let reason = args.slice(1).join(' ')
        if(!reason) reason = "Nenhuma razão fornecida"
        client.users.fetch(member.id).then(async memb => {
        message.guild.member(memb.id).ban().then(async foi => {
        message.delete();
        
        const embed = new Discord.MessageEmbed()
        .setTitle("Painel de Ban")
        .setThumbnail(message.author.displayAvatarURL({dynamic: 'png', size: 1024}))
        .addField(" Membro Banido:", "\n   Usuario: `"+member.tag+"` \n  ID: `"+member.id+"`")
        .addField("Autor do Banimento:", "\n   Usuario: `"+message.author.tag+"` \n   ID: `"+message.author.id+"`")
        .addField("Motivo:", `${reason}`)
        .setColor('ORANGE')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        

        message.channel.send(embed).then(async apagar => {
            setTimeout(() => {
            apagar.delete()
        }, 20000)
    })
        })

    const banlogs = client.channels.cache.get('id do canal')
    let embedbanlog = new Discord.MessageEmbed()
    .setTitle("Logs BAN")
    .addField(" Membro Banido:", "\n   Usuario: `"+member.tag+"` \n  ID: `"+member.id+"`")
    .addField(" Autor do Banimento:", "\n   Usuario: `"+message.author.tag+"` \n   ID: `"+message.author.id+"`")
    .addField(" Motivo:", `${reason}`)
    .setColor('ORANGE')
    .setThumbnail('https://cdn.discordapp.com/avatars/807738550106849290/76063152902c3bdb85412492849b56bd.png?size=1024')
    .setFooter(moment().format('LLLL'))
    
    banlogs.send(embedbanlog)
}); 
    }
}
