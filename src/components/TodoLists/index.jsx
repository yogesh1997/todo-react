import React from 'react'
import  TodoTask  from '../TodoTask'
import { useSelector } from 'react-redux'

const TodoLists = ({ bucketName }) => {
    let taskList = useSelector(state => state.todo.tasks[bucketName])
    return (
        <div>
            {
                taskList ?
                taskList.map((task,idx) => (
                    <div key={idx}>
                        <hr/>
                        <TodoTask key={idx} bucketName={bucketName} taskIndex={idx} task={task}/>
                    </div>
                )) 
                : null
            }
        </div>
    )
}

export default TodoLists



