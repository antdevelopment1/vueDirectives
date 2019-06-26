<template>
  <div id="container">
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
      <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
export default {
  name: "app",
  data: function() {
    return {
      quotes: ["Just a quote to see something!"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
      console.log(" I have been deleted");
    }
  },
  components: {
    quoteGrid: QuoteGrid,
    newQuote: NewQuote
  }
};
</script>

<style>
</style>
