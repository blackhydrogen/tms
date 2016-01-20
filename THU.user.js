// ==UserScript==
// @name         Telegram Hide Unread
// @namespace    https://github.com/blackhydrogen/tms
// @version      4
// @description  Hides the unread icon (blue dot).
// @author       BH
// @match        https://web.telegram.org/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var bh = {};

bh.elements = document.getElementsByClassName("im_dialog_unread");

for(var i = 0; i < bh.elements.length; i++) {
  bh.elements[i].style.visibility = "hidden";
}
