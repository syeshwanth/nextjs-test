'use client';

import React, { useState } from 'react';
import Board from '../components/Board';
import { calculateWinner } from '../utils/gameLogic';
import type { BoardState } from '../types';

export default function HomePage() {
  const [squares, setSquares] = useState<BoardState>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? 'Draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <div style={{ marginTop: 20 }}>
        <strong>{status}</strong>
      </div>
      <button style={{ marginTop: 20 }} onClick={handleReset}>
        Reset
      </button>
    </main>
  );
}