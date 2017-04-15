// ==UserScript==
// @name         BOCLoginFix
// @namespace    https://github.com/blackhydrogen/tms
// @version      3
// @description  Fixes Bank of China Personal Online Banking's faulty tab-indexes.
// @author       BH
// @match        https://ap.ebs.bankofchina.com/login_sin.html*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function bh_go() {
    console.log("Trying to execute tampermonkey script");
    if(!document.getElementById("SecEditBox")) {
        console.log("Tampermonkey script failed to execute.");
        return;
    }
	document.getElementById("SecEditBox").setAttribute("tabIndex", "2");
	document.getElementById("SMSBox").setAttribute("tabIndex", "3");
	document.getElementById("EtokenBoxOtp").setAttribute("tabIndex", "3");
    console.log("Tampermonkey script executed successfully.");
}

bh_go();
setTimeout(bh_go, 2000);
