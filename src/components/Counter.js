import React from 'react';

function Counter({fruitName, fruitValue, emoji, isDisabled, increment, decrement}) {
    return (
        <div className="fruit">
            <p>{emoji}</p>
            <h2>{fruitName}</h2>
            <button
                type="type"
                onClick={decrement}
                disabled={isDisabled}
            >-
            </button>
            {fruitValue}
            <button
                type="button"
                onClick={increment}
            >+
            </button>
        </div>
    );
}

export default Counter;