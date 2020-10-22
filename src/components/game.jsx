import React from 'react';

import Board from './board'
import * as TicTacToe from '../ticTacToe';

class Game extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Board />
        )
    }
}

export default Game;