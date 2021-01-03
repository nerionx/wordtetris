class GameManager{
    constructor(){
        /**@type {Tile} */
        this.tiles = [];
        /**@type {number}*/
        this.score = 0;
        /**@type {number}*/
        this.timer =0;
        this.activetile = false;
        
        
        
    }

    update(){
        for(var i=0; i<this.tiles.length;i++){
            this.tiles[i].moved = false;
        }
        if(this.ticked()){
            if(this.activetile==false){
                this.createWords();
                this.generateTile();
            }else{
                this.activetile = false;
                for(var j=0; j<this.tiles.length;j++){
                    if(this.canMoveDown(this.tiles[j],j)){
                        this.tiles[j].update();
                    }
                }
                
            }
        }
    }

    draw(){
        for(var i = 0; i < this.tiles.length; i++){
            this.tiles[i].draw();
        }
    }

    canMoveDown(tile, index){
        if(this.tiles.length==1 && tile.y + 1 < settings.gameheight){ //If the tile is the only one on the board and it is not at the bottom of the play area
            this.activetile = true;
            return true;
        }
        //Loop through the tiles and find check if any are in the path of the current tile
        for(var i = 0; i < this.tiles.length;i++){
            if(tile.x == this.tiles[i].x && tile.y+1 == this.tiles[i].y){
                tile.active=false; //We should no longer be able to move the tile
                return false;
            }else{
                if(tile.y + 1< settings.gameheight && index){

                }else{
                    tile.active=false; //We should no longer be able to move this tile
                    return false;
                }
            }
        }
        this.activetile = true;
        return true;
    }

    generateTile(){
        console.log("New tile created");
        this.tiles.push(new Tile());
        this.activetile = true;
    }

    updateTiles(){

    }

    ticked(){
        if(millis()-this.timer > settings.ticklength){
            this.timer = millis();
            return true;
        }
        return false;
    }

    keyPressed(key){
        switch(key){
            case LEFT_ARROW:
                for(var i=0;i<this.tiles.length;i++){
                    if(this.tiles[i].active == true){
                        console.log("Moving left");
                        this.tiles[i].moveTile(-1,0);
                    }
                }
                break;
            case RIGHT_ARROW:
                for(var i=0;i<this.tiles.length;i++){
                    if(this.tiles[i].active == true){
                        this.tiles[i].moveTile(1,0);
                    }
                }
                break;
            case DOWN_ARROW:
                for(var i=0;i<this.tiles.length;i++){
                    if(this.tiles[i].active == true){
                        this.tiles[i].moveTile(0,1);
                    }
                }
                break;
            default:
                //invalid key key pressed
        }
    }
    /**
     * Creates words out of the tiles and searches the dictionary for them
     */
    createWords(){ 
        var tileshorizontal = [];
        var tilesvertical = [];

        for(var j=0; j<settings.gameheight;j++){
            tileshorizontal.push("1");
            for(var i=0;i<settings.gamewidth;i++){
                var containstile = "1";
                for(var k = 0; k < this.tiles.length;k++){
                    if(this.tiles[k].x == i && this.tiles[k].y == j){
                        containstile = this.tiles[k].letter;
                    }
                }
                tileshorizontal[j] = tileshorizontal[j] + containstile
            
            }
        }
        console.log("Searching for words");
        for(i = 0; i<tileshorizontal.length;i++){
            dict.search(tileshorizontal[i],settings.minwordlen,settings.maxwordlen);
        }

    }
        
}