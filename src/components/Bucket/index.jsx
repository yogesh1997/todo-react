import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTask } from '../../actions/actionCRUD'
import  TodoLists from '../TodoLists'
import { Paper, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        margin: '0 20%'
    }
})

const Bucket = ({bucketName})  => {
    const classes = useStyles()
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const handleTodovalue = (event) => {
        setTodo(event.target.value)
    }

    const  createTodo = () => {
        dispatch(createTask(bucketName, todo))
        setTodo('')
    }
    
    return (
        <div style={{marginBottom: '25px'}}>
            <Paper elevation={3} key={bucketName} className={classes.root}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h3 style={{margin: '10px', display: 'flex', alignItems: 'center'}}>{bucketName}</h3>
                    <div style={{display: 'flex', margin: '10px'}}>
                        <TextField
                        id="outlined-secondary"
                        variant="outlined"
                        label="Create a todo."
                        autoComplete="off"
                        value={todo}
                        onChange={handleTodovalue}
                        />
                        <Button color="primary" variant="contained" onClick={createTodo} disabled={todo.length ? false: true}><AddIcon/></Button>
                    </div>
                </div>
                <TodoLists bucketName={bucketName}/>
            </Paper>
        </div>
    )
}

export default Bucket
