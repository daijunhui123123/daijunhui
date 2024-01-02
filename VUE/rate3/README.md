# 裕民

-  简历
     Boss自聘
     -  前端全栈   vue  年前正式面试
     - ai 岗位  绘画   
     杭州 海康卫视


- VUE  写 
   - 组件化  评分
   - 显示和数据  4.5分
   -加一个功能   要能点击星星评分  click
   -鼠标经过  显示  星星


- rate 组件
   - 它是一个基本每个电商项目都有的组件，通用组件，手写了一下，挺复杂的
   - vue开发要忠于数据驱动
       父组件给我们 value   ，rate  组件mouseover  mouseout  私有数据  width
       来驱动，当click 打扮分后   需要汇报给父组件，父组件数据和子组件状态的统一
   - props + emits
     子组件不可以直接修改props的，vue 数据除v-model 是单向的
     如果要改，遵守流程，就是emit 
     - 父组件会以自定义事件的形式，接受一个事件，并接受传参，同步状态
       @update-rate="updateRate"
     - 子组件通过defineEmits（['update-rate']）  emits 数组
     - emits('update-rate', num)