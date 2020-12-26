module.exports = {
    name: 'resume',
    aliases:['continue'],
    description: 'continue playing the current song.',
    execute(message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "你必須在語音頻道裡面才能繼續播放音樂。"
            );
        serverQueue.connection.dispatcher.resume();
    },
};