import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const client = new Client({ intents: [] });

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.login(process.env.DISCORD_BOT_TOKEN);