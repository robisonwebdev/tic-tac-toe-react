import React from 'react';

const FormInput = ({ className, labelText, placeholder, type}) => {
    return (
        <label className={className}>
            {labelText}
            <input type={type} placeholder={placeholder} />
        </label>
    );
}

export default FormInput;