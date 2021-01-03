import * as actions from './actionTypes'


export const addBucket = bucketName => ({
    type: actions.ADD_BUCKET,
    payload: { bucketName }
})

export const createTask = (bucketName, task) => ({
    type: actions.CREATE_TASK,
    payload: { bucketName, task }
})

export const deleteTask = (bucketName, id) => ({
    type: actions.DELETE_TASK,
    payload: { bucketName, id }
})

export const editTask = (bucketName, task, id) => ({
    type: actions.EDIT_TASK,
    payload: {bucketName, task, id}
})

