import React from 'react';

const utils = {
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),
  };


function StarsDisplayComponent(props) {
    return (
        <>
            {utils.range(1, props.count).map(starId => (
                    <div key={starId} className="star" />
                ))
            }
        </>
    );
}


export default StarsDisplayComponent;