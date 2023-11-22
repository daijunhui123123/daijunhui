const arr = ['里皮', '梅西', '劳塔罗', '圣马丁']
// 解构 一次性的结构出来
// const [captain]=agt;
const [captain, ...player] = arr

console.log(captain)// 里皮  ['梅西','劳塔罗','圣马丁']