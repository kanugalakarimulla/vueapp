<template>
    <div>
        <h1 class="text-center">Simple TODO</h1>
        <div class="container">
            <div class="text-center">
                <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
                <input placeholder="Enter Item" v-model="text" class="custom-input" v-on:keyup.enter="addTodoItem" />
                <button class="button" @click="addTodoItem">Save</button>
                <div class="m-t-20">
                    <select name="status" id="status" v-model="status" class="custom-input">
                <option value="All">All</option>
                <option value="1">Completed</option>
                <option value="0">Pending</option>
              </select>
                </div>
            </div>
            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="item in computed_items" :key="item.id">
                        <div class="float-left">
                            <span v-if="item.isCompleted">
                    <del>{{ item.text }}</del>
                  </span>
                            <span v-else>{{ item.text }}</span>
                        </div>
                        <div class="float-right">
                            <span v-if="item.isCompleted" class="badge-green">Done</span>
                            <button v-if="!item.isCompleted" class="button button-sm text-right" @click="changeTodoStatus(item.id)">
                    Mark as Complete
                  </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "TodoApp",
  data() {
    return {
      text: "",
      status: "All",
      errorMessage: ""
    };
  },
  methods: {
    addTodoItem() {
      if (this.text === "") {
        this.errorMessage = "Item should not be empty.";
        return false;
      }
      this.$store.commit({ type: "addTodoItem", text: this.text });
      this.text = "";
    },
    changeTodoStatus(id) {
      this.$store.commit({ type: "changeTodoStatus", id: id });
    }
  },
  computed: {
    computed_items() {
      let todoItems = this.$store.state.todoItems;
      let filteredItems = todoItems;
      if (this.status !== "All") {
        filteredItems = todoItems.filter(
          todoItem => todoItem.isCompleted === parseInt(this.status)
        );
      }
      return filteredItems;
    }
  }
};
</script>