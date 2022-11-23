import React from 'react';

function Fruit({ emoji, fruitName, type, decrement,isDisabled, fruitValue, increment}) {
    return (
        <div className="fruit">
            <p>{emoji}</p>
            <h3>{fruitName}</h3>
            <button
                type={type}
                onClick={decrement}
                disabled={isDisabled}
            >-
            </button>
            {fruitValue}
            <button
                type={type}
                onClick={increment}
            >+
            </button>
        </div>
    );
}

export default Fruit;