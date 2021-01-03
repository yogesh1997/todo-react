import { ADD_BUCKET } from '../actions/actionTypes'
import { addBucket } from '../actions/actionCRUD'


describe('Create Bucket component test', () => {
    it('should render compnent correctly without crashing', async () => {
        const action = {
            type: ADD_BUCKET,
            payload: {
                bucketName: 'bucket1',
            }
        }
        expect(addBucket('bucket1')).toEqual(action)
    })
})