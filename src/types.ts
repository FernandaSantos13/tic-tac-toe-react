export type Squares = (string | null)[];

export type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
};

export type BoardProps = {
    xIsNext: boolean;
    squares: Squares;
    onPlay: (nextSquares: Squares) => void;
};

export type History = Squares[];
