import { SlashCommandBuilder, AttachmentBuilder } from 'discord.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const data = new SlashCommandBuilder()
    .setName('3d6')
    .setDescription('Lanza tres dados!');

export async function execute3(interaction) {
    let roll1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let roll2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let roll3 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    const diceImage1 = path.join(__dirname, `../images/${roll1}-d6.png`);
    const diceImage2 = path.join(__dirname, `../images/${roll2}-d6.png`);
    const diceImage3 = path.join(__dirname, `../images/${roll3}-d6.png`);

    const attachment1 = new AttachmentBuilder(diceImage1, { name: 'dice1.png' });
    const attachment2 = new AttachmentBuilder(diceImage2, { name: 'dice2.png' });
    const attachment3 = new AttachmentBuilder(diceImage3, { name: 'dice3.png' });

    await interaction.reply({files: [attachment1, attachment2, attachment3]})
}