<template>
  <AddTodoItem @add-todo="addTodo"/>
  <ul v-if="todos.length > 0">
    <Todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :description="todo.description"
      @remove="removeTodo"
    />
  </ul>
  <p v-else>Your TueDue list is empty!</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/types/Todo';
import TodoItem from '@/components/TodoItem.vue';
import AddTodoItem from '@/components/AddTodoItem.vue';

export default defineComponent({
  components: {
    TodoItem,
    AddTodoItem,
  },
  data() {
    return {
      todos: [] as Todo[],
    }
  },
  methods: {
    addTodo (todo: Todo) {
      this.todos.push(todo);
    },
    removeTodo () {
      console.log('removeTodo!');
      
    }
  }
})
</script>
