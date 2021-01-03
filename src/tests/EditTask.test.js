import { EDIT_TASK } from '../actions/actionTypes'
import { editTask } from '../actions/actionCRUD'


describe('Create Bucket component test', () => {
    it('should render compnent correctly without crashing', async () => {
        const action = {
            type: EDIT_TASK,
            payload: {
                bucketName: '1',
                task: 'task1',
                id: 1
            }
        }
        expect(editTask('1', 'task1',1)).toEqual(action)
    })
})