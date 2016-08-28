// ==UserScript==
// @name         STReader
// @namespace    https://github.com/blackhydrogen/tms
// @version      4
// @description  Allows you to read Straits Times articles anytime.
// @author       BH
// @match        http://www.straitstimes.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
	console.log("Executing Tampermonkey Script");
	document.body.style.overflow = "visible";
	if(document.getElementById("hardPaywallModal")) {
		document.getElementById("hardPaywallModal").remove();
	}

	if(document.getElementsByClassName("modal-backdrop").length != 0) {
		document.getElementsByClassName("modal-backdrop")[0].remove();
	}

	if(document.getElementsByClassName("paywall-fixed-popup").length != 0) {
		document.getElementsByClassName("paywall-fixed-popup")[0].remove();
	}
}

bh_go();
setTimeout(bh_go, 2000);