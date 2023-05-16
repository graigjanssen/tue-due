<template>
  <div class="home">
    <header class="header">
      <h1 class="title">TueDue</h1>
      <h5 class="subtitle">The Vue app just for doing stuff on Tuesday</h5>
    </header>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from '@/components/TodoList.vue';

@Options({
  components: {
    TodoList,
  },
})
export default class HomeView extends Vue {}
</script>
