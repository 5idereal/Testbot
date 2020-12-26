module.exports = {
	name: 'choose',
	description: 'choose',
	execute(message, args) {
		return message.channel.send(args[Math.floor((Math.random() * args.length) + 1)]);
	},
};