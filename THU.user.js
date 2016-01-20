// ==UserScript==
// @name         Telegram Hide Unread
// @namespace    https://github.com/blackhydrogen/tms
// @version      6
// @description  Hides the unread icon (blue dot).
// @author       BH
// @match        https://web.telegram.org/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

document.styleSheets[0].addRule(".im_dialog_unread", "{ visibility: hidden }");
document.styleSheets[0].addRule(".icon-message-status", "{ visibility: hidden }");
