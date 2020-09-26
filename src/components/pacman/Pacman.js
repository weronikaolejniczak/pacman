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
        //console.log(event.keyCode, event.key);
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const {step, border, size, topScoreBoardHeight} = this.props;

        if (event.key === 'ArrowUp') {
            // 38 ArrowUp
            this.setState({
                position: {
                    //top: currentTop - step,
                    top: Math.max(currentTop - step, 0),
                    left: currentLeft
                },
                direction: 'up'
            })
        } else if (event.key === 'ArrowRight') {
            // 39 ArrowRight
            this.setState({
                position: {
                    top: currentTop,
                    //left: currentLeft + step
                    left: Math.min(currentLeft + step, window.innerWidth - border - size)
                },
                direction: 'right'
            })
        } else if (event.key === 'ArrowDown') {
            // 40 ArrowDown
            this.setState({
                position: {
                    //top: currentTop + step,
                    top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreBoardHeight),
                    left: currentLeft
                },
                direction: 'down'
            })
        } else if (event.key === 'ArrowLeft') {
            // 37 ArrowLeft
            this.setState({
                position: {
                    top: currentTop,
                    //left: currentLeft - step
                    left: Math.max(currentLeft - step, 0),
                },
                direction: 'left'
            })
        } 
    }

    render() {
        const {direction, position} = this.state;

        return (
            <div 
                ref={this.pacmanRef} // we assign reference
                className={`pacman pacman-${direction}`}
                tabIndex="0" // focus na elemencie
                onKeyDown={this.handleKeyDown} // when focused starts handling key down (pressed) events
                style={position}
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
