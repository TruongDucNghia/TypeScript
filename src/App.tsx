import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const name: string = "Trương Đức Nghĩa"
const age: number = 19
const address: string = "PHÚ THỌ - VN"
function App() {
  return (
    <div>
      <h1>learning react-typescript</h1>
      <h1>hello world</h1>
      <h2>hello {name}</h2>
      <h2>{age}</h2>
      <h2>{address}</h2>
    </div>
    )
}

export default App
