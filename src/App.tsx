import { useState } from "react";
import { data } from "./constants";
import styles from "./home.module.css";

const App = (): JSX.Element => {

  

  const [title, setTitle] = useState <string>();

  const [arr, setArr] = useState <IData[]>(data);
  

  const handleSubmit = (): void => {
    if(!title?.length) return;

    const newData = {
      title: title,
      id: new Date().getTime(),
      description: "description"
    }

    setArr([...arr, newData])
    setTitle('');
  }

  const deleteItem = (id: number): void => {
      const newData = arr.filter(item => item.id != id) 
      setArr(newData)
  }
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>

      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter to" className={styles.input}/>
      <button onClick={handleSubmit} className={styles.button}>Add Todo</button>
      
      <div className={styles.card}>
        {
          arr.map((item) => (
              <div key={item.id} className={styles.cardItem}>
                <p>{ item.title }</p>

                <div className={styles.delBtn}>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default App