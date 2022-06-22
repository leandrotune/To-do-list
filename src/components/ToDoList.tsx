import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Task } from './Task'

import { Key, PlusCircle } from 'phosphor-react'

import styles from './ToDoList.module.css'
import { NoListShown } from './NoListShown';
interface HandleNewTaskTextProps {
  event: ChangeEvent<HTMLInputElement>
  taskEstruturas: {
    title: string
    isComplete: boolean
  }
}

export function ToDoList() {
  const [tasksAdd, setTasksAdd] = useState([''])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasksAdd([...tasksAdd, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)

  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteTask(taskToDelete: string) {
    const taskWithotDeletedOne = tasksAdd.filter(task => {
      return task !== taskToDelete
    })

    setTasksAdd(taskWithotDeletedOne)
  }

  function taskCompleted(checked: boolean) {
    if (checked === true) {
      console.log(`Este é o conteúdo `)
    }
  }

  const noTasksAdded = tasksAdd.length == 0

  return (
    <div className={styles.container}>
      <article>
        <form onSubmit={handleCreateNewTask} className={styles.fieldAddTasks}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskText}
            onInvalid={handleNewTaskInvalid}
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
            <strong>Tarefas criadas <span>{tasksAdd.length}</span></strong>
          </div>
          <div>
            <strong>Concluídas <span>2 de 5</span></strong>
          </div>
        </header>

        <div className={styles.listTasks}>
          {noTasksAdded ? (
            <NoListShown />
          ) : (
            <>
              {tasksAdd.map(task => {
                return (
                  <Task
                    key={task}
                    content={task}
                    onDeleteTask={deleteTask}
                    onTaskCompleted={taskCompleted}
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
