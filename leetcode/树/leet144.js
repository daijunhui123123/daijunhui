var preorderTraversal = function (root) {
    const res = [];
    const stack = [];
    stack.push(root);

    while (stack.length) {
        const node = stack.pop();
        if (node) {
            res.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    return res;
}