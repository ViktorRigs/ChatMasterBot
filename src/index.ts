import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === 'ping') {
        message.reply('pong');
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);