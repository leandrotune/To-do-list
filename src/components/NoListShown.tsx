import clipboard from '../assets/clipboard.svg'

import styles from './NoListShown.module.css'

export function NoListShown() {
  return (
    <div className={styles.contentTasks}>
      <div className={styles.noTasksAdded}>
        <img src={clipboard} alt="imagem clipboard" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}