import React from 'react';
import Button from '../Button/Button';

const Card = ({ question, options = [], onClick }) => {
    return (
        <div className="card">
            <h2 className='heading'>{question}</h2>
            {Array.isArray(options) && options.length > 0 ? (
                options.map((option, index) => (
                    <Button
                        key={index}
                        option={option}
                        onClick={() => onClick(option)}
                    />
                ))
            ) : (
                <p>No options available.</p>
            )}
        </div>
    );
};

export default Card;
