import Vue from "vue";
import App from "./App.vue";
Vue.filter("calculateLength", value => {
  return value + "(" + value.length + ")";
});

// Vue.filter('to-lowercase', function(value) {
//   return value.toLowerCase();
// })

// Global mixin used everywhere
// Vue.mixin({
//   created() {
//     console.log('Global Mixin - Created Hook')
//   }
// })

new Vue({
  el: "#app",
  render: h => h(App)
});
