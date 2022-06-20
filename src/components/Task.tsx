import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './Task.module.css'

export function Task() {

  const [tasks, setTasks] = useState(0)

  return (
    <>
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
    </>
  )
}