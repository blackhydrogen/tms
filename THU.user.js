// ==UserScript==
// @name         Telegram Hide Unread
// @namespace    https://github.com/blackhydrogen/tms
// @version      1
// @description  Hides the unread icon (blue dot).
// @author       BH
// @match        https://web.telegram.org/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(".im_dialog_unread").css("visibility", "hidden");
