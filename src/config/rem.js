(function (doc, win) {
    var docEl = doc.documentElement,//拿到HTML标签
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth)  return;
            console.log(clientWidth);
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
        if (!docEl.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        docEl.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)