import React from 'react';

function LabelInput({htmlFor, type, name, id, value, onChange, children, min, max, checked, text}) {
    return (
        <label htmlFor={htmlFor}>
            {children}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                checked={checked}
            />
            {text}
        </label>);
}

export default LabelInput;