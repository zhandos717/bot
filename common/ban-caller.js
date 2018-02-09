const { Extra } = require('micro-bot')

module.exports = async (ctx) => {
  const now = Math.floor(new Date().getTime() / 1000)
  ctx.restrictChatMember(ctx.from.id, { until_date: now + 60 * 5 })
  return ctx.reply('Не вопрос!', Extra.inReplyTo(ctx.message.message_id))
}