import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function ToDo() {
  const [task,setTask] = useState('')
  const [savedTask, setSavedTask] = useState([])
  const handleChange = ({target}) => {
    setTask(target.value)
    console.log(task)
  }
  const addTask = () => {
    setSavedTask([...savedTask, task])
    setTask('')
    console.log(savedTask)
  }
  const deleteTask = (i) => {
    const tasks = [...savedTask]
    tasks.splice(i,1)
    setSavedTask([...tasks])
  }
  const disabled = !task.length
  const navigate = useNavigate()
  return (
    <div>
    <label >
        <Input
          id={task}
          type='text'
          onChange={handleChange}
          name='task'
          value={task}
        />
        <Button
          onClick={addTask}
          disabled={disabled}
        >
          Adicionar tarefa
        </Button>
        <Button onClick={ () => { navigate('/'); } }>
        Voltar para a página inicial
      </Button>

    </label>
    <div>
      <ol>
        {
          savedTask.map((task,i) =>
          <div key={i}>
          <li className='tasks'>{task}</li>
          <div className='deleteBtn'>
          <Button
            onClick={() => deleteTask(i)}>
            x
          </Button>
          </div>
          </div>

          )
        }
      </ol>

        </div>
        </div>
  )
}
