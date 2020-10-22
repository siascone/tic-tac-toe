export class Game {

}

export class Board {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.grid = []

        this.makeGrid();
    }

    makeGrid() {
        for (let i = 0; i < this.gridSize; i++) {
            this.grid.push([])
            for (let j = 0; j < this.gridSize; j++) {
                let mark = '_'
                this.grid[i].push(mark)
            }
        }
    }
}

export class Player {

}