const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs')



const client = new Discord.Client()

client.prefix = config.prefix;
client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});


client.on("message",  message => {
   if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
      return message.reply("O meu prefixo e `"+ config.prefix +"`, use `"+ config.prefix +"ajuda` pra obter **ajuda **")}
     if(!message.content.startsWith(config.prefix)) return;
let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }


 
})

let wlmessage = 0

client.on('ready',async() => {
  console.log('Bot Online')
  let activities = [
    `Utilize ${config.prefix}ajuda para obter informações sobre a cidade!`,
    `BOT desenvolvido por MarKz#0347`
  ],
  i = 0;
setInterval( () =>  {client.user.setActivity(activities[i++ % activities.length], {
      type: "STREAMING",url: "https://www.twitch.tv/toyota414"
    })  
  }, 10000); 
client.user
    .setStatus("dnd")
    .catch(console.error);
    let channel = client.channels.cache.get('801638023098794005')
    const fetched = await channel.messages.fetch({
      limit: 99
    });
    channel.bulkDelete(fetched);
    let embed = new Discord.MessageEmbed()
    .setTitle('Para iniciar sua WL reaja ao emoji abaixo!')
    .setColor('ORANGE')
    .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
    
    channel.send(embed).then(async message => {
      await message.react('id do emoji de reação')
      wlmessage = message.id

    })

});



client.on('messageReactionAdd', async (reaction, user) => {


  
  if(reaction.message.id === wlmessage){

 
    reaction.message.guild.channels.create(user.tag, {
      type: 'text',
     
  }).then(async canal => {
 canal.setParent('801637966178418719')
 canal.overwritePermissions([
  {
      id: reaction.message.guild.roles.everyone,
      deny: ['VIEW_CHANNEL'],
  },
  {
      id: user.id,
      allow: ['VIEW_CHANNEL'],
  },
]);
 canal.send(`${user}`)
let embed = new Discord.MessageEmbed()

.setTitle('Pergunta número 1')
.setDescription(`<:DIREITA:807800831079350303> Qual seu Nome e sua Idade na vida real?`)
.setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
.setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
.setColor('ORANGE')
canal.send(embed)

const filter = m => m.content && m.author.id === user.id
const collector = canal.createMessageCollector(filter, { time: 300000, max: 1 });

collector.on('collect', m => {
  let embed1 = new Discord.MessageEmbed()

  .setTitle('Pergunta número 2')
  .setDescription(`Qual o nome do seu Personagem?`)
  .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
  .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
  .setColor('ORANGE')
  canal.send(embed1)
  
  const filter1 = m1 => m1.content && m1.author.id === user.id
  const collector1 = canal.createMessageCollector(filter1, { time: 300000, max: 1 });
  
  collector1.on('collect', m1 => {
      let embed2 = new Discord.MessageEmbed()

      .setTitle('Pergunta número 3')
      .setDescription(` Explique com suas palavras a definição de Power Gaming? **CITE 2 EXEMPLOS** `)
      .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
      .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
      .setColor('ORANGE')
      canal.send(embed2)
      
      const filter2 = m2 => m2.content && m2.author.id === user.id

      const collector2 = canal.createMessageCollector(filter2, { time: 300000, max: 1 });
      
      collector2.on('collect', m2 => {
          let embed3 = new Discord.MessageEmbed()

          .setTitle(' Pergunta número 4')
          .setDescription(` Explique com suas palavras a definição de Meta Gaming. **CITE 2 EXEMPLOS**`)
          .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
          .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
          .setColor('ORANGE')
          canal.send(embed3)
          
          const filter3 = m3 => m3.content && m3.author.id === user.id

          const collector3 = canal.createMessageCollector(filter3, { time: 300000, max: 1 });
          
          collector3.on('collect', m3 => {
              let embed4 = new Discord.MessageEmbed()

          .setTitle('Pergunta número 5')
          .setDescription(`<:DIREITA:807800831079350303> O que seria Combat Logging? **CITE 2 EXEMPLOS**`)
          .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
          .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
          .setColor('ORANGE')
          canal.send(embed4)
          
          const filter4 = m4 => m4.content && m4.author.id === user.id

          const collector4 = canal.createMessageCollector(filter4, { time: 300000, max: 1 });
          
          collector4.on('collect', m4 => {
              let embed5 = new Discord.MessageEmbed()

              .setTitle('Pergunta número 6')
              .setDescription(`Quais são as principais áreas seguras (safe zones) do servidor?`)
              .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
              .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
              .setColor('ORANGE')
              canal.send(embed5)
              
              const filter5 = m5 => m5.content && m5.author.id === user.id

              const collector5 = canal.createMessageCollector(filter5, { time: 300000, max: 1 });
              
              collector5.on('collect', m5 => {
                  let embed6 = new Discord.MessageEmbed()

                  .setTitle('Pergunta número 7')
                  .setDescription(` Conte a História do seu personagem. Mínimo 5 linhas, seja criativo!`)
                  .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
                  .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
                  .setColor('ORANGE')
                  canal.send(embed6)
                  
                  const filter6 = m6 => m6.content && m6.author.id === user.id

                  const collector6 = canal.createMessageCollector(filter6, { time: 300000, max: 1 });
                  
                  collector6.on('collect', m6 => {
                      let embed7 = new Discord.MessageEmbed()

                  .setTitle('Pergunta número 8')
                  .setDescription(` Você está em uma situação onde vê uma pessoa da Staff do servidor cometendo anti-rp, batendo em várias pessoas da praça e inclusive em você, o que você faz nesse momento?`)
                  .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
                  .setFooter(`© Todos os direitos reservados para a cidade LuckCity RP.`)
                  .setColor('ORANGE')
                  canal.send(embed7)
                  
                  const filter7 = m7 => m7.content && m7.author.id === user.id

                  const collector7 = canal.createMessageCollector(filter7, { time: 300000, max: 1 });
                  
                  collector7.on('collect', m7 => {
                      const channellogs = client.channels.cache.get('id do canal onde vai cair as logs da WL')
                      let embedlog = new Discord.MessageEmbed()
                      .setTitle(`Resposta da WL do usuario ${user.tag}`)
                      .setColor('ORANGE')
                      .setDescription(`Nome da vida real, idade: **${m.content}**
                      
                       Nome do personagem: **${m1.content}**
                      
                      Definição de Power Gaming: **${m2.content}**
                      
                       Definição de Meta Gaming: **${m3.content}**
                      
                       Oque seria  Combat Loggin: **${m4.content}**
                      
                       Quais são as principais áreas seguras (safe zones) do servidor?: **${m5.content}**
                      
                       História do Personagem: **${m6.content}**
                      
                       Você está em uma situação onde vê uma pessoa da Staff do servidor cometendo anti-rp, batendo em várias pessoas da praça e inclusive em você, o que você faz nesse momento? : **${m7.content}**`)

                      .setFooter(`!aprovar ${user.id} \n!reprovar ${user.id}`)

                      channellogs.send(embedlog)
                      reaction.message.guild.member(user).setNickname(m1.content)
                      canal.overwritePermissions([
                        {
                            id: user.id,
                            deny: ['SEND_MESSAGES'],
                        },
                         ])
                         let embedconfirm = new Discord.MessageEmbed()
                         .setDescription(`${user}, Sua WL foi enviada com sucesso para EQUIPE!`)
                         .setColor('ORANGE')
                         .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')

                         canal.send(embedconfirm)
                      setTimeout(() => {
                          canal.delete()
                      },5000)
                  });
                  });
              });
          });
          });
      });
  });
});
});
}

  
});



client.login(config.token);
