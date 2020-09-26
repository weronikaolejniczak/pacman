import React, {Component} from 'react';
import {ReactComponent as Icon} from './ghost.svg'
import './style.css';

class Ghost extends Component {
    state = {
        position: {
            top: 50,
            left: 50,
        }
    }

    render() {
        const {position} = this.state;

        return(
            <div 
                className="ghost"
                style={position}
            >
                <Icon />
            </div>
        );
    }
}

Ghost.defaultProps = {
    color: 'red',
    step: 50, // 50px
    size: 50, // ghost size: 50x50px
    // TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50,
}

export default Ghost;
