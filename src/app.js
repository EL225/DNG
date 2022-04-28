/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  function randnum() {
    let num = Math.floor(Math.random() * 2);
    return num;
  }
  function generador() {
    let domain = pronoun[randnum()] + adj[randnum()] + noun[randnum()] + ".com";
    return domain;
  }

  for (var i = 0; i < 9; i++) {
    console.log(generador());
  }
};
