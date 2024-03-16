const list = [
    {
        id: 1001,
        parentId: 0,
        name: "AA",
    },
    {
        id: 1002,
        parentId: 1001,
        name: "BB",
    },
    {
        id: 1003,
        parentId: 1001,
        name: "CC",
    },
    {
        id: 1004,
        parentId: 1003,
        name: "DD",
    },
    {
        id: 1005,
        parentId: 1003,
        name: "EE",
    },
    {
        id: 1006,
        parentId: 1002,
        name: "FF",
    },
    {
        id: 1007,
        parentId: 1002,
        name: "GG",
    },
    {
        id: 1008,
        parentId: 1004,
        name: "HH",
    },
    {
        id: 1009,
        parentId: 1005,
        name: "II",
    },
];

// function b(data) {
//     const res = [];

//     data.forEach(item => {
//         const parent = data.find(node => node.id === item.parentId)
//         if (parent) {
//             parent.children = parent.children || []
//             parent.children.push(item)

//         } else {
//             res.push(item)
//         }
//     });

//     return res
// }
// b(list)

function listToTree(data) {
    // * 先生成parent建立父子关系
    const obj = {};
    data.forEach((item) => {
        obj[item.id] = item;
    });
    // * obj -> {1001: {id: 1001, parentId: 0, name: 'AA'}, 1002: {...}}
    // console.log(obj, "obj")
    const parentList = [];
    data.forEach((item) => {
        const parent = obj[item.parentId];
        if (parent) {
            // * 当前项有父节点
            parent.children = parent.children || [];
            parent.children.push(item);
        } else {
            // * 当前项没有父节点 -> 顶层
            parentList.push(item);
        }
    });
    return parentList;
}


console.log(b(list))