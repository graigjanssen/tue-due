<template>
  <div class="todo-item">
    <h3>{{title}}</h3>
    <h5>Status: {{status}}</h5>
    <p>{{description}}</p>
    <div class="actions">
      <button @click="markDone">Mark as {{ targetStatus }}</button>
      <button @click="remove">Remove</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    }
  },
  data() {
    return {
      status: 'Incomplete'
    }
  },
  computed: {
    targetStatus () {
      return this.status === 'Incomplete' ? 'Complete' : 'Incomplete';
    }
  },
  methods: {
    markDone() {
      this.status = this.targetStatus;
    },
    remove() {
      this.$emit('remove');
    }
  }
})
</script>