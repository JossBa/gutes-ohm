import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../game/gameSlice'

export const store = configureStore({
  reducer: {
    game: counterSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
