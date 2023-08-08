import React from 'react';

const Button = ({ option, onClick }) => {
    return <button onClick={onClick}>{option}</button>;
};

export default Button;
