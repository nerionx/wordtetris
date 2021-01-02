class tile{
    constructor(x,y,letter){
        this.x = x;
        this.y = y;
        /**@type {string} */
        this.letter = letter;
    }

    randomLetter(){
        var randomNumber = floor(random(25));
        var availableletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.letter = availableletters.charAt(randomNumber);
    }
}