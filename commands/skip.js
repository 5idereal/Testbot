module.exports = {
    name: 'skip',
    aliases: ['s'],
    description: 'skip current song.',
    execute(message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "你必須在語音頻道裡面才能跳過音樂。"
            );
        if (!serverQueue)
            return message.channel.send("已經沒有歌了！");
        serverQueue.connection.dispatcher.end();
    },
};