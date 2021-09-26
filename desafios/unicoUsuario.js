const Telegraf = require('telegraf').Telegraf

require('dotenv').config()

const token = process.env.BOT_TOKEN
const meisterId = process.env.USER_ID


const bot = new Telegraf(token)

bot.start((ctx, next) => {
    const {id} = ctx.from
    console.log(ctx.from)

    if(id == meisterId){
        ctx.reply(`Ao seu dispor, meu Championship!!`)
        ctx.reply(`Hello, ${ctx.from.first_name}`)
    }else{
        ctx.reply("Desculpe, só posso falar com o meu mestre!!")
    }
   
})




bot.startPolling()