import React from 'react';

const FormInput = ({ labelText, placeholder, type}) => {
    return (
        <label>
            {labelText}
            <input type={type} placeholder={placeholder} />
        </label>
    );
}

export default FormInput;