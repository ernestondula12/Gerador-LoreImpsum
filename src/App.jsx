import { useState } from "react"
import data from './data';
import { nanoid } from "nanoid";

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  }

  return (
   <section className="section-center">
      <h4>Farto do chato lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragrafos</label>
        <input 
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count} 
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">Gerar paragrafo</button>
      </form>

      <div className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid}>{item}</p>
        })}
      </div>

   </section>
  )
}

export default App
