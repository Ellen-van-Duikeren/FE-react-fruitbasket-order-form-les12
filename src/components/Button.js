import React from 'react';

function Button({id, type, handleClick, children}) {
    return (
        <button
            id={id}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;