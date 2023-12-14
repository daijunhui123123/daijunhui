<template>
    <div class="list">
        <ul>
            <li v-for="(item, index) in lists">{{ item }}</li>
            <li>vue</li>

        </ul>
    </div>
</template>

<script>
export default {
    props: {
        lists: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="css" ></style>