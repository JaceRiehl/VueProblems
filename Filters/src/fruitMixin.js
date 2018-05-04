export const fruitMixin = {
    data() {
        return {
            text: "Hello There",
            fruits: ['Apple', 'Mango', 'Pineapple', 'Banana'],
            filterText: ''
        }
    },
    computed: {
        filterFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
};