import {configureStore} from '@reduxjs/toolkit'
import postsreducer from '../redux/postsSlice'

 export const store=configureStore({
    reducer:{
        posts:postsreducer,
    },
 })