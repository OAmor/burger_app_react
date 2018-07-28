import React from 'react';

const summary = (props) => {
    const ordred = Object.keys(props.ingredients).map(key => {
       return <li key={key}><strong>{key} :</strong> {props.ingredients[key]}</li>
    });

    return(
        <div>
            <h3>Purchase Summary</h3>
            <ul>
                {ordred}
            </ul>
        </div>
    )
};

export default summary;