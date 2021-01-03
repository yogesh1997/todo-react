import { Checkbox, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteTask, editTask } from '../../actions/actionCRUD'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';


const TodoTask = ({task, bucketName, taskIndex}) => {
    const [isChecked, setCheckTask] = useState(false)
    const [isEdit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const [currentTask, setTask] = useState('')

    useEffect(() => {
        setTask(task)
    },[task])

    const handleCompleteTask = () => setCheckTask(!isChecked)

    const removeTask = () => {
        setEdit(false)
        dispatch(deleteTask(bucketName, taskIndex))
    }

    const handleEditTask = () => setEdit(!isEdit)

    const handleResetTask = (event) => setTask(event.target.value)

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            setEdit(!isEdit)
            dispatch(editTask(bucketName, currentTask, taskIndex))
        }
    }

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox
                onChange={handleCompleteTask}
                checked={isChecked}
                />
            <div style={{flexGrow:'2'}}>
                {
                    isEdit ?
                    <TextField
                    variant="outlined"
                    style={{minWidth: '100%', marginBottom: '10px'}}
                    value={currentTask}
                    onChange={handleResetTask}
                    onKeyPress={handleKeyPress}
                    />
                    :
                    !isChecked ?
                    <strong>{currentTask}</strong>
                    : <strike><strong>{currentTask}</strong></strike>
                }
            </div>
            <div>
            <EditIcon style={{marginRight:'5px', cursor: 'pointer'}} onClick={handleEditTask}/>
            <DeleteIcon style={{marginRight: '10px', cursor: 'pointer'}} onClick={removeTask}/>
           </div>
        </div>
    )
}

export default TodoTask