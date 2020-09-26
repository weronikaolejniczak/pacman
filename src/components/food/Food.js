import React, {Component} from 'react';
import './style.css';

class Food extends Component {
    state = {
        position: {
            top: this.props.position.top,
            left: this.props.position.left
        },
        hidden: false
    }

    render() {
        const {position, hidden} = this.state;

        return(
            <div 
                className={hidden ? "food hidden" : "food"}
                style={position}
            >
                <div className="food-dot" />
            </div>
        );
    }
}

Food.defaultProps = {
    foodSize: 50,
    position: {
        top: 0, 
        left: 0
    }
}

export default Food;
