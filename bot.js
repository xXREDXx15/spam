const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("683790543498772595")
setInterval(function() {
channel.send(`HentaiBoy HentaiBoy HentaiBoy HentaiBoy  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);