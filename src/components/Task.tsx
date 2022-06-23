import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

import styles from './Task.module.css'

interface TaskProps {
  content: string;
  stateTask: boolean;


}

export function Task({ content }: TaskProps) {

  function handleDeleteTask() {

  }

  return (
    <>
      <form className={styles.containerTask}>
        <div className={styles.content}>
          <input type="checkbox" />
        </div>
        <div className={styles.contentTask}>
          <p>{content}</p>
        </div>

        <button onClick={handleDeleteTask} title="Deletar comentário"
          className={styles.content}
          type="button">

          <Trash
            size={16}
            weight="regular"
          />
        </button>
      </form>
    </>
  )
}