const TelegramApi = require('node-telegram-bot-api')

const token = '6326629226:AAHu49Qx_khS2yIEoHxkdz2kNKiEfG-0Cbg'

const bot = new TelegramApi(token, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
})

bot.on('message', async msg => {
  const text = msg.text
  const chatId = msg.chat.id

  switch (text) {
    case '/start': {
      await bot.sendMessage(chatId, 'Выберите язык', {
        reply_markup: {
          keyboard: [
            ['Русский язык', 'Узбекский язык'],
          ],
        },
      })
    }
      break
    case 'Русский язык': {
      await bot.sendMessage(chatId, 'Здесь вы можете задать нам вопрос, либо сообщить нам об ошибке', {
        reply_markup: {
          keyboard: [
            ['Вопрос', 'Ошибка'],
          ],
        },
      })
    }
      break
    default:
  }
})
