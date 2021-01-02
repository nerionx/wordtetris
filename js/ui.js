class UI{
    constructor(){
        
    }

    draw(){
        this.drawBackground();
    }
    /**
     * Draws a background grid based on the board size in settings.js
     */
    drawBackground(){
        color(255);
        stroke(255);
        strokeWeight(2);
        for(var i = 0;i<settings.gamewidth+1;i++){ //+1 so that we get the final line surrounding the board
            line(settings.offsetx+(i*settings.tilewidth),settings.offsety,settings.offsetx+(i*settings.tilewidth),settings.offsety+(settings.tileheight*settings.gameheight));
            for(var j = 0;j<settings.gameheight+1;j++){
                line(settings.offsetx,settings.offsety + (j*settings.tilewidth),settings.offsetx + (settings.tilewidth*settings.gamewidth),settings.offsety + (j*settings.tilewidth));
            }
        }
    }
}