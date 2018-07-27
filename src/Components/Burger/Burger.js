import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = () => {
    return (
        <div className={classes.burger}>
            <BurgerIngredient type={'Bread-top'}/>
            <BurgerIngredient type={'Meat'}/>
            <BurgerIngredient type={'Cheese'}/>
            <BurgerIngredient type={'Bread-bottom'}/>
        </div>
    )
};

export default burger;