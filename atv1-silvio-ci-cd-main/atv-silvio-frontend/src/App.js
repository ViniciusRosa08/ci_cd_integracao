import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/getData`)
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <p style={{textAlign: 'center'}}>Dados recebidos do back-end!</p>
        <p style={{textAlign: 'center'}}>{data ? data : 'Carregando...'}</p>
      </header>
    </div>
  );
}

export default App;
