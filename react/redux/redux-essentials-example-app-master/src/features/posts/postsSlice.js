import {createSlice, nanoid} from '@reduxjs/toolkit'
import {sub} from 'date-fns'

const initialState = [
    {
        id: '1',
        title: 'First Post!',
        content: 'Hello!',
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
    },
    {
        id: '2',
        title: 'Second Post',
        content: 'More text',
        date: sub(new Date(), {minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0,
        },
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdd: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        date: new Date().toISOString(),
                        content,
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                        },
                    }
                }
            }
        },
        postUpdate(state, action) {
            const {id, title, content} = action.payload
            const post = state.find(p => p.id === id)
            if (post) {
                post.title = title
                post.content = content
            }
        },
        reactionAdded(state, action) {
            const {postId, reactions} = action.payload
            const post = state.find(p => p.id === postId)
            if (post) {
                post.reactions[reactions]++
            }
        }
    }
})

export const {postAdd, postUpdate, reactionAdded} = postsSlice.actions

export default postsSlice.reducer
