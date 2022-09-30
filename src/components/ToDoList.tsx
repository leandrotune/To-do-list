import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react'

import { Task } from './Task'
import { NoListShown } from './NoListShown';

import styles from './ToDoList.module.css'

interface TaskAddProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function ToDoList() {
  const [newTaskText, setNewTaskText] = useState([''])
  const [addTasks, setAddTask] = useState<TaskAddProps[]>([])

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

    setAddTask([...addTasks, taskStructure])
    setNewTaskText([''])
  }

  function deleteTask(taskId: string,) {
    const taskListWithoutTheDeletedTask = addTasks.filter(task => {
      return task.id !== taskId
    })

    setAddTask(taskListWithoutTheDeletedTask)
  }

  function taskCompleted(taskId: string) {
    const taskCompleted = addTasks.map((task) => {
      if(task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task
    })
    setAddTask(taskCompleted)
  }

  let numberOfTasksCompleted = addTasks.filter(task => task.isComplete === true).length

  const noTasksAdded = addTasks.length === 0

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
            <strong>Tarefas criadas <span>{addTasks.length}</span></strong>
          </div>
          <div>
            <strong>Concluídas <span>{`${numberOfTasksCompleted} de ${addTasks.length}`}</span></strong>
          </div>
        </header>

        <div className={styles.listTasks}>
          {noTasksAdded ? (
            <NoListShown />
          ) : (
            <>
              {addTasks.map(task => {
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
