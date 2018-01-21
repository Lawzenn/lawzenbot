const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("ByLawzenn, !help")
    console.log("Le bot a bien été connecté")

    
bot.on('message', message => {
    if (message.content === '!ping') {
      message.reply('pong !')
    }

})


bot.login("NDA0NDM4MTg2MTY5NzI5MDI0.DUV34g.hQyC6ebWCj5Zp08YFgWApicH3XA");
