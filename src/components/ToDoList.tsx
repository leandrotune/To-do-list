import { ChangeEvent, FormEvent, InvalidEvent, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskProps } from './Task'

import { PlusCircle } from 'phosphor-react'

import styles from './ToDoList.module.css'
import { NoListShown } from './NoListShown';
interface TaskAddProps {
  id: string;
  title: string;
  isComplete: boolean;
}

interface StatusTasks {
  tasks: TaskAddProps
}

export function ToDoList() {
  const [newTaskText, setNewTaskText] = useState([''])
  const [tasksAdd, setTasksAdd] = useState<TaskAddProps[]>([])

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText([event.target.value])
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
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

    setTasksAdd([...tasksAdd, taskStructure])
    setNewTaskText([''])
  }

  function deleteTask(taskId: string,) {
    const taskListWithoutTheDeletedTask = tasksAdd.filter(task => {
      return task.id !== taskId
    })

    setTasksAdd(taskListWithoutTheDeletedTask)
  }

  function taskCompleted(taskId: string, taskCompleted: boolean) {
    if (taskCompleted) {
      const tasks = tasksAdd.map(task => {
        if (task.id === taskId)
          return {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete = true
          }
        if (task.id !== taskId) {
          return task
        }
      })

      setTasksAdd(tasks)
    } else {
      const tasksNotCompleted = tasksAdd.map(task => {
        if (task.id === taskId)
          return {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete = false
          }
        if (task.id !== taskId) {
          return task
        }
      })
      setTasksAdd(tasksNotCompleted)
    }
  }

  let numberOfTasksCompleted = tasksAdd.filter(task => task.isComplete === true).length

  const noTasksAdded = tasksAdd.length === 0

  return (
    <div className={styles.container}>
      <article>
        <form onSubmit={handleCreateTask} className={styles.fieldAddTasks}>
          <input
            name="task"
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
            <strong>Concluídas <span>{`${numberOfTasksCompleted} de ${tasksAdd.length}`}</span></strong>
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
                    key={task.id}
                    id={task.id}
                    content={task.title}
                    isComplete={task.isComplete}
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
