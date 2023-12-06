// 数据存储的结构
const MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];

}

MyQueue.prototype = {
    push: function (val) {
        this.stack1.push(val);

    },//FIFO
    pop: function () {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    },// 拿到最front
    peek: function () {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        // return this.stack2[this.stack2.length - 1];
        const stack2Len = this.stack2.length;
        return stack2Len && this.stack2[stack2Len - 1];

    },
    empty: function () {
        return this.stack1.length === 0 && this.stack2.length === 0;

    }

} 