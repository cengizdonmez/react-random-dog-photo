import './App.css';

import { useEffect, useState } from "react";
function App() {

  const [go, setGo] = useState(1);
  const [image, setImage] = useState(false);

  useEffect(() => {
    // component ilk yüklendiğinde çalışıyor.
    console.log('ilk')
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImage(data))

    return () => {
      // destroy
      console.log('destroy')
    }
  }, [])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setImage(data))
    // component her yenilendiğinde çalışıyor.
    console.log('yenilendi')
  }, [go]);
  
  return (
    <div className="App">
      <div className="image-content">
        {image && <img className="img" src={image.message} alt=""/>}
        <button onClick={() => setGo(go => go + 1)}>Random</button>
      </div>
    </div>
  );
}

export default App;
