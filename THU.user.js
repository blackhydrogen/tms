// ==UserScript==
// @name         Telegram Hide Unread
// @namespace    https://github.com/blackhydrogen/tms
// @version      5
// @description  Hides the unread icon (blue dot).
// @author       BH
// @match        https://web.telegram.org/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var bh = {};

bh.counter = 0;
bh.go = function() {
    bh.counter++;
    $(".im_dialog_unread").css("visibility", "hidden");
    
    if(bh.counter != 20) {
        setTimeout(bh.go, 250);
    }
};

setTimeout(bh.go, 250);
