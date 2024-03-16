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

  // 这个是新手上班后会遇到的难题
  // 树状列表  文件夹  省市区联动
  //  列表  数据库   后端查查出来的所有项 
  // 后端不会给 你转型  树状列表等是前端需求
  parentid 树  