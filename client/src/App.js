import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    fetch(`/movies`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  }, [])
  return (
    <h1>Hello from React</h1>
  );
}

export default App;
