# 多数元素

- 排序 O(nlogn)  快排   1/2
- 空间换时间 Map +count  +major  值作为key  major 值作为key


## 面试官想了解什么

- 算法简单   利用排序
- 能不能优化一下  具体开发  o(n)  空间换时间
- 背后的算法思想是？？  投票算法
    投票
    nums[i]   count 1
    nums[i+1]   count 0
    nums[i+2]   count 1
    nums[i+3]   count 2
   count 边界  尝试一下个数
- 数组众数问题  可以使用投票算法， O（n）时间复杂度，空间复杂度O（1）票亮解决