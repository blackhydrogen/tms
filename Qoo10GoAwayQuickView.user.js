// ==UserScript==
// @name         Qoo10GoAwayQuickView
// @namespace    https://github.com/blackhydrogen/tms
// @version      1
// @description  Disables Qoo10's annoying QuickView feature.
// @author       BH
// @match        http://*.qoo10.*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
	console.log("Executing");
	window.AutoQuickView = false;
}

bh_go();
setTimeout(bh_go, 2000);