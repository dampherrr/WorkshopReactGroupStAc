/* eslint-disable react/prop-types */
import { useState } from "react";

function Candidate({ candidates }) {
  const [count, setCount] = useState(0);

  function nbLike() {
    setCount(count + 1);
  }

  return (
    
      <section className="container">
        <article>{candidates.name}</article> {/*Pour les noms*/}
        <article>
          <img
            src={candidates.image}
            alt={candidates.name}
            className="img-candidates"
          />
        </article>
        <p>{candidates.age}</p>
        <p>{candidates.city}</p>
        <button onClick={nbLike}>💖</button>
        <span>{count}</span>
      </section>
  
  );
}

export default Candidate;
