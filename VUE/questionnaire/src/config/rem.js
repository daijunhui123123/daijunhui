(function (doc, win) {
    //用js动态修改页面跟字体大小
    var docEl = doc.documentElement;
    var recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
    }
    doc.addEventListener('DOMContentLoaded', recalc);//获取屏幕的大小
    win.addEventListener('resize', recalc);//  监听屏幕变大

})(document, window)