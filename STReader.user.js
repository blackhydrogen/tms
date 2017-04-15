// ==UserScript==
// @name         STReader
// @namespace    https://github.com/blackhydrogen/tms
// @version      5
// @description  Allows you to read Straits Times articles anytime.
// @author       BH
// @match        http://www.straitstimes.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
	console.log("Executing Tampermonkey Script");

    if(document.getElementsByClassName("field-name-body").length == 1) {
        var e = document.createElement("span");
        e.className = "field-name-body";
        document.head.appendChild(e);
        e = document.createElement("span");
        e.className = "group-story-timestamp";
        document.head.appendChild(e);
        e = document.createElement("span");
        e.className = "media-entity";
        document.head.appendChild(e);
    }

    if(!!document.body) {
        document.body.style.overflow = "visible";
        if(document.getElementById("hardPaywallModal")) {
            document.getElementById("hardPaywallModal").remove();
        }

        if(document.getElementsByClassName("modal-backdrop").length !== 0) {
            document.getElementsByClassName("modal-backdrop")[0].remove();
        }

        if(document.getElementsByClassName("paywall-fixed-popup").length !== 0) {
            document.getElementsByClassName("paywall-fixed-popup")[0].remove();
        }
    }
}

bh_go();
for(var i = 1; i <= 10; i++) {
    setTimeout(bh_go, i * 1000);
}