<template>
  <div class="todo-item">
    <h3>{{title}}</h3>
    <h5>Status: {{status}}</h5>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: true,
      default: 'Incomplete',
    }
  }
}
</script>