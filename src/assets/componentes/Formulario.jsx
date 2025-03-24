import { Botao } from "./Botao"
import { Input } from "./Input"
import { Texto } from "./Texto"

function Formulario () {

  function formatar(event) {
    event.preventDefault()

    let valor = document.getElementById("input").value.toUpperCase()
    let texto = document.getElementById("texto")

    if (valor) {
      texto.innerText = valor
    }
  }

  return (
    <form>
      <Input id="input" />
      <Botao id="btn" handleClick={formatar} />
      <Texto id="texto" cor="blue" />
    </form>
  )
}

export { Formulario }