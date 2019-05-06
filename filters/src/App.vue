<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: "hello there!"
    }
    
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
