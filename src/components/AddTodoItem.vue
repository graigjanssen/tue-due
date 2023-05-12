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

import { Todo } from '@/types/Todo';

export default {
  data() {
    return {
      title: '',
      description: '',
      status: 'Incomplete',
      errorMessage: '' 
    }
  },
  methods: {
    addTodo () {
      if (!this.title) {
        this.errorMessage = 'Title is required';
      } else {
        const todo: Todo = {
          title: this.title,
          description: this.description,
          status: 'Incomplete'
        };
        this.$emit('add-todo', todo);
        this.title = '';
        this.description = '';
        this.errorMessage = '';
      }
    }
  }
}
</script>