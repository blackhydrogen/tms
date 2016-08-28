// ==UserScript==
// @name         Telegram Unique Chat Background
// @namespace    https://github.com/blackhydrogen/tms
// @version      1
// @description  Custom background for specific chat groups.
// @author       BH
// @match        https://web.telegram.org/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var bh = {};

bh.go = function() {
    var chatID = bh.getChatId();
	console.log("Executing with chat ID = " + chatID);
    if(chatID == "g3426794") {
        document.body.style.backgroundColor = "#293F4C";
    }
    else {
        document.body.style.backgroundColor = "";
    }
}

bh.getChatId = function() {
    //Modified from http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
    var query_string = {};
    var query = window.location.hash.substring(5);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string.p;
};

$(window).bind('hashchange', bh.go);
bh.go();
