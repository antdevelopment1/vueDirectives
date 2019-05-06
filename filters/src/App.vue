<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase}}</p>
        <hr>
        <input v-model="fruitsText">
        <ul>
          <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: "hello there!",
      fruits:["Apple", "Banana", "Mango", "Melon"],
      fruitsText: ''
    }
    
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits()  {
      return this.fruits.filter((element)=> {
        return element.match(this.fruitsText);
      });
    }
  }
}
</script>

<style>

</style>
