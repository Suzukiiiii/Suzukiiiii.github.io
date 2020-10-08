class Tile{
    
    constructor(tileDiv){
        this.tileDiv = tileDiv;
        this.value = '';
    };
};

// A board is a 2D array of 3x3 tiles.
class Board{
    constructor(tiles){
        this.tiles = tiles;
    }

    // Return the value of the tiles that are lined up 3 in a row
    findWinner = () =>{

    };
};

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
    }
    
}