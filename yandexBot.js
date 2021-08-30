// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot!
// @author       VadimFrolov
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["гобой", "фагот", "балабан", "флюгельгорн"];
let btn = document.querySelectorAll('button.mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
document.getElementById("text").value = keyword;


if (btn !== undefined) {
    btn.click();
}else{
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('muzinstru.ru')){
            let link = links[i];
            //link.removeAttribute('target');
            link.click();
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
