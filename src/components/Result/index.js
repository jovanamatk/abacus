import React from 'react'
import { useCalculator } from '../../context/calculator';

const Result = ({ }) => {
    const { formula, result } = useCalculator();

    return (
        <section className='result'>
            {formula}
            {result !== 0 ? ` = ${result}` : ''}
        </section>
    );
}

export default Result;