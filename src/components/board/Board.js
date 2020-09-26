import React, {Component} from 'react';
import {Pacman, Ghost, Food} from '../';
import './style.css';

/* TODO: add observer pattern for viewport to calculate proper food for modified viewport */
class Board extends Component {
    constructor(props) {
        super(props);

        this.pacmanRef = React.createRef();

        this.food = [];
        // calculate the amount of food
        this.amountOfFood = (
            (window.innerWidth - this.props.foodSize) 
            * (window.innerHeight - this.props.topScoreBoardHeight) / (this.props.foodSize * this.props.foodSize) - 1
        )

        for (let i = 0; i < this.amountOfFood; i++) {
            this['food' + i] = React.createRef();
        }
    }

    componentDidMount() {
        this.intervalFood = setInterval(this.eat, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalFood);
    }

    eat = () => {
        const pacmanPos = this.pacmanRef.current.state.position;
        const pacmanX = pacmanPos.left;
        const pacmanY = pacmanPos.top;
        const pacmanSize = this.pacmanRef.current.props.size;

        const pacmanLastX = pacmanX + pacmanSize / 2;
        const pacmanLastY = pacmanY + pacmanSize / 2;

        for(let i = 0; i <= this.amountOfFood; i++) {
            const currentFood = this['food' + i].current;
            if (currentFood) {
                const currentFoodX = currentFood.state.position.left;
                const currentFoodY = currentFood.state.position.top;
                const currentFoodSize = currentFood.props.foodSize;
                const currentFoodLastX = currentFoodX + currentFoodSize / 2;
                const currentFoodLastY = currentFoodY + currentFoodSize / 2;

                // due to the delay we also consider last coordinates
                if (
                    (pacmanX >= currentFoodX && pacmanX <= currentFoodLastX) 
                    || (pacmanLastX >= currentFoodX && pacmanLastX <= currentFoodLastX)
                ) {
                    if (
                        (pacmanY >= currentFoodY && pacmanY <= currentFoodLastY)
                        || (pacmanLastY >= currentFoodY && pacmanLastY <= currentFoodLastY)
                    ) {
                        currentFood.ate(); // !hidden
                        this.props.setScore((value) => value + 1); // increase score
                    }
                }
            }
        }
    }

    render() {
        const {foodSize, border, topScoreBoardHeight} = this.props;

        let foods = [];
        let currentTop = 0;
        let currentLeft = 1 * foodSize;

        for (let i = 0; i < this.amountOfFood; i++) {
            // do we have to go to another line as to avoid going out of the board?
            if (currentLeft + foodSize >= window.innerWidth - this.props.border) {
                currentTop += foodSize;
                currentLeft = 0;
            }
            // do we have to end rendering food (bottom right corner)?
            if (currentTop + foodSize >= (window.innerHeight - border - topScoreBoardHeight)) {
                break;
            }

            const position = {left: currentLeft, top: currentTop};
            currentLeft += foodSize;
            foods.push(
                <Food
                    key={`food-elem-${i}`}
                    position={position}
                    ref={this['food' + i]}
                />
            )
        }

        return (
            <div className="board">
                {/* FOOD */}
                {foods}
                {/* PACMAN */}
                <Pacman ref={this.pacmanRef} />
                {/* GHOSTS */}
                <Ghost color={'blue'} />
                <Ghost color={'pink'} />
                <Ghost color={'red'} />
                <Ghost color={'yellow'} />
            </div>
        )
    }
}

// TODO: refactor and move to config
Board.defaultProps = {
    foodSize: 50,
    border: 10 * 2,
    topScoreBoardHeight: 50
}

export default Board;
