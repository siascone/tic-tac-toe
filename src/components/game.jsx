import React from 'react';

import Board from './board'
import * as TicTacToe from '../ticTacToe';

class Game extends React.Component {
    constructor(props) {
        super(props)
        const board = new TicTacToe.Board(3);

        this.state = { board: board }

    }

    render() {
        return (
            <div className='game'>
                <Board board={this.state.board} />
            </div>
        )
    }
}

export default Game;