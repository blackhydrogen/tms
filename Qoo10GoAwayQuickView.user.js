// ==UserScript==
// @name         Qoo10GoAwayQuickView
// @namespace    https://github.com/blackhydrogen/tms
// @version      2
// @description  Disables Qoo10's (.sg) annoying QuickView feature.
// @author       BH
// @match        http://*.qoo10.sg/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
	console.log("Executing Tampermonkey Script");
	window.AutoQuickView = false;
}

bh_go();
setTimeout(bh_go, 2000);