var predefFormat = {
	"language": "spanish",
	"restaurant": "tickets-bar",
	"hour": "19:30",
	"date": "2019-03-22",
	"people": "5"
}

var possibleHours = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];
var ticketsUrl = "https://www.covermanager.com/reserve/comprove_selling/";

var express = require('express');
var app = express();

const request = require('request');

function tryReserveTickets() {
  request(ticketsUrl, { json: predefFormat }, (err, res, body) => {
    if (err) { return console.log(err); }
      console.log(body);
  });

}

setTimeout(tryReserveTickets, 10);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
