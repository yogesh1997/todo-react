import { DELETE_TASK } from '../actions/actionTypes'
import { deleteTask } from '../actions/actionCRUD'


describe('Create Bucket component test', () => {
    it('should render compnent correctly without crashing', async () => {
        const action = {
            type: DELETE_TASK,
            payload: {
                bucketName: '1',
                id: 1
            }
        }
        expect(deleteTask('1',1)).toEqual(action)
    })
})