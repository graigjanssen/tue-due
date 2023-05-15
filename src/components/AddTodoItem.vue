<template>
  <h3>Create TueDue</h3>
  <form @submit.prevent="addTodo" novalidate>
    <input v-model="title" type="text" placeholder="Title" required>
    <input v-model="description" type="text" placeholder="Description">
    <span v-if="errorMessage">{{errorMessage}}</span>
    <button type="submit">Add</button>
    
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/types/Todo';

export default defineComponent({
  data() {
    return {
      title: '',
      description: '',
      errorMessage: '',
      nextId: 1 
    }
  },
  methods: {
    addTodo () {
      if (!this.title) {
        this.errorMessage = 'Title is required';
      } else {
        const todo: Todo = {
          id: this.nextId,
          title: this.title,
          description: this.description
        };
        this.$emit('add-todo', todo);
        this.title = '';
        this.description = '';
        this.errorMessage = '';
        this.nextId++;
      }
    }
  }
})
</script>