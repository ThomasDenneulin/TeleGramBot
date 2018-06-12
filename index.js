var fs = require('fs');
const TeleBot = require('telebot');


const bot = new TeleBot('618996081:AAGY5hlbwhaE6UHWrrxTSSIu2m9cWpcOvBo');


bot.on('text' , msg => {
    fs.readFile('./config.json','utf8', (err,data) => {
        var config = JSON.parse(data);
        console.log(config);
        if(config.indexOf(msg.from.id) == -1){
            config.push(msg.from.id)
            fs.writeFile('./config.json',JSON.stringify(config),(err)=>{
                if(err) console.log(err)
            })
            return bot.sendMessage(msg.chat.id, `Bonjour ${msg.from.first_name} !`);
            
        }
    })
});
bot.start();