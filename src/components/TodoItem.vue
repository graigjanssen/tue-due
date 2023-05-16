<template>
  <div class="todo-item">
    <div class="item-info">
      <h3 :class="status.toLowerCase()">{{title}}</h3>
      <p>{{description}}</p>
    </div>
    <div class="actions">
      <button class="btn-done" @click="markDone">Mark as {{ targetStatus }}</button>
      <button class="btn-remove" @click="remove">Remove</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true
    },
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
      this.$emit('remove', this.id);
    }
  }
})
</script>
<style scoped>
.complete {
  text-decoration: line-through;
}
</style>