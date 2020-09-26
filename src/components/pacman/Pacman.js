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

    constructor(props) {
        super(props);
        // we create a ref to pacman div
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        // we focus on our referenced element after component mounts
        this.pacmanRef.current.focus();
    }

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    }

    render() {
        return (
            <div 
                ref={this.pacmanRef} // we assign reference
                className="pacman"
                tabIndex="0" // focus na elemencie
                onKeyDown={this.handleKeyDown} // when focused starts handling key down (pressed) events
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
