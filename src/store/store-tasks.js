import Vue from 'vue'

const state = {

    tasks: {
        'ID1': {
            name: 'do exercises', 
            completed: false, 
            dueDate: '01/02/2020',
            dueTime: '18:30'
        },
        'ID2': {
            name: 'do homework', 
            completed: false, 
            dueDate: '20/12/2020',
            dueTime: '11:30'
        },
        'ID3': {
            name: 'do smth else', 
            completed: false, 
            dueDate: '01/05/2020',
            dueTime: '15:30' 
        },
    }
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates);
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    }
}

const actions = { 
    updateTask({commit}, payload) {
        commit('updateTask', payload)
    },
    deleteTask({commit}, id) {
        commit('deleteTask', id)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}