import React from 'react';

const FormInput = ({ className, labelText, placeholder, setPlayer, type, value}) => {
    const handleChange = (event) => {
        setPlayer(event.target.value);
    }

    return (
        <label className={className}>
            {labelText}
            <input type={type} onChange={handleChange} placeholder={placeholder} value={value} required />
        </label>
    );
}

export default FormInput;