import React from 'react'
import axios from 'axios'
import {render, fireEvent, wait, getByPlaceholderText, getByLabelText} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Renderização inicial', () => {
  test('Input na tela', ()=> {
    const {
      getByPlaceholderText
    } = render(<App />)
    const input = getByPlaceholderText('escreva aqui')
    expect(input).toBeInTheDocument()
  })
})

test('Testa a criação de tarefas', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": "Aprender a programar",
          "day": "terca",
          "id": "GwqzdC0KqbKZmv19Ad0W"
      
      }
    ]
  })
  axios.post = jest.fn().mockResolvedValue({
    data: []
  })
  const {
    getByPlaceholderText, getByText, getByTestId, getByLabelText
  } = render (<App />)

  
  const selectDays = getByTestId("select-days")
  expect(selectDays).toBeInTheDocument()
  
  const buttonInserir = getByText(/Inserir/i)
  expect(buttonInserir).toBeInTheDocument()
  
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        id: '1',
        text: 'tarefa teste',
        day: "quinta"
      }
    ]
  })
  
  const select = getByLabelText(/Dia da semana/)
  userEvent.selectOptions(select, 'quinta')

  const inputTasks = getByPlaceholderText (/escreva aqui/)
  await userEvent.type(inputTasks, 'tarefa teste')
  expect(inputTasks).toBeInTheDocument()
  
  userEvent.click(buttonInserir)
  expect(axios.post).toHaveBeenCalledWith("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-lais-flavio", {
    day: "quinta",
    text: "tarefa teste"
  })
  await wait(() => {
    const task = getByText("tarefa teste")    
    expect(task).toBeInTheDocument()
  })
})


describe('Testar pegar tarefas', () => {
  test('tarefas na tela', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "id": "DLitrrOAc0nvKJQIMJY0",
          "text": "tarefa teste",
          "day": "quinta"
      }
      ]
    })
    const {
      findByTestId,
    } = render(<App />)

    expect(axios.get).toHaveBeenCalled()
    const tarefa = await findByTestId('tarefas-render')
    expect(tarefa).toBeInTheDocument()
  })
})

