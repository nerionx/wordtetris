class Tile{
    constructor(x,y,letter){
        this.x = 3;
        this.y = 0;
        /**@type {string} */
        this.letter = this.randomLetter();
        this.active = true; //Is this the tile the player us currently controlling
    }

    randomLetter(){
        var availableletters = "AAAABCCDDDEEEEFGHHHIIIJKLLMMNNNOOOOPQRRRSSSSTTTTUUVWWWXYYYZ"; //Multiples are based on how common they are in english words
        var randomNumber = floor(random(availableletters.length));
        return availableletters.charAt(randomNumber);
    }

    draw(){
        rect(settings.offsetx + (this.x*settings.tilewidth),settings.offsety + (this.y*settings.tileheight),settings.tilewidth,settings.tileheight);
        color(0);
        textSize(20);
        text(this.letter,settings.offsetx + 12 + (this.x*settings.tilewidth),settings.offsety + 25+ (this.y * settings.tileheight));
    }

    update(){
        this.y++
    }
    /**
     * 
     * @param {number} x The number of spaces you want the tile to move up (negative) or down (positive)
     * @param {number} y The number of spaces you want the tile to move left (negitive) or right (positive)
     * The tile will not move beyond the screen
     */
    moveTile(x,y){
        console.log("Moving tile");
        if(this.x + x < settings.gamewidth && this.x + x > -1 && this.y + y < settings.gameheight && this.y + y > -1){
            this.x = this.x + x;
            this.y = this.y + y;
        }
    }

}