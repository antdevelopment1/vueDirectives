<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" v-bind:key="index">{{quote}}</quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  name: "quote-grid",
  props: ["quotes"],
  components: {
    quote: Quote
  }
};
</script>

<style>
</style>


