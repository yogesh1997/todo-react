import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBucket } from '../../actions/actionCRUD'
import AddIcon from '@material-ui/icons/Add';
import './index.css'
import { Autocomplete } from '@material-ui/lab';

const CreateBuckets = () => {

    const [bucketName, setBucketName] = useState('')
    const Buckets = useSelector(state => state.todo.bucketNames)
    const dispatch = useDispatch()

    const handleBucketName = event => {
        setBucketName(event.target.value)
    }


    const handleCreateBucket = () => {
        dispatch(addBucket(bucketName))
        setBucketName('')
    }

    return (
        <div style={{minHeight: '20vh', marginTop: '10%'}}>
        <div className="createbucket">
            <div style={{display:'flex'}}>
                <Autocomplete
                    style={{minWidth: '300px'}}
                    freeSolo
                    options={Buckets}
                    renderInput={(params) => (
                    <TextField {...params} style={{margin: '0px'}} value={bucketName} onChange={handleBucketName} label="Enter bucket name" margin="normal" variant="outlined" />
                    )}
                />
                <Button color="primary" variant="contained" onClick={handleCreateBucket} disabled={bucketName.length ? false: true}><AddIcon/></Button>
            </div>
        </div>
        </div>
    )

}

export default CreateBuckets