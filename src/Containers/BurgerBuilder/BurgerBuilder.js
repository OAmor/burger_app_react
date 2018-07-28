import React , {Component} from 'react';

import Aux from "../../hoc/Aux";
import Burger from '../../Components/Burger/Burger';
import BuildControlls from '../../Components/BuilderControlls/BuilderControlls';
import Modal from '../../UI/Modal/Modal';
import Summary from '../../Components/Summary/Summary';

const PRICES = {
    Cheese: 0.5,
    Meat: 1.4,
    Salad: 0.3
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            Cheese: 0,
            Meat: 0,
            Salad: 0
        },
        price :4,
        purchase: 'none'
    }

    AddIngredient = (type) => {
        let updatedIng = this.state.ingredients;
        updatedIng[type] = updatedIng[type]+1;

        this.setState({
            ingredients: updatedIng,
            price: this.state.price+PRICES[type]
        });
    };

    RemoveIngredient = (type) => {
        let updatedIng = this.state.ingredients;
        if(updatedIng[type] <= 0){
            return;
        }
        updatedIng[type] = updatedIng[type]-1;

        this.setState({
            ingredients: updatedIng,
            price: this.state.price-PRICES[type]
        });
    };

    displayPurchase = () => {
        if(this.state.purchase === 'none'){
            this.setState({purchase: 'block'})
        }else{
            this.setState({purchase: 'none'})
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal display={this.state.purchase}>
                    <Summary ingredients={this.state.ingredients}/>
                </Modal>
                <BuildControlls
                    price={this.state.price}
                    order={this.displayPurchase}
                    remove={this.RemoveIngredient}
                    add={this.AddIngredient} />
            </Aux>
        )
    }
}

export default BurgerBuilder;