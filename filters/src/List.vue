<template>
    <div>
        <h1>Filters and Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import {fruitMixin} from './fruitMixin.js';
export default {
    name: "list",
    mixins: [fruitMixin]
}
</script>


<style>

</style>


