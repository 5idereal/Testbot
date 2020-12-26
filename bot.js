const Discord = require("discord.js");
const prefix = "/";
const token = "your own token here";
const ytdl = require("ytdl-core");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const queue = new Map();
client.once("ready", () => {
  console.log("就緒");
});
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) ||
		client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) message.channel.send("沒有這個指令。");
	try {
		command.execute(message, args, games);
	} catch (error) {
		console.error(error);
	}
});
client.login(token);