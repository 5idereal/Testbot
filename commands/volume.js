module.exports = {
    name: 'volume',
    aliases: ['v'],
    description: 'adjust the volume.',
    execute(message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        console.log(args[0]);
	serverQueue.connection.dispatcher.setVolume(args[0] / 100);
    },
};