// ==UserScript==
// @name         STReader
// @namespace    https://github.com/blackhydrogen/tms
// @version      1
// @description  Allows you to read Straits Times articles anytime.
// @author       BH
// @match        http://www.straitstimes.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
if(document.getElementById("hardPaywallModal")) {
    document.body.style.overflow = "visible";
    document.getElementsByClassName("modal-backdrop")[0].remove();
    document.getElementById("hardPaywallModal").remove();
}