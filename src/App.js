// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount } from './features/counterSlice';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Redux Toolkit + Tailwind CSS</h1>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
