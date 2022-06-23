import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task'

import { PlusCircle } from 'phosphor-react'

import styles from './ToDoList.module.css'
import { NoListShown } from './NoListShown';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

const newTask: Task[] = [

]

export function ToDoList() {
  const [newTaskText, setNewTaskText] = useState([''])
  const [taskAdd, setTaskAdd] = useState([{}])

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText([event.target.value])
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const taskStructure = {
      id: uuidv4(),
      title: 'bom dia!',
      isComplete: false,
    }

    newTaskText.filter(text => {
      return taskStructure.title = text
    })

    newTask.push(taskStructure)

    setTaskAdd([...taskAdd, newTask])
  }

  const noTasksAdded = newTask.length == 0

  return (
    <div className={styles.container}>
      <article>
        <form onSubmit={handleCreateTask} className={styles.fieldAddTasks}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            // value={newTaskText}
            onChange={handleNewTaskText}
            // onInvalid={handleNewTaskInvalid}
            required
          />

          <button type='submit'>
            <span> Criar </span>
            <PlusCircle size={20} weight="bold" color="#F2F2F2" />
          </button>
        </form>
      </article>

      <main className={styles.containerTasks}>
        <header className={styles.inforTasks}>
          <div>
            <strong>Tarefas criadas <span>{newTask.length}</span></strong>
          </div>
          <div>
            <strong>Concluídas <span>2 de{newTask.length}</span></strong>
          </div>
        </header>

        <div className={styles.listTasks}>
          {noTasksAdded ? (
            <NoListShown />
          ) : (
            <>
              {newTask.map(task => {
                return (
                  <Task
                    key={task.id}
                    content={task.title}
                    stateTask={task.isComplete}
                  />
                )
              })}
            </>
          )}
        </div>
      </main>
    </div>
  )
}
