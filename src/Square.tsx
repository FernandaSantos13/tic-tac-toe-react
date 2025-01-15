import React from 'react';
import { SquareProps } from './types';

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (<button className="square" onClick={onSquareClick}>
        {value}
    </button>
    );
}


export default Square; 
