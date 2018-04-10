'use strict';

var $ = window.$ = window.jQuery = require('jquery');
var functions = require('./functions');

/*
 * Exported in 'functions.js' functions can be used here:
 * functions.exportName()
 */

$(function () {

	// Code goes here
    document.querySelector(".remove-photo").onclick = function() {
        console.log('Profile\'s photo has to be removed');
        document.querySelector(".user-photo").classList.add("default");
    };
    document.querySelector(".upload-photo").onclick = function() {
        console.log('Profile\'s photo has to be uploaded to the server');
        document.querySelector(".user-photo").classList.remove("default");
    };

});
