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
export default {
    name: "list",
    data() {
        return {
            fruits:  ["Apple",  "Banana", "Mango", "Melo"],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter( (element) => {
                return element.match(this.filterText);
            });
        }
    }
}
</script>


<style>

</style>


