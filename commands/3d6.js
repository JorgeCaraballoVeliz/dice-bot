import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('3d6')
    .setDescription('Lanza tres dados!');

export async function execute3(interaction) {
    let roll1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let roll2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let roll3 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    await interaction.reply(roll1.toString()+', '+roll2.toString()+', '+roll3.toString());
}