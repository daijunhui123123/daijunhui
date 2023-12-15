<template>
    <div>
        <h2>沸点页面</h2>
        <button @click="goClassPage">去课程页面</button>

    </div>
</template>

<script>
// import { useRouter } from "vue-router";
export default {
    methods: {
        goClassPage() {
            // this.$router.push('/class')
            // this.$router.push({path: '/class', query: { id: 123 }})
            this.$router.push({
                name: 'class'
            })
                (
                    {
                        path: '/class',
                        query: { id: 123 }
                    })
        }
    },
}
</script>

<style lang="css" scoped></style>