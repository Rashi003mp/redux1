import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        return res.json()
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (buider) => {
        buider
            .addCase(fetchPosts.pending, (state) => {
                state.loading = false
                state.error = null
            })
            .addCase(fetchPosts.fulfilled,(state,action)=>{
                state.loading =false
                state.posts=action.payload
            })
            .addCase(fetchPosts.rejected,(state,action)=>{
                state.loading =false
                state.error ='error'
            })

    }
})

export default postsSlice.reducer