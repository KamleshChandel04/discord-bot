const dotenv = require("dotenv");
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({
        content: "Hello from Kamlesh, This is a Bot.",
    });
});

dotenv.config();
client.login(process.env.TOKEN, console.log(`Server Running`));
