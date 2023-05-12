<template>
  <h3>Baby steps...</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Todo } from '@/types/Todo';

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[],
    }
  }
})
</script>
