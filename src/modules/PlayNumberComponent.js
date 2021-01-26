import React from 'react';

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

function PlayNumberComponent(props) {
    return (
        <button
                className="number"
                style={{backgroundColor: colors[props.status]}}
                onClick={() => props.onClick(props.number, props.status)}
        >
            {props.number}
        </button>
    );
}

export default PlayNumberComponent;