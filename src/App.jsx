import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [op,setOp]=useState(null)
  const changeName=(event)=>{
    setName(event.target.value.toLowerCase())
  }
  const calcular=()=>{
    const namesBads=[
      'llamas',
      'jhonatan llamas',
      'jhonatan',
      
    ]
    const goodNames=[
      'cesar zuluaga',
      'cesar',
      'zuluaga',
      'sergio davila',
      'sergio',
      'davila'
    ]
    const tuAmor = [
      'gian',
      'valdiris',
      'gian valdiris'
    ]
    if (['lina guerrero','guerrero','lina'].includes(name)){
      setOp('ella es tan maravillosa que este sofware no la puede describir...')
    }
    else if (tuAmor.includes(name)){
      setOp('aro ese man es calidad 100/10 es mas creo que es el indicado')
    }
    else if (namesBads.includes(name)){
      setOp('👎👎👎👎👎👎👎👎👎👎👎')
    }
    
    else{
      setOp('., no soy tan inteligente sorry ')
    }

  }

  return (
    <div className="App">
      <input type="text" name="" id="" placeholder='Ingresa el nombre' value = {name} onChange={changeName} />
      <button onClick={calcular}>
        Calcular
      </button>
      <h3 style={{color:'#fff'}}>
        {op}
      </h3>
    </div>
  )
}

export default App
