import React, { useState, useEffect }from 'react'
import axios from 'axios'


const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-lais-flavio'

const Menu = (props) => {

  const [ days, setDays ] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

  const onChangeSelect = (e) => {
      setDays( e.target.value)
  }
  const onChangeDescriptionTask = (e) => {
    setTaskDescription(e.target.value)
}


const handleFormTask = (e) => {
  e.preventDefault()
  const body = {
    day: days,
    text: taskDescription
  }

  axios.post(baseUrl, body)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error.message)
  })
}
/*

*/
  return (
      <form className="menu" onSubmit={handleFormTask}>
        <label htmlFor="days">Dia da semana</label>
        <select  name="days" id="days" onChange={onChangeSelect} value={days} data-testid={'select-days'}>
          <option value="selecione"  >Selecione o dia da semana</option>
          <option value="domingo">Domingo</option>
          <option value="segunda">Segunda</option>
          <option value="terca" >Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sábado</option>
        </select>

        <label htmlFor="tarefa">Digite a tarefa: </label>
        <input id="tarefa" name="tarefa" rows="4" cols="50" 
        placeholder="escreva aqui" onChange={onChangeDescriptionTask} value={taskDescription}></input>
        <button>Inserir</button>

        <h1>Seu Planner Semanal</h1>
      </form>
  )
}

export default Menu