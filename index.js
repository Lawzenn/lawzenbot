const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("ByLawzenn, !help")
    console.log("Connected");
});

bot.login("NDA0NDM4MTg2MTY5NzI5MDI0.DUV34g.hQyC6ebWCj5Zp08YFgWApicH3XA");


bot.on('message', message => {
  if (message.content === 'help') {
    message.reply('L'aide est en devellopement' )
  }
})
