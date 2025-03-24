function Botao({id, handleClick, label}) {
  return (
    <button id={id} onClick={(event) => handleClick(label ?? event)}>{label || "Formatar"}</button>
  )
}

export { Botao }