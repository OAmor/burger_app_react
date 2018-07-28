import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    let empty = true;

    let ingredients = Object.keys(props.ingredients).map(
        (key) => {
            const a = [];
           // console.log(props.ingredients[key]);
            const i = props.ingredients[key];
            if( i !== 0){
                empty = false;
            }

            for (let j=0; j< i ; j++){
                a.push(<BurgerIngredient key={key+j} type={key}/>)
            }
            return a;
        }
    );

    if(empty){
        ingredients = <p>Pleae inter some ingredients first !</p>
    }

    return (
        <div className={classes.burger}>
            <BurgerIngredient type='Bread-top'/>
            {ingredients}
            <BurgerIngredient type='Bread-bottom'/>
        </div>
    )
};

export default burger;