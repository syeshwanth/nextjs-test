// filepath: /Users/sunilyeshwanth/dev/nextjs-test/src/components/Board.tsx
import React from 'react';
import type { BoardState } from '../types';

type BoardProps = {
  squares: BoardState;
  onClick: (i: number) => void;
};

export default function Board({ squares, onClick }: BoardProps) {
  function renderSquare(i: number) {
    return (
      <button
        style={{
          width: 60,
          height: 60,
          fontSize: 24,
          margin: 4,
        }}
        onClick={() => onClick(i)}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={{ display: 'flex' }}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={{ display: 'flex' }}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}