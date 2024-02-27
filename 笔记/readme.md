
`outline` 是一个 CSS 属性，用于设置元素的轮廓。轮廓是指元素边框，包括边框的宽度、颜色和样式。`outline` 属性可以单独设置元素的轮廓，也可以与 `border` 属性一起使用，以组合出更丰富的边框效果。

例如，以下代码将元素的边框宽度设置为 2 像素，颜色为红色，样式为实线：
```
outline: 2px solid red;
```
此外，`outline` 属性还有以下几种取值方式：

* `outline-width`：边框宽度
* `outline-style`：边框样式，包括 `none`（无）、`solid`（实线）、`dashed`（虚线）、`dotted`（点线）、`double`（双线）等
* `outline-color`：边框颜色

例如，以下代码将元素的边框宽度设置为 2 像素，颜色为红色，样式为虚线：
```
outline: 2px dashed red;
```

 -ms-text-size-adjust: 100%
    -webkit-text-size-adjust: 100%  禁止字体调正

`-webkit-overflow-scrolling: touch` 是 CSS 中的一个前缀属性，用于指定在 WebKit 浏览器（如 Safari 和 Chrome）中实现滚动时，是否应该使用户触摸屏幕。当设置为 `touch` 时，表示在滚动时会使用户触摸屏幕；当设置为 `none` 时，表示在滚动时不会使用户触摸屏幕。
在这个例子中，将 `-webkit-overflow-scrolling` 设置为 `touch`，表示在滚动时会使用户触摸屏幕，从而实现更加自然的滚动效果。

overflow-y: auto 是 CSS 中的一个属性，用于设置当内容超出元素框时如何处理。当内容超出元素框时，如果 overflow-y 属性设置为 auto，元素会自动显示滚动条；如果设置为 hidden，元素会隐藏滚动条；如果设置为 scroll，元素会始终显示滚动条。
在这个例子中，将 overflow-y 属性设置为 auto，表示当内容超出元素框时，会自动显示滚动条。

`box-sizing: border-box` 是 CSS 中的一个属性，用于指定元素的内容、边框和 padding 的大小如何计算。当将 `box-sizing` 属性设置为 `border-box` 时，元素的内容、边框和 padding 的大小都会被计算在元素的内容区域中，而不是包含边框和 padding 的外部区域。
在这个例子中，将 `box-sizing` 属性设置为 `border-box`，表示将元素的内容、边框和 padding 的大小计算在元素的内容区域中，而不是包含边框和 padding 的外部区域。这可以避免在设置元素的大小和位置时出现尺寸不一致的问题。



面试总结  



开始介绍自己的项目


说说自己的项目中的难点  



路由守卫  

