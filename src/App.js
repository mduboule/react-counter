import React, { useState } from 'react';
import Counter from "./counter";

function App() {
  const [counter, setCounter] = useState(0)

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handlePlus5 = () => {
    setCounter(counter + 5)
  }

  const handleMinus = () => {
    setCounter(counter - 1)
  }

  const handleMinus5 = () => {
    setCounter(counter - 5)
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex bg-white w-full max-w-md flex-wrap rounded-2xl m-4 p-6 border-black border shadow-2xl text-center">
        <h1 className="w-full text-4xl uppercase">I am the counter!</h1>
        <Counter counter={counter} classes="text-[80px] w-full" />
        <div className="flex justify-center w-full gap-2">
          <button onClick={handleMinus5} className="text-md w-full aspect-square border">-5</button>
          <button onClick={handleMinus} className="text-4xl w-full aspect-square border">-</button>
          <button onClick={handlePlus} className="text-4xl w-full aspect-square border">+</button>
          <button onClick={handlePlus5} className="text-md w-full aspect-square border">+5</button>
        </div>
      </div>
    </main >
  )
}

export default App;
