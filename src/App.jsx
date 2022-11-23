import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Details from './components/Details'
function App() {
  const [data, setData] = useState([]);
  


    useEffect(() => {
      axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        if(res.status !== 200) throw new Error("Request Not Found")
        setData(res.data.slip)
      })
      .catch((err) => console.error(err.message))
    }, [])
  
  return (
    <div className="app">
      <Details number={data.id} advice={data.advice} />
    </div>
  )
}

export default App
