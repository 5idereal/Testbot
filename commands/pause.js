module.exports = {
    name: 'pause',
    aliases:['fkoff'],
    description: 'pause the current playing song.',
    execute(message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "你必須在語音頻道裡面才能暫停音樂。"
            );
        //serverQueue.songs = [];
        message.channel.send("⏸ 已暫停。");
        serverQueue.connection.dispatcher.pause();

    },
};