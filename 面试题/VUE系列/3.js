class Vue {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        observer(this.$data)// 将this.$data变成响应式
        Proxy(this)   // +

    }
}


new Vue({
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },

})