// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot!
// @author       VadimFrolov
// @match        https://yandex.ru/*
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==

let keywords = ['читать фантастику', 'читать литрпг', 'читать про попаданцев', 'чиать фентези'];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let btn = document.querySelector('.button_theme_search');
document.getElementsByName('text')[0].value = keyword;


if (btn !== null && btn !== undefined) {
    btn.click();
} else {
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.includes('author.today')) {
            let link = links[i];
            link.setAttribute("target", "_self");
            link.click();
            break;
        }
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
