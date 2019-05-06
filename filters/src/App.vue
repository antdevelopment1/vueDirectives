<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase}}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
        </ul>
        <hr>
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
import List from  './List';
import {fruitMixin} from './fruitMixin.js';
export default {
  name: 'app',
  mixins: [fruitMixin],
  data () {
    return {
      text: "hello there!"
    } 
  },
  components: {
    List
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style>

</style>
