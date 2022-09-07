import './App.css';

import { useEffect, useState } from "react";
function App() {

  const [data, setData] = useState(0);
  const [image, setImage] = useState(0);
  
  useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      console.log(response);
    })
    .then(data => {
      setData(data);
    })  
    .catch(error => console.log(error))
  }, [image]);

  return (
    <div className="App">
      <div className="image-content">
        <img className="img" src={data.message} alt="" />
        <button onClick={setImage}>Random</button>
      </div>
    </div>
  );
}

export default App;
