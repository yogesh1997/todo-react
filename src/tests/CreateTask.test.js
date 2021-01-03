import { CREATE_TASK } from '../actions/actionTypes'
import { createTask } from '../actions/actionCRUD'


describe('Create Bucket component test', () => {
    it('should render compnent correctly without crashing', async () => {
        const action = {
            type: CREATE_TASK,
            payload: {
                bucketName: '1',
                task: 'task1'
            }
        }
        expect(createTask('1','task1')).toEqual(action)
    })
})