import React , {Component} from 'react';

import Aux from "../../hoc/Aux";
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            Cheese: 0,
            Meat: 0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder Controller</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;