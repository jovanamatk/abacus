import { createContext, useState, useContext } from "react";
import isValidExpression from "../utils/validator";

const CalculatorContext = createContext({
    formula: '',
    result: 0,
    onInputValues: () => { },
    clear: () => { },
    calculate: () => { },
});

const CalculatorProvider = ({ children }) => {
    const [formula, setFormula] = useState('');
    const [result, setResult] = useState(0);

    const clear = () => {
        setFormula('');
        setResult(0);
    };

    const calculate = () => {
        let amount = 0;

        try {
            amount = eval(formula);
        } catch (error) {
            amount = 'Error';
        }

        setResult(amount);
    };

    const onInputValues = (button) => {
        if (button.type === 'operator' && isValidExpression(formula, button.value) === false) {
            return
        }

        setFormula((previous) => previous + button.value);
    };

    return (
        <CalculatorContext.Provider value={{ formula, result, onInputValues, clear, calculate }}>
            {children}
        </CalculatorContext.Provider>
    );
}

const useCalculator = () => {
    const context = useContext(CalculatorContext);

    if (!context) {
        throw new Error('useCalculator must be used within a CalculatorProvider');
    }

    return context;
}

export { CalculatorProvider, useCalculator };