import React, { useRef, useState } from "react";
  
function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdated(inputRef.current.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Click</button>

      <h2>Updated: {updated}</h2>
    </form>
  );
}
  
export default App;