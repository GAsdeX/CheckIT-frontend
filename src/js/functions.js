'use strict';

var $ = require('jquery');

module.exports = {
	/*
	 * Functions to be exported go here. Format:
	 * exportName: functionName
	 */
};

// Code goes here

document.querySelector(".remove-photo").onclick = function() {
	console.log('Profile\'s photo has to be removed');
	document.querySelector(".user-photo").classList.add("default");
}
document.querySelector(".upload-photo").onclick = function() {
	console.log('Profile\'s photo has to be uploaded to the server');
	document.querySelector(".user-photo").classList.remove("default");
}