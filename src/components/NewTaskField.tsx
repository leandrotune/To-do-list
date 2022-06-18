import { PlusCircle } from 'phosphor-react'

import styles from './NewTaskField.module.css'

export function NewTaskField() {
  return (
    <article>
      <form className={styles.fieldAddTasks}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
        />

        <button type='submit'>
          <span> Criar </span>
          <PlusCircle size={20} weight="bold" color="#F2F2F2" />
        </button>
      </form>
    </article>
  );
}