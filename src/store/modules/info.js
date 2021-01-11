const state = {
    todos: [],
    nowStatus: 'all'
}

const mutations = {
    createTodo(state, todo) {
        state.todos.push(todo)
    },
    checkTodo(state, receiveId) {
        state.todos[receiveId].isDone = !state.todos[receiveId].isDone
    },
    deleteTodo(state, receiveId) {
        for (let i = receiveId; i < state.todos.length; i++) {
            state.todos[i].id--
        }
        state.todos.splice(receiveId, 1)
    },
    status(state, value) {
        state.nowStatus = value
    }
}

const getters = {
    todos: state => state.todos,
    nowStatus: state => state.nowStatus
}

const actions = {
    
}



export default {
    state,
    mutations,
    getters,
    actions
}