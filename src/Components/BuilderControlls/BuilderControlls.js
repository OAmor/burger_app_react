import React from 'react';

import classes from './BuilderControlls.css';
import BuilderControll from './BuilderControll/BuilderControll';

const ctrls = ['Meat','Cheese','Salad'];

const builderControlls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p><strong>{props.price}</strong></p>
            {ctrls.map(ctrl => {
                    return <BuilderControll
                        key={ctrl}
                        remove={props.remove.bind(this,ctrl)}
                        add={props.add.bind(this,ctrl)}
                        label={ctrl}/>
                })
            }
            <button onClick={props.order} className={classes.OrderButton}>Order</button>
        </div>
    );
};

export default builderControlls;