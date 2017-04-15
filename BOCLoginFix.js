// ==UserScript==
// @name         BOCLoginFix
// @namespace    https://github.com/blackhydrogen/tms
// @version      1
// @description  Fixes Bank of China Personal Online Banking's faulty tab-indexes.
// @author       BH
// @match        https://ap.ebs.bankofchina.com/login_sin.html*
// @require      http://code.jquery.com/jquery-3.2.1.slim.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
	console.log("Executing Tampermonkey Script");
	$("#SecEditBox").attr("tabIndex", "2");
	$("#SMSBox").attr("tabIndex", "3");
}

bh_go();
setTimeout(bh_go, 2000);
