<template>
    <div>

        <ItemContainer parentComponent="item" />
    </div>
</template>

<script>
import ItemContainer from '@/components/itemContainer'
import { mapActions } from 'vuex'
export default {
    components: { ItemContainer },
    created() {// 生命周期函数  再页面加载的过程中会制动触发
        this.getQuestionListAction()
    },
    methods: {
        ...mapActions(['getQuestionListAction']),
    }
}
</script>

<style lang="less" scoped></style>