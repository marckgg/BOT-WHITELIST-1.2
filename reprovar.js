const Discord = require('discord.js')

module.exports = {
    name: "wl",
    description: "whitelist.",

    async run (client, message, args) {
        let user = message.mentions.members.first() || client.users.cache.get(args[0])
        if(!user) return message.channel.send(`Informe um usuario`)
        message.guild.member(user).roles.add('id do cargo reprovado')
        message.channel.send(`${message.author}, o usuário foi reprovado com sucesso!`)
        user.send('Infelizmente voce foi reprovado!')


        const reprovar = client.channels.cache.get('id do canal onde irá informar que o usuário foi reprovado')
        reprovar.send(`${user}`)
                            let reprovadolog = new Discord.MessageEmbed()
                            .setTitle('Reprovado!')
                            .setDescription(`Você infelizmente foi reprovado, mas não precisa desanimar, iremos dar mais uma chance para você realizar a WL, leia as regras novamente!`)
                            .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
                            .setColor('ORANGE')

                            reprovar.send(reprovadolog)
    }
}