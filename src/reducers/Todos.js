import * as actionTypes from '../actions/actionTypes'


const defaultState = {
    bucketNames: [],
    tasks: {}
}

const TodosReducer = (state = defaultState, action) => {

    switch(action.type){
        case actionTypes.ADD_BUCKET: {
            const bucketName = action.payload.bucketName
            return {...state, bucketNames: [...state.bucketNames,bucketName]}
        }

        case actionTypes.CREATE_TASK: {
            const bucketName = action.payload.bucketName
            const task = action.payload.task
            let updatedTasks = state.tasks[bucketName] ? state.tasks[bucketName]:[]
            updatedTasks.push(task)
            return {
                ...state,
                tasks: { ...state.tasks,[bucketName]: [...updatedTasks] }
            }
        }

        case actionTypes.DELETE_TASK: {
            const bucketName = action.payload.bucketName
            const id = action.payload.id
            let updatedTasks = state.tasks[bucketName] ? state.tasks[bucketName]:[]
            updatedTasks.splice(id,1)
            return {
                ...state,
                tasks: { ...state.tasks,[bucketName]: [...updatedTasks] }
            }
        }

        case actionTypes.EDIT_TASK: {
            const bucketName = action.payload.bucketName
            const id = action.payload.id
            const task = action.payload.task
            let updatedTasks = state.tasks[bucketName] ? state.tasks[bucketName]:[]
            updatedTasks[id] = task
            return {
                ...state,
                tasks: {...state.tasks, [bucketName]: [...updatedTasks]}
            }
        }

        default: {
            return state
        }
    }
}

export default TodosReducer