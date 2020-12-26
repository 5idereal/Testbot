const ytdl = require('ytdl-core')

module.exports = {
    name: 'play',
    aliases: ['p'],
    description: 'Youtube only.',
    async execute(message, args) {
        try {
            const args = message.content.split(" ");
            const queue = message.client.queue;
            const serverQueue = message.client.queue.get(message.guild.id);

            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel)
                return message.channel.send(
                    "你不在語音頻道裡面。"
                );
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send(
                    "I need the permissions to join and speak in your voice channel!"
                );
            }

            const songInfo = await ytdl.getInfo(args[1]);
            const song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };

            if (!serverQueue) {
                const queueContruct = {
                    textChannel: message.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                };

                queue.set(message.guild.id, queueContruct);

                queueContruct.songs.push(song);

                try {
                    var connection = await voiceChannel.join();
                    queueContruct.connection = connection;
                    this.play(message, queueContruct.songs[0]);
                } catch (err) {
                    console.log(err);
                    queue.delete(message.guild.id);
                    return message.channel.send(err);
                }
            } else {
                serverQueue.songs.push(song);
                return message.channel.send(
                    `${song.title}已加入播放清單。`
                );
            }
        } catch (error) {
            console.log(error);
            message.channel.send(error.message);
        }
    },

    async play(message, song) {
        const queue = message.client.queue;
        const guild = message.guild;
        const serverQueue = queue.get(message.guild.id);

        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on("finish", () => {
                serverQueue.songs.shift();
                play(message, serverQueue.songs[0]);
            })
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    },
};