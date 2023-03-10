import React, { useState } from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
//CSS
import styles from "./App.module.css";
//Interface
import {ITask} from "./interfaces/Task"

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Salve algo, para não esquecer</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Tarefas</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
