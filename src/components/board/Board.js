import React, {Component} from 'react';
import {Pacman, Ghost, Food} from '../';
import './style.css';

class Board extends Component {
    render() {
        return (
            <div className="board">
                {/* FOOD */}
                <Food />
                {/* PACMAN */}
                <Pacman />
                {/* GHOSTS */}
                <Ghost color={'blue'} />
                <Ghost color={'pink'} />
                <Ghost color={'red'} />
                <Ghost color={'yellow'} />
            </div>
        )
    }
}

export default Board;
