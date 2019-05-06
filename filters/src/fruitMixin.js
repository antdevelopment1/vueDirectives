export const fruitMixin = {
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