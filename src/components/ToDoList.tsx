import { useState } from 'react';

import { Task } from './Task'

import { PlusCircle } from 'phosphor-react'

import styles from './ToDoList.module.css'

export function ToDoList() {
  const [tasksAdd, setTasksAdd] = useState([1, 2, 3])

  return (
    <div className={styles.container}>
      <article>
        <form className={styles.fieldAddTasks}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
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
            <strong>Tarefas criadas <span>0</span></strong>
          </div>
          <div>
            <strong>Concluídas <span>2 de 5</span></strong>
          </div>
        </header>

        <div className={styles.listTasks}>
          {tasksAdd.map(taskAdd => {
            return (
              <Task />
            )
          })}
        </div>
      </main>
    </div>
  )
}
