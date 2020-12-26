module.exports = {
    name: 'list',
    description: 'print out current queue.',
    execute(message, args) {
        message.delete({
            timeout: 1,
            reason: ''
        })
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "你不在語音頻道裡面!"
            );
        if (!serverQueue)
            return message.channel.send("已經沒有歌了！");
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    },
};