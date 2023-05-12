<template>
  <div class="home">
    <h1>TueDue</h1>
    <h5>The Vue app just for doing stuff on Tuesday</h5>
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
