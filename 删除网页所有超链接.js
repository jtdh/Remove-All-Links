// ==UserScript==
// @name         删除网页所有超链接
// @version      0.1
// @description  删除网页所有超链接并保留文本
// @author       jtdh
// @match        https://github.com/jtdh/Remove-All-Links
// ==/UserScript==

(function() {
    'use strict';

    // 获取网页所有超链接元素
    var links = document.querySelectorAll('a');

    // 删除网页所有超链接并保留文本
    links.forEach(function(link) {
        var textNode = document.createTextNode(link.textContent);
        link.parentNode.replaceChild(textNode, link);
    });
})();
