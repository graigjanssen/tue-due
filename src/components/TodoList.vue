<template>
  <AddTodoItem @add-todo="addTodo"/>
  <div id="todo-list">
    <div v-if="todos.length > 0">
      <Todo-item
        v-for="todo in todos"
        :key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :description="todo.description"
        @remove="removeTodo"
      />
    </div>
    <p class="empty-list" v-else>Your TueDue list is empty!</p>
  </div>
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
    addTodo (todo: Todo): void {
      this.todos.push(todo);
    },
    removeTodo (id: number): void {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
    }
  }
})
</script>
