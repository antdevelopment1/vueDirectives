<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel-body quote">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "quote",
  props: ["quotes"]
};
</script>

<style>
.panel-body {
  font-family: "sans-serif";
  font-size: 24px;
  color: #6e6e6e;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>


