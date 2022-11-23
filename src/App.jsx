import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Details from './components/Details'
function App() {
  // const [click, setClick] = useState(false);
  // const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  // const adviceAPI = async () => {
  //   try {
  //     const res = await fetch('https://api.adviceslip.com/advice');
  //     if (!res.ok) throw new Error("Couldn't fetch new Advice");
  //     const data = await res.json();
  //   } catch(err) {
  //     console.error(err)
  //   }
  // };
  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
    .then(res => {
      setData(res.data.slip)
      // console.log(res.data)
    })
    .catch((err) => console.error(err.message))
  }, [])
  console.log(data);
  return (
    <div className="app">
      <Details number={data.id} advice={data.advice} />
    </div>
  )
}

export default App
