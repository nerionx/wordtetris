var settings = new Settings();
var ui = new UI();
var manager = new GameManager();
var tiles = [];
var dict

function preload(){
    dict = new Dictionary(loadStrings("./data/engmix.txt"));    

}
function setup(){
    createCanvas(settings.screenwidth,settings.screenheight);
    dict.stripWords(settings.minwordlen,settings.maxwordlen);
}

function draw(){
    manager.update();
    background(0);
    ui.draw();
    manager.draw();
}

function keyPressed(){
    manager.keyPressed(keyCode);
    return
}

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }

