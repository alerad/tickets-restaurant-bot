var predefFormat = {
	"language": "spanish",
	"restaurant": "tickets-bar",
	"hour": "20:00",
	"date": "2019-04-22",
	"people": "4"
}

// var predefFormat = {
// 	"language": "spanish",
// 	"restaurant": "hoja-santa",
// 	"hour": "21:45",
// 	"date": "2019-08-20",
// 	"people": "2"
// }

var possibleHours = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];
var ticketsUrl = "https://www.covermanager.com/reserve/comprove_selling/";
const messageUrl = "https://www.covermanager.com/reserve/comprove_message/";

const TelegramBot = require('node-telegram-bot-api');
const token = '795982724:AAHj3AoK0oAOKvWjnmt9VzCnibmceD3FUzg';

const bot = new TelegramBot(token, {polling: true});

var express = require('express');
var app = express();

const request = require('request');

function tryReserveTickets() {
  request(ticketsUrl, { json: predefFormat }, (err, res, body) => {
    if (err) { return console.log(err); }

		if (body.zones_select || body.resp != 0)
			sendAlertaRojaOwO()

		if (body.error = 'Hour not avaible') {
			console.log(body);
		} else {
			sendAlertaRojaOwO()
		}
  });

	request(messageUrl, { json: predefFormat }, (err, res, body) => {
		console.log(body)
	});

}

function sendAlertaRojaOwO() {
	console.log('RED ALERT')
	// bot.sendMessage(125779633, 'DALE MONO QUE SE HABILITARON LAS RESERVAS!!! ');
	// bot.sendMessage(125779633, 'DALE MONO QUE SE HABILITARON LAS RESERVAS!!! ');
}

tryReserveTickets()
setInterval(tryReserveTickets, 10000);

bot.on('message', (msg) => {
	 const chatId = msg.chat.id;
	 console.log(chatId)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
