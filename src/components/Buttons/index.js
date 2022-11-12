import React from 'react'
import { buttons } from '../../constants/buttons';

const Buttons = ({ onInputValues, clear, calculate }) => {

    const handleClick = (button) => {
        if (button.type === 'number' || button.type === 'operator') {
            onInputValues(button);
        }
        if (button.type === 'clear') {
            clear();
        }
        if (button.type === 'equal') {
            calculate();
        }
    }

    return (
        <div className="calculator-buttons">
            {buttons.map((button) =>
                <button
                    key={button.value}
                    onClick={() => handleClick(button)}
                >
                    {button.value}
                </button>
            )}
        </div>
    );
}

export default Buttons;