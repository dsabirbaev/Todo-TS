

import styles from "./home.module.css";

const App = (): JSX.Element => {
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>

        <button className={styles.button}>Add Todo</button>
    
    </div>
  )
}

export default App