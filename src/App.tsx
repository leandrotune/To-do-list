import { Header } from './components/Header'
import { NewTaskField } from './components/NewTaskField'

import styles from './App.module.css'

import './global.css'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <NewTaskField />

        <main>
          <Tasks />
        </main>
      </div>
    </>
  )
}
