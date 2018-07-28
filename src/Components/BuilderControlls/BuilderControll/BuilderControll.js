import React from 'react';

import classes from './BuilderControll.css';

const builderControll = (props) => {
    return (
      <div className={classes.BuildControl}>
          <div className={classes.Label}>{props.label}</div>
          <button onClick={props.remove} className={classes.Less}>Less</button>
          <button onClick={props.add} className={classes.More}>More</button>
      </div>
    );
};

export default builderControll;