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

    isValidPosition(pos) {
        return (
            (pos[0] >= 0 && pos[0] < this.gridSize) &&
            (pos[1] >= 0 && pos[1] < this.gridSize)
        )
    }

    isPositionEmpty(pos) {
        let x = pos[0];
        let y = pos[1];

        if (this.grid[x][y] === "_") return true

        return false
    }

    placeMark(pos, mark) {
        let x = pos[0];
        let y = pos[1];
        if (this.isValidPosition(pos) && this.isPositionEmpty(pos)) {
            this.grid[x][y] = mark;
            return true
        } else {
            return "Invalid move."
        }
    }

    winRow(mark) {
        
    }

}
