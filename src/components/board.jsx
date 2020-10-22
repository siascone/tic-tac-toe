import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.renderRows = this.renderRows.bind(this)
        this.renderMarks = this.renderMarks.bind(this)
    }

    render() {
        return (
            <div className='board'>
                {this.renderRows()}
            </div>
        )
    }
    
    renderRows() {
        const board = this.props.board;
        return board.grid.map((row, idx) => {
            return (
                <div className='board-row'>
                    {this.renderMarks(row, idx)}
                </div>
            )
        })
    }

    renderMarks(row, idx) {
        const board = this.props.board;
        return row.map((mark, jdx) => {
            return (
                <div className='mark'>
                    {board.grid[idx][jdx]}
                </div>
            )
        })
    }

}

export default Board;