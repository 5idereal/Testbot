let reply = ['你覺得呢','可能吧','嗯','我怎麼知道','你不要知道比較好','你看不出來嗎','你真的想知道?','當然','懷疑啊','你猜啊','問別人','好問題','在這裡不好講','廢話','這還要問嗎','不用懷疑','必須的','別問我','不好說','這問題有點難','我的立場不好回答','痾...']

module.exports = {
	name: '8ball',
	description: 'bad listener.',
	execute(message) {
		return message.channel.send(message.channel.send(reply[Math.floor(Math.random() * reply.length)]));
	},
};