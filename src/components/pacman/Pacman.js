import React, {Component} from 'react';
import {ReactComponent as Icon} from './pacman.svg';
import './style.css';

class Pacman extends Component {
    state = {
        direction: 'right', // 'right', 'left', 'up', 'down'; można zrobić słownik mapując stringi do wartości numerycznych
        position: {
            top: 0,
            left: 0,
        }
    }

    render() {
        return (
            <div 
                className="pacman"
                style={this.state.position}
            >
                <Icon />
            </div>
        );
    }
}

/* można zapisać w static w ciele klasy */
Pacman.defaultProps = {
    step: 50, // 50px
    size: 50, // pacman size: 50x50px
    // TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50,
}

export default Pacman;
