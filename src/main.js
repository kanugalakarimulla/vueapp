import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
Vue.use(Vuex)

Vue.config.productionTip = false

function uniqueId() {
    return (
        Date.now().toString(36) +
        Math.random()
        .toString(36)
        .substr(2)
    );
}
const store = new Vuex.Store({
    state: {
        todoItems: [{
                id: uniqueId(),
                text: "Item 1",
                isCompleted: 0
            },
            {
                id: uniqueId(),
                text: "Item 2",
                isCompleted: 0
            }
        ]
    },
    mutations: {
        addTodoItem(state, payload) {
            const todoData = {
                id: uniqueId(),
                text: payload.text,
                isCompleted: 0
            };
            state.todoItems = [...state.todoItems, todoData];
        },
        changeTodoStatus(state, payload) {
            return state.todoItems.map(todoItem => {
                todoItem.id === payload.id && (todoItem.isCompleted = 1);
                return todoItem;
            });
        }
    },
    computed: {

    }
})
new Vue({
    render: h => h(App),
    store: store,
}).$mount('#app')