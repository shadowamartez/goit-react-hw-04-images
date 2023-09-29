import React from 'react';

const Button = ({ onClick, disabled }) => {
    return (
        <div className='button-container'>
            <button type="button" className="button" onClick={onClick} disabled={disabled}>
            Load more
            </button>
        </div>
    );
};

export default Button;
