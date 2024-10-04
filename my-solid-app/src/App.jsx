import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
    <div>
      <h1>Hello, Solid.js!</h1>
    </div>
    
    <div>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
    </>
  );
}

export default App;
