import { useState } from 'react';
import { NoListShown } from './NoListShown';

import { Task } from './Task'

import styles from './ToDoList.module.css'

export function ToDoList() {
  const [tasks, setTasks] = useState('')

  return (
    <article className={styles.containerTasks}>
      <header className={styles.inforTasks}>
        <div>
          <strong>Tarefas criadas <span>0</span></strong>
        </div>
        <div>
          <strong>Concluídas <span>2 de 5</span></strong>
        </div>
      </header>

      <div className={styles.listTasks}>
        <NoListShown />

        {/* <Task />
        <Task />
        <Task />
        <Task /> */}
      </div>
    </article>
  )
}