import { useState } from 'react'
import './App.scss'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {SketchPicker} from 'react-color'

function App() {
  const [CurrentColor, setCurrentColor] = useState("#ff6")

  const handleOnChange = (color) =>{
    setCurrentColor(color.hex)
  }

  const appStyle ={
    // color:"red"
    background: CurrentColor,
    height: "20vh",
  }

  return (
    <div className="App">
      <div className="header">
        <div className='wrapper'>
          <div className="left">
            <a href='https://github.com/Abiodun-code'><FaGithub /> </a>
            <a href='https://twitter.com/Olaroungbe_j'><FaTwitter /> </a>
            <a href='http://www.linkedin.com/in/olaroungbe-j11'><FaLinkedin /> </a>
            <a href='https://www.instagram.com/abiodun_code/'><FaInstagram /> </a>
          </div>
          <div className="right">
            <h1>React Color Picker</h1>
          </div>
        </div>
      </div>
      <div className='picker'>
        <div className='wrapper'>
          <SketchPicker
          color={CurrentColor}
          onChangeComplete={handleOnChange} />
        </div>
      </div>
      <h2>Here's Your Color:  <span style={appStyle}>{CurrentColor}</span></h2>
    </div>
  )
}

export default App
