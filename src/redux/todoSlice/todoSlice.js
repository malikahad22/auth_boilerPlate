// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.todo;
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
