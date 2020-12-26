function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
module.exports = {
    name: 'shuffle',
    description: 'print out current queue.',
    execute(message, args) {
        message.delete({
            timeout: 1,
            reason: ''
        })
        const serverQueue = message.client.queue.get(message.guild.id);
        shuffle(serverQueue.songs);
    },
};