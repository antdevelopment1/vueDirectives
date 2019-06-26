<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" v-bind:key="index" @click.native="deleteQuote">{{quote}}</quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  name: "quote-grid",
  props: ["quotes"],
  components: {
    quote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style>
</style>


