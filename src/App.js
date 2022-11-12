import { React, useState } from 'react'
import Buttons from './components/Buttons';
import Result from './components/Result';
import isValidExpression from './utils/validator';
import './App.css'

function App() {
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
    <>
      <h1>Kalkulator</h1>
      <Buttons onInputValues={onInputValues} calculate={calculate} clear={clear} />
      <br /><br />
      <Result formula={formula} result={result} />
    </>
  );
}

export default App;
