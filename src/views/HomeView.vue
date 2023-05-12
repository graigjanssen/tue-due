<template>
  <div class="home">
    <h1>TueDue</h1>
    <h5>The Vue app just for doing stuff on Tuesday</h5>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
