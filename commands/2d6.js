import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('2d6')
    .setDescription('Lanza dos dados!');

export async function execute2(interaction) {
    let roll1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let roll2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    await interaction.reply(roll1.toString()+', '+roll2.toString());
}