import React from 'react';

import classes from './Modal.css';

const modal = (props) => {
    return(
        <div style={{display:props.display}} className={classes.Modal}>
            {props.children}
        </div>
    )
};

export default modal;