<template>
  <div class="container">
    <!-- <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <p
          v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}"
        >Color This</p>
        <p v-highlight:background.delayed="'red'">Custom Directives</p>
      </div>
    </div>-->

    <!-- Part 2 Exercises Directive -->
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directive Excersice</h1>
        <button v-customOn:click="clicked">Click Me</button>
        <hr>
        <div
          class
          style="width: 100px; height: 100px; background-color: lightgreen;"
          v-customOn:mouseenter="mouseEnter"
          v-customOn:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    //   Part 2 EXCERSIES DIRECTIVE
    customOn: {
      bind(el, binding) {
        // el.onclick = function() {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("I was clicked!");
    },
    mouseEnter() {
      console.log("Mouse entered!");
    },
    mouseLeave() {
      console.log("Mouse leave!");
    }
  }
  // "local-highlight": {
  //   bind(el, binding, vnode) {
  //     let delay = 0;
  //     if (binding.modifiers["delayed"]) {
  //       delay = 3000;
  //     }
  //     if (binding.modifiers["blink"]) {
  //       let mainColor = binding.value.mainColor;
  //       let secondColor = binding.value.secondColor;
  //       let currentColor = mainColor;
  //       setTimeout(() => {
  //         setInterval(() => {
  //           currentColor == secondColor
  //             ? (currentColor = mainColor)
  //             : (currentColor = secondColor);
  //           if (binding.arg == "background") {
  //             el.style.backgroundColor = currentColor;
  //           } else {
  //             el.style.color = currentColor;
  //           }
  //         }, binding.value.delay);
  //       }, delay);
  //     } else {
  //       setTimeout(() => {
  //         if (binding.arg == "background") {
  //           el.style.backgroundColor = binding.value.mainColor;
  //         } else {
  //           el.style.color = binding.value.mainColor;
  //         }
  //       }, delay);
  //     }
  //   }
  // }
};
</script>

<style>
</style>



