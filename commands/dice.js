module.exports = {
	name: 'dice',
	description: 'return a random number from 1 to 6.',
	execute(message, args) {
		message.delete({
			timeout: 1,
			reason: ''
		})
		if (args==""){
			args = 6
		}
		return message.channel.send(Math.floor((Math.random() * args) + 1));
	},
};