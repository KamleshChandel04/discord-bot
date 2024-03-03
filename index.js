const dotenv = require("dotenv");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

//Normal Message will be handled here
client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({
        content: `Hello ${message.author.globalName}\nHow can I help you ?`,
    });
});

//Interactive Message will be handles here "/ping"
client.on('interactionCreate' , (interaction) =>{
    console.log(interaction);
    interaction.reply("Pong!!");
})

dotenv.config();
client.login(process.env.TOKEN, console.log(`Bot Started`));
