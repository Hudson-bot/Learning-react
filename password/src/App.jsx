import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed ] = useState(false)
  const [password, setpassword] = useState('')

const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let password= ""
    let str ="ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=0; i<length ; i++){
      const char = Math.floor(Math.random() * str.length+1)
      password += str.charAt(char)
    }

    setpassword(password)
  },[length, numberAllowed, charAllowed])


const copyPasswordToClipboard = () => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
}


    useEffect(() => {
      generatePassword()
    },[length, numberAllowed, charAllowed])


  return (
    <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-zinc-700 text-orange-500'>
      <h1 className = 'text-white text-center my-3' >Password generator</h1>
      <div className = 'flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type = "text" 
        value = {password}
        className='outline-none w-full py-1 px-3 '
        placeholder='Password'
        readOnly
        ref = {passwordRef}
         />     
         <button 
         onClick={copyPasswordToClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button> 
        
        
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
              type= "range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
              />
              <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input type="checkbox" 
             defaultChecked={numberAllowed}
             onChange={() => {
              setnumberAllowed( (prev) => !prev)
             }}
             name="" 
             id="" />
             <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input type="checkbox" 
             defaultChecked={charAllowed}
             onChange={() => {
              setcharAllowed( (prev) => !prev)
             }}
             name="" 
             id="" />
             <label htmlFor="character">Characters</label>
          </div>
          
        </div>
    </div>
  )
}

export default App
