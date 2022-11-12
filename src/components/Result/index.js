import React from 'react'

const Result = ({ formula, result }) => {

    return (
        <>
            {formula}
            {result !== 0 ? ` = ${result}` : ''}
        </>
    );
}

export default Result;