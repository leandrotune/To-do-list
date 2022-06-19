import { Trash } from 'phosphor-react'
import { useState } from 'react'

import clipboard from '../assets/clipboard.svg'

import styles from './Task.module.css'


export function Task() {

  const [tasks, setTasks] = useState(0)

  return (
    <>
      <div className={styles.contentTasks}>
        <div className={styles.noTasksAdded}>
          <img src={clipboard} alt="imagem clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>

        <form className={styles.containerTask}>
          <div className={styles.content}>
            <input type="checkbox" />
          </div>
          <div className={styles.contentTask}>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          </div>

          <button
            className={styles.content}
            type="button">
            <Trash
              size={16}
              weight="regular"
            />
          </button>
        </form>
      </div>
    </>


  )
}