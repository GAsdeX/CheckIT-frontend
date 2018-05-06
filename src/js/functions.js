'use strict';


module.exports = {
	/*
	 * Functions to be exported go here. Format:
	 * exportName: functionName
	 */
    resetValues: resetValues,
    toText: toText,
    closeModal: closeModal,
    openModal: openModal

};

// Code goes here


function resetValues() {
    document.getElementById("current-password").value = ""; //current password must be entered obligatorily
    document.getElementById("new-password").value = "";
    document.getElementById("new-password-confirmation").value = "";
    document.getElementById("current-password-shadow").value = "";
    document.getElementById("new-password-shadow").value = "";
    document.getElementById("new-password-confirmation-shadow").value = "";
}
function toText(selector) {
    document.getElementById(selector + '-shadow').value = document.getElementById(selector).value;
}
function toPassword(selector) {
    selector += "-shadow";
    var current = selector.split('-');
    current.pop();
    selector = current.join("-");
    document.getElementById(selector).value = document.getElementById(selector + '-shadow').value;
}
function closeModal(modalClass) {
    //console.log("modal close #" + modalId);
    //document.querySelector("body").classList.remove("modal-fade");
    var selector = "." + modalClass + ".overlay";
    document.querySelector(selector).classList.remove("active");
    //document.querySelector(selector).style.top = "";
}
function openModal(modalClass) {
    var openedModalId = modalClass.substr(1);
    var Top = window.pageYOffset + "px";
    /*openedModalId = modalId;*/
    var selector = ".overlay" + modalClass;

    document.querySelector(selector).classList.add("active");
}
