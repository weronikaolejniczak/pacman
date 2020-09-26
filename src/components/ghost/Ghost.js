import React, {Component} from 'react';
import {ReactComponent as Icon} from './ghost.svg'
import './style.css';

class Ghost extends Component {
    state = {
        color: this.props,
        direction: 'left',
        position: {
            top: 50 * 4,
            left: 50 * 3,
        }
    }

    componentDidMount() {
        this.changeDirectionInterval = setInterval(this.changeDirection, 2000);
    }

    componentWillUnmount() {
        // clean up interval
        clearInterval(this.changeDirectionInterval);
    }

    changeDirection = () => {
        const arrayOfMovement = ['left', 'up', 'down', 'right'];
        const movement = Math.floor(Math.random() * 4);

        this.setState({
            direction: arrayOfMovement[movement]
        }, () => {
            console.log('direction: ', this.state.direction)
        })
    }

    move = () => {
        
    }

    render() {
        const {position} = this.state;
        const {color} = this.props;

        return(
            <div 
                className="ghost"
                style={position}
            >
                <Icon className={`ghost-${color}`} />
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
