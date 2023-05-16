<template>
  <div id="add-todo">
    <h2>Create TueDue</h2>
    <form @submit.prevent="addTodo" novalidate>
      <input v-model="title" type="text" placeholder="Title" required>
      <textarea rows="2" v-model="description" type="text" placeholder="Description"/>
      <span class="error" v-if="errorMessage">{{errorMessage}}</span>
      <button type="submit">Add</button>
    </form>
  </div>
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