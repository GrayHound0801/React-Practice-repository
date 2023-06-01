import React, { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    fetch('/people')
      .then(response => response.json())
      .then(data => setPeople(data))
      .catch(error => console.error('Error:', error));
  }, []);
  return <div className='App'>{people ? <div>{people.name}</div> : 'Loading...'}</div>;
}

export default App;
