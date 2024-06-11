
const app = Vue.createApp({
    data() {
        return {
            product: "Socks",
        }
    },
    computed: {
        description() {
            return `Amazing ${this.product} !`
        }
    }
});
