// ==UserScript==
// @name         GoAwayFunoff
// @namespace    https://github.com/blackhydrogen/tms
// @version      2
// @description  Removes annoying 9gag funoff promo.
// @author       BH
// @match        https://9gag.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
	console.log("Executing Tampermonkey Script");

	var e = document.getElementsByClassName("funoff");

	for (var i = 0; i < e.length; i++) {
		e[i].remove();
	}
}

bh_go();
setTimeout(bh_go, 2000);