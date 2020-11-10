import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Delete from '../assets/delete.svg'
import Edit from '../assets/edit.svg'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-lais-flavio'

const Tarefas = (props) => {
  
  const putTask = (id) => {
    axios.put(`${baseUrl}/${id}`)
    .then(response => {
      console.log(response.data, "Alterado")

    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const delTask = (id) => {
    axios.delete(`${baseUrl}/${id}`)
    .then(() => {
      props.getTask()
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const segTasks = props.allTask.filter(task => {
    if(task.day === "segunda") {
      return true
    } else {
      return false
    }
  })
  const terTasks = props.allTask.filter(task => {
    if (task.day === "terca") {
      return true
    }else {
      return false
    }
  })
  const quarTasks = props.allTask.filter(task => {
    if (task.day === "quarta") {
      return true
    }else {
      return false
    }
  })

  const quiTasks = props.allTask.filter(task => {
    if (task.day === "quinta") {
      return true
    }else {
      return false
    }
  })

  const sexTasks = props.allTask.filter(task => {
    if (task.day === "sexta") {
      return true
    }else {
      return false
    }
  })
  
  const sabTasks = props.allTask.filter(task => {
  if (task.day === "sabado") {
    return true
  }else {
    return false
  }
})
const domTasks = props.allTask.filter(task => {
  if (task.day === "domingo") {
    return true
  }else {
    return false
  }
})

  const segDayTasks = segTasks.map(task => {
    return <div key={task.id}className="task-card">
      <p>{task.text}</p>
      <div className="btn-imagens">
        <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
        <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
    </div>
    })
  const terDayTasks = terTasks.map(task => {
    return <div key={task.id} className="task-card">
      <p>{task.text}</p>
      <div className="btn-imagens">
        <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
        <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
    </div>
    })

  const quarDayTasks = quarTasks.map(task => {
    return <div key={task.id} className="task-card">
      <p>{task.text}</p>
      <div className="btn-imagens">
        <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
        <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
    </div>
    })

  const quiDayTasks = quiTasks.map(task => {
    return <div key={task.id} className="task-card" data-testid={'tarefas-render'}>
      <p>{task.text}</p>
      <div  className="btn-imagens">
        <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
        <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
    </div>
    })

    const sexDayTasks = sexTasks.map(task => {
      return <div key={task.id} className="task-card">
        <p>{task.text}</p>
        <div  className="btn-imagens">
          <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
          <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
      </div>
      })

    const sabDayTasks = sabTasks.map(task => {
      return <div key={task.id} className="task-card" >
        <p>{task.text}</p>
        <div  className="btn-imagens">
        <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
        <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
      </div>
      })

    const domDayTasks = domTasks.map(task => {
      return <div key={task.id} className="task-card"  data-testid={'tarefas-render'}>
        <p>{task.text}</p>
        <div className="btn-imagens">
        <img src={Edit} alt="edite" onClick={() => putTask(task.id)} />
        <img src={Delete} alt="lixeira" onClick={() => delTask(task.id)} />
      </div>
      </div>
      })
  
  return (
    <div className="div-tarefas">
      <div className="box bg1">
        <h3>Segunda</h3>
        {segDayTasks}
      </div>
      <div className="box bg2">
        <h3>Terça</h3>
        {terDayTasks}
      </div>
      <div className="box bg3">
        <h3>Quarta</h3>
        {quarDayTasks}
      </div>
      <div className="box bg4">
        <h3>Quinta</h3>
        {quiDayTasks}
      </div>
      <div className="box bg1">
        <h3>Sexta</h3>
        {sexDayTasks}
      </div>
      <div className="box bg2">
        <h3>Sábado</h3>
        {sabDayTasks}
      </div>
      <div className="box bg3">
        <h3>Domingo</h3>
        {domDayTasks}
      </div>
      <div className="box bg4">
        <h3>Filtro</h3>
      </div>
    </div>
  )
}

export default Tarefas