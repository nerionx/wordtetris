var settings = new Settings(); //Class containing all our baked in settings
var ui = new UI(); //Class contains functions for manipulating and drawing the UI (and gameboard)
var manager = new GameManager(); //Class contains game logic
var dict //For future use, will hold our dictionary, we cant initialise it here as we dont have loadStrings from P5js yet


//This is done during the preload, the loading splash screen will be shown on the page
function preload(){
    dict = new Dictionary(loadStrings("./data/engmix.txt"));    

}
/**After preload this is done, we create our canvas and strip our dictionary. We strip the dictionary as we know the file loading will be completed by the time we get here. 
 */
function setup(){
    createCanvas(settings.screenwidth,settings.screenheight); //Create a canvas for our game to live on. P5JS's functions will draw to this even though we didnt create a reference ourselves.
    dict.stripWords(settings.minwordlen,settings.maxwordlen); //Remove words which done meet our word length rules
}

/**This is the draw loop, P5JS will call this as many times as it can a second (unless we set a fps limit). We will also have to put our update code here so our main game is limited to fps.. eww
*However its a puzzler so it wont matter. 
*/
function draw(){
    manager.update(); //Update game logic
    manager.draw(); //
}
/**
 * Called when a key is pressed P5.js sets up the listners for this so you wont find them here.
 */
function keyPressed(){
    manager.keyPressed(keyCode);
    return
}

/**
 * Recusive function which will reverse a string for us. 
 * @param {*} str - String we want to reverse
 * @returns reversed str
 */
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }


/**
 * Creates a 2d array, the cols isnt set as it is not required
 * @param {*} rows - Number of rows in the array
 * @return {array} - Empty array
 */
function Create2DArray(rows) {
    var arr = [];
 
    for (var i=0;i<rows;i++) {
        arr[i] = [];
    }
    return arr;
}