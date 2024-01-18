import { SlashCommandBuilder, type CommandInteraction, GuildMember } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('user')
  .setDescription('Provides information about the user.');

export async function execute(interaction: CommandInteraction): Promise<void> {
  if (interaction.member instanceof GuildMember && (interaction.member.joinedAt != null)) {
    const joinedAt = interaction.member.joinedAt.toDateString();
    await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${joinedAt}.`);
  } else {
    await interaction.reply(`This command was run by ${interaction.user.username}.`);
  }
}
