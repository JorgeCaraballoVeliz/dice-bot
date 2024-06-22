import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as _1d6 from './commands/1d6.js';
import * as _2d6 from './commands/2d6.js';
import * as _3d6 from './commands/3d6.js';

config();

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyDiscord);

// Login to Discord with your client's token
client.login(process.env.TOKEN);

function readyDiscord() {
    console.log('💖');
}

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "1d6") {
       await _1d6.execute(interaction);
    } else if (interaction.commandName === "2d6") {
        await _2d6.execute2(interaction);
    } else if (interaction.commandName === "3d6") {
        await _3d6.execute3(interaction);
    }
}

client.on(Events.InteractionCreate, handleInteraction) 