import { useState } from 'react';

import { Task } from './Task'

import styles from './Tasks.module.css'

export function Tasks() {
  const [tasks, setTasks] = useState(0)

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
        <Task />
      </div>
    </article>
  )
}