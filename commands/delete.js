
module.exports = {
    name: 'delete',
    description: 'return a random number from 1 to 6.',
    async execute(message, args) {
        message.delete({
            timeout: 1,
            reason: ''
        })
        let fetched;
        do {
            fetched = await channel.messages.fetch({ limit: args[1] });
            message.channel.bulkDelete(fetched);
        }
        while (fetched.size >= 2);
    },
};