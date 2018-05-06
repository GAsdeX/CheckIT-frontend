'use strict';

var functions = require('./functions');
require('./app');
/*
 * Exported in 'functions.js' functions can be used here:
 * functions.exportName()
 */

(function () {
    functions.resetValues();
	// Code goes here
		var userPassword = "dummy-password"; //User Password must be provided by back-end
		var openedModalId;
		var Top;
	function closeModal(modalClass) {
    	//console.log("modal close #" + modalId);
    	//document.querySelector("body").classList.remove("modal-fade");
    	var selector = "." + modalClass + ".overlay";
    	document.querySelector(selector).classList.remove("active");
    	//document.querySelector(selector).style.top = "";
    }
    function openModal(modalClass) {
        openedModalId = modalClass.substr(1);
    	Top = window.pageYOffset + "px";
    	/*openedModalId = modalId;*/
    	var selector = ".overlay" + modalClass;

    	document.querySelector(selector).classList.add("active");
    }
    document.getElementById("profile-password").value = userPassword;
    document.querySelector(".change-password").onclick = function() {
    	openModal(".change-password-form");
    }
    var closeModalArray = document.querySelectorAll(".close-modal");
    var overlayArray = document.querySelectorAll(".overlay");
    for (var counter2 = 0; counter2 < closeModalArray.length; counter2++) {
        closeModalArray[counter2].addEventListener('click', function(event) {
            closeModal(this.parentNode.parentNode.id);
        });
        overlayArray[counter2].addEventListener('click', function(event) {
            if (event.target.classList.contains("overlay")) {
                closeModal(openedModalId);
            }
        });
    }
    //console.log(closeModalArray);
    /*document.querySelector(".close-modal").onclick = function(event) {
    	console.log(this.parentNode.id);
    	closeModal(this.parentNode.id);
    	console.log(openedModalId);
    }
    document.querySelector(".overlay").onclick = function(event) {
    	if (event.target.classList.contains("overlay")) {
    		closeModal(openedModalId);
    	}

    }*/
    document.getElementById("save-password-changes").onclick = function() {
    	var currentPass = {}, newPass = {};
    	currentPass.val = document.getElementById("current-password").value;
    	currentPass.notNull = currentPass.val.length > 0;
    	currentPass.enable = currentPass.val == userPassword && currentPass.notNull;
    	newPass.val = document.getElementById("new-password").value;
    	newPass.confirm = document.getElementById("new-password-confirmation").value;
    	newPass.len = newPass.val.length >= 8;
    	newPass.ident = newPass.val == newPass.confirm;
    	newPass.digits = newPass.val == parseInt(newPass.val);
    	newPass.noDigits = !(newPass.val.match(/\d/));
    	newPass.sameRegister = newPass.val == newPass.val.toUpperCase() || newPass.val == newPass.val.toLowerCase();
    	newPass.incorrectInput = !!(newPass.val.match(/[^A-za-z0-9]/));
 			var validNewPass = !newPass.digits && !newPass.noDigits && !newPass.sameRegister && !newPass.incorrectInput;
 			var newPassEnable = newPass.len && newPass.ident && validNewPass;
    	var success = currentPass.enable && newPassEnable;
    	function resetValues() {
    		document.getElementById("current-password").value = ""; //current password must be entered obligatorily
    		document.getElementById("new-password").value = "";
    		document.getElementById("new-password-confirmation").value = "";
            document.getElementById("current-password-shadow").value = "";
            document.getElementById("new-password-shadow").value = "";
            document.getElementById("new-password-confirmation-shadow").value = "";
    	}
    	resetValues();
    	var alertMessage = (!currentPass.enable) ? "Current password is incorrect.\nPlease,try again." : (
    			(!newPass.ident) ? "Your new password and its confirmation must be identical." : (
    					(!newPass.len) ? "New password is too short.\nYour password has to be 8 symbols or more." : (
    							(newPass.digits) ? "You've entered digits only as new password.\nYou should enter at least one digit and one or more letetr upercase and lowercase." : (
    									(newPass.noDigits) ? "You've entered no digits in the new password.\nYou should enter at least one digit and one or more letetr upercase and lowercase." : (
    											(newPass.sameRegister) ? "You've entered all the letters in an identical register in the new password.\nYou should enter at least one digit and one or more letetr upercase and lowercase." : (
    													(newPass.incorrectInput) ? "There are one or more incorrect symbols in yout new password.\nYou password has to contain only digits and letters uppercase and lowercase." : "Some unidentified error."
    												)
    										)
    								)
    						)
    				)
    		);
    	if (success) {
    		document.getElementById("profile-password").value = newPass.val;
    		newPass.val = document.getElementById("new-password").value = "";
    		newPass.confirm = document.getElementById("new-password-confirmation").value = "";
    		closeModal(this.parentNode.id);
    	} else {
    		document.getElementById("profile-password").value = userPassword;
    		alert(alertMessage);
    	}
    };


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
    var passwordIcon = document.querySelectorAll('.show-password-icon');
    var inputWrapper = document.querySelectorAll('.modal-input-wrapper');
    for(var counter0 = 0; counter0 < passwordIcon.length; counter0++) {
        passwordIcon[counter0].addEventListener('click', function(event) {
            var selector = this.classList[0];
            var iconId = this.id;
            var pre = iconId.split('-'); pre.pop(); pre = pre.join('-');
            iconId = iconId.split('-').pop();
            this.classList.remove('active');
            if (this.id == pre + '-hide') {
                document.getElementById(pre + '-shadow').classList.add('active');
                document.getElementById(pre).classList.remove('active');
                document.getElementById(pre + '-show').classList.add('active');
                toText(pre);
            } else {
                document.getElementById(pre + '-shadow').classList.remove('active');
                document.getElementById(pre).classList.add('active');
                document.getElementById(pre + '-hide').classList.add('active');
                toPassword(pre);
            }
        });
    }
    for(var counter1 = 0; counter1 < inputWrapper.length; counter1++) {
        inputWrapper[counter1].childNodes[0].addEventListener("change", function(event) {
            var pre = this.id;
            toText(pre);
        });
        inputWrapper[counter1].childNodes[1].addEventListener("change", function(event) {
            var pre = this.id.split('-'); pre.pop(); pre = pre.join('-');
            toPassword(pre);
        });
    };
    document.querySelector('.btn.white.no-padding').onclick = function() {
        openModal('.sing-in-modal');
    };
    document.getElementById('forgot-password').onclick = function() {
        closeModal(openedModalId);
        openModal('.forgot-password-modal');
    };
    document.getElementById('sign-up-button').onclick = function() {
        closeModal(openedModalId);
        openModal('.sign-up-modal');
    };
    document.getElementById('sign-in-button').onclick = function() {
        closeModal(openedModalId);
        openModal('.sing-in-modal');
        //openModal('sign-in-modal');
    }
})();
