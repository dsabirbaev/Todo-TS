import { useState } from "react";

import styles from "./home.module.css";
import { IData } from "./interfaces";
const App = (): JSX.Element => {

  const data: IData[] = [
    {title: "Name1", id: 1, description: "Description1"},
    {title: "Name2", id: 2, description: "Description2"},
    {title: "Name3", id: 3, description: "Description3"}
  ];

  const [title, setTitle] = useState <string>();

  const [arr, setArr] = useState <IData[]>(data);
  

  const handleSubmit = (): void => {
    if(!title?.length) return;

    setTitle('');
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
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default App