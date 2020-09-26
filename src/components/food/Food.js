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
        return(
            <div className="food">

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
