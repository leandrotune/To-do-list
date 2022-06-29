import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react';

import styles from './Task.module.css'
export interface TaskProps {
  id: string;
  content: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void;
  onTaskCompleted: (id: string, isComplete: boolean,) => void
}

export function Task({ content, isComplete, id, onDeleteTask, onTaskCompleted }: TaskProps) {


  function handleTaskCompleted(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      isComplete = true;
      onTaskCompleted(id, isComplete)
    } else if (event.target.checked === false && isComplete === true) {
      isComplete = false;
      onTaskCompleted(id, isComplete)
    }
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <>
      <form
        id={id}
        className={styles.containerTask}>
        <div className={styles.content}>
          <input className={styles.checkbox} type="checkbox" onChange={handleTaskCompleted} />
        </div>
        <div className={styles.contentTask}>
          <p className={isComplete ? styles.taskCompleted : styles.taskNotCompleted}>
            {content}
          </p>
        </div>

        <button title="Deletar comentário" onClick={handleDeleteTask}
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