import React from 'react'
import { useSelector } from 'react-redux'
import Bucket from '../Bucket'

const BucketLists = () => {
    let Buckets = useSelector(state => state.todo.bucketNames)

   return (
       <>
        {
            Buckets.map(bucket => (
                <Bucket key={bucket} bucketName={bucket}/>
            ))
        }
       </>
   )
}

export default BucketLists