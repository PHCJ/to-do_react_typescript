import React from 'react';

//CSS
import styles from "./TaskList.module.css"

//interfaces
import { ITask } from '../interfaces/Task';

interface Props{
    taskList: ITask[];
}
const TaskList = ({taskList}:Props) => {
    return(
       <>
        {taskList.length > 0 ? (
        taskList.map((task)=>(
            <div key={task.id} className={styles.task}>
                <div className={styles.details}>
                    <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                </div>
                <div className={styles.actions}>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash"></i>
                </div>
            </div>
        ))
        ) : (
        <p>Não tarefas cadastradas</p>
        )}
       </>
    );
}
export default TaskList;