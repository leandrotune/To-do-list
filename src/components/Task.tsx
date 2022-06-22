import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

import styles from './Task.module.css'

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onTaskCompleted: (task: boolean) => void;
}

export function Task({ content, onDeleteTask, onTaskCompleted }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleTaskCompleted(event: ChangeEvent<HTMLInputElement>) {
    onTaskCompleted(event.target.checked)
  }

  return (
    <>
      <form className={styles.containerTask}>
        <div className={styles.content}>
          <input type="checkbox" onChange={handleTaskCompleted} />
        </div>
        <div className={styles.contentTask}>
          <p>{content}</p>
        </div>

        <button onClick={handleDeleteTask}
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