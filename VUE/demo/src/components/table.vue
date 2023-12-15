<template>
    <div>
        <table>
            <thead>
                <th>序号</th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in lists">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <button @click="minus(index)">-</button>
                        <span class="counter">{{ item.count }}</span>
                        <button @click="add(index)">+</button>
                    </td>
                    <td>
                        <button @click="del(index)">移除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>总价格: {{ allPrice }}</h2>
    </div>

    <div>
        <h2>购物车为空~</h2>
    </div>
</template>
  
<script>
export default {
    props: {
        lists: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            // 商品数量

        }
    },
    methods: {
        minus(index) {
            if (this.lists[index].count > 1) {
                this.lists[index].count -= 1;
            }

        },
        add(index) {
            console.log(index);
            this.lists[index].count += 1;
        },
        del(index) {
            // 删除商品
            this.lists.splice(index, 1);
        }
    }
    ,
    // 计算属性
    computed: {
        allPrice() {

            let sum = 0;
            for (let item of this.lists) {
                sum += item.price * item.count;
            }
            return sum;

        }
    }
}
</script>
  
<style lang="css" scoped>
table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
}

th,
td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
}

th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
}

.counter {
    margin: 0 5px;
}
</style>