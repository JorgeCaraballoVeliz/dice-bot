import { AttachmentBuilder, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import path from 'path'; // Import the path module
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const data = new SlashCommandBuilder()
    .setName('2d6')
    .setDescription('Lanza dos dados!');

export async function execute2(interaction) {
    let roll1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let roll2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    //await interaction.reply(roll1.toString()+', '+roll2.toString());

    // Paths images
    const diceImage1 = path.join(__dirname, `../images/${roll1}-d6.png`);
    const diceImage2 = path.join(__dirname, `../images/${roll2}-d6.png`);

    // Create attachment instances
    const attachment1 = new AttachmentBuilder(diceImage1, { name: 'dice1.png' });
    const attachment2 = new AttachmentBuilder(diceImage2, { name: 'dice2.png' });

    await interaction.reply({files: [attachment1, attachment2]});
}

/*
 const embed = new EmbedBuilder()
    .setTitle('Welcome to Dicebot!')
    .setAuthor({name: 'Xeno'})
    .setDescription(`You rolled a ${roll1} and a ${roll2}.`)
    .setImage('attachment://dice1.png')
        .setThumbnail('attachment://dice2.png'); 

    await interaction.reply({embeds: [embed], files: [attachment1, attachment2]});
}
    */