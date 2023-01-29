import React,{useState, ChangeEvent,FormEvent,useEffect} from 'react';
import styles from "./TaskForm.module.css"
import {ITask} from "../interfaces/Task"
 

interface Props{btnText:string}

const TaskForm = ({btnText}:Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty,setDifficulty] = useState<number>(0);

    const addTaskHandler = () => {}
    const HandlerChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            setTitle(e.target.value);
        }else{
            setDifficulty(parseInt(e.target.value))
        }
        console.log(title)
        console.log(difficulty)
    }
    return(
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text"  name="title" placeholder="Título" onChange={HandlerChange} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="difficulty"  name="difficulty" placeholder="Dificuldade da tarefa" />
            </div>
            <input type="submit" value={btnText} />
        </form>
    );
}


export default TaskForm;