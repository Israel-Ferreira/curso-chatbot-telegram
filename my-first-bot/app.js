const Telegraf = require('telegraf').Telegraf
const env = require('dotenv')

env.config()

const token = process.env.BOT_TOKEN

const bot = new Telegraf(token)

bot.start(ctx => {
    const fromName = ctx.update.message.from
    console.log(fromName)

    ctx.reply(`Seja bem vindo, ${fromName.first_name}`)
})


bot.on('text', async (ctx, next) => {
    await ctx.reply("Mid1")
    next()
})

bot.on('text', async (ctx) => {
    await ctx.reply("Mid2")
})

bot.on('sticker', async (ctx) => {
    await ctx.reply("Sticker Received")
})

bot.startPolling()