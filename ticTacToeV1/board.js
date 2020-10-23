class Board {
    constructor(gridSize) {
        this.gridSize = gridSize
        this.grid = []

        this.makeGrid()
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
        for (let row of this.grid) {
            let count = 0
            for (let square of row) {
                if (square === mark) count += 1
            }
            if (count === this.gridSize) return true
        }

        return false
    }

    winCol(mark) {
        let cols = []

        for (let i = 0; i < this.grid.length; i++) {
            cols.push([])
        }

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid.length; j++) {
                cols[j].push(this.grid[i][j])
            }
        }
        
        for (let row of cols) {
            let count = 0
            for (let square of row) {
                if (square === mark) count += 1
            }
            if (count === this.gridSize) return true
        }

        return false
    }

    winDiag(mark) {
        let diagTopDown = []
        let diagBottomUp = []
        for (let i = 0; i < this.grid.length; i++) {
            diagTopDown.push(this.grid[i][i])
        }
        let tick = 0
        for (let i = this.grid.length - 1; i >= 0; i--) {
            diagBottomUp.push(this.grid[i][tick])
            tick += 1
        }

        let topDownCount = 0
        let bottomUpCount = 0

        diagTopDown.forEach(ele => {
            if (ele === mark) {
                topDownCount ++
            }
        });

        diagBottomUp.forEach(ele => {
            if (ele === mark) {
                bottomUpCount ++
            }
        });

        return topDownCount === this.gridSize ||
               bottomUpCount === this.gridSize

    }

    win(mark) {
        return this.winRow(mark) || this.winCol(mark) || this.winDiag(mark)
    }

    emptyPositions() {
        for (let row of this.grid) {
            for (let pos of row) {
                if (pos === "_") return true
            }
        }
        return false
    }
    
    printBoard() {
        for (let i = 0; i < this.grid.length; i++) {
            console.log(this.grid[i])
        }
    }
}

let board = new Board(3)
board.placeMark([2,0], "X")
board.placeMark([2,1], "X")
board.placeMark([2,2], "X")
board.placeMark([1,0], "X")
board.placeMark([1,1], "X")
board.placeMark([1,2], "X")
board.placeMark([0,0], "X")
board.placeMark([0,1], "X")
board.placeMark([0,2], "X")
board.printBoard()
console.log(board.emptyPositions())