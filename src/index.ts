import { Client, GatewayIntentBits, Events } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === 'ping') {
    message.reply('pong').catch(console.error);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(console.error);
