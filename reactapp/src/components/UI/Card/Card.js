import React from 'react';
import Button from '../Button/Button';

const Card = ({ question, options = [], onClick }) => {
    return (
        <div className="card">
            <h4 className='heading'>{question}</h4>
            {Array.isArray(options) && options.length == 4 ? (
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
