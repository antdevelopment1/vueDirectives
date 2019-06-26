<template>
  <div id="container">
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
export default {
  name: "app",
  data: function() {
    return {
      quotes: ["Just a quote to see something!"],
      maxQuotes: 10
    };
  },
  components: {
    quoteGrid: QuoteGrid
  }
};
</script>

<style>
</style>
