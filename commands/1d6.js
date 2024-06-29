import { SlashCommandBuilder, AttachmentBuilder } from 'discord.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

    const diceImage1 = path.join(__dirname, `../images/${roll}-d6.png`);

    const attachment1 = new AttachmentBuilder(diceImage1, { name: 'dice1.png' });
    

    await interaction.reply({files: [attachment1]});
}
