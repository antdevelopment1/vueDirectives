<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>

        <!-- Build a global filter which reverses the text it is applied on -->
        <p>{{firstText | reverse}}</p>
        <!-- Build a global filter which counts the length of a word and appends it -->
        <p>{{ secondText | calculateLength }}</p>
        <!-- Do the same as in Excersies 1 and 2, now with computed Properties -->
        <p>{{reverse}}</p>
        <p>{{ lengthAware }}</p>
        <!-- Share the computed Property rebuilding excersies 2 via a mixin -->

        <!-- Not a part of the above sections -->
        <!-- <p>{{ text | toUppercase | to-lowercase}}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
        </ul>
        <hr>
        <list></list>-->
      </div>
    </div>
  </div>
</template>

<script>
// import List from "./List";
// import { fruitMixin } from "./fruitMixin.js";
import { lengthAwareMixin } from "./lengthAwareMixin";
export default {
  name: "app",
  mixins: [],
  data() {
    return {
      firstText: "Some text",
      secondText: "April"
    };
  },
  filters: {
    reverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reversed() {
      return this.firstText
        .split("")
        .reverse()
        .join("");
    }
  }
  // mixins: [fruitMixin],
  // data() {
  //   return {
  //     text: "hello there!"
  //   };
  // },
  // components: {
  //   List
  // },
  // filters: {
  //   toUppercase(value) {
  //     return value.toUpperCase();
  //   }
  // }
};
</script>

<style>
</style>
