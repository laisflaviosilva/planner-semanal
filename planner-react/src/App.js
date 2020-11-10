import React, {useState, useEffect} from 'react';
import GlobalStyle from './components/styles/global'
import Menu from './components/Menu/Menu'
import Tarefas from './components/Tarefas/Tarefas'
import axios from 'axios'


const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-lais-flavio'

function App() {
  const [allTask, setAllTask] = useState([])
  const [id, setId] = useState("")

  useEffect(() => {
    getTask()
  }, []) 

  const getTask = () => {
    axios.get(baseUrl)
    .then(response => {
      console.log(response.data)
      setAllTask(response.data)
      setId(response.data.id)

    })
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div className="App">
      <Menu
         getTask = {getTask}
      />
      <Tarefas 
        allTask = {allTask}
        getTask = {getTask}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
