import './App.css'
import { Formulario } from './assets/componentes/Formulario'
import { Botao } from './assets/componentes/Botao'

function App() {

  function verLabel(label) {
    alert(label)
  }

  return (
    <>
      <h1>Quest React Básico</h1>
      <Formulario />
      <Botao label="Veja a label" handleClick={verLabel}/>
    </>
  )
}

export default App
