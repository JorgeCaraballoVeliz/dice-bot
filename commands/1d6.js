import { SlashCommandBuilder } from 'discord.js';
//explore the button bulder from discord.js
//get argument for number of dice

// Command Builder export
export const data = new SlashCommandBuilder()
    .setName('1d6')
    .setDescription('Lanza un dado!');

// Execute function export
export async function execute(interaction) {
    let roll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    //console.log(roll);
    await interaction.reply(roll.toString());
}

///////////////2d6//////////////