const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: '***HELP***',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('指令列表:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\`${prefix}help [指令名稱]\`了解關於單一指令的更多資訊`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('我把指令列表私訊給你了。');
				})
				.catch(error => {
					message.reply('你是不是她媽封鎖我');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('沒有這個指令...');
		}

		data.push(`**名稱:** ${command.name}`);

		if (command.aliases) data.push(`**別名:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**說明:** ${command.description}`);
		if (command.usage) data.push(`**使用:** ${prefix}${command.name} ${command.usage}`);

		message.channel.send(data, { split: true });
	},
};