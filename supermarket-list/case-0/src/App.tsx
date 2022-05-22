import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState([] || null);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  const handleClickDelete = (id)=>{
   
    setItems(items.filter(item=>item.id!==id))
    
  }

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input name="text" type="text" autoFocus/>
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li className={item.completed ? styles.completed : ""} key={index}>
            {item.text} <button onClick={()=>handleClickDelete(item.id)}>[X]</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
