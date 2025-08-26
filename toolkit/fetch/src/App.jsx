import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './redux/postsSlice'

function App() {
  const dispatch = useDispatch()
  const { posts,
    error,
    loading } =
    useSelector(
      (state) => state.posts
    );
  // console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      <h1>posts</h1>
      {loading && <p> loading...</p>}
      {error && <p>error</p>}
      {!loading && !error && (
        <ul>
          {posts.slice(0, 19).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App