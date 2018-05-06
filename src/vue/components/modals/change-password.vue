<template lang="pug">
    .change-password-form.overlay
        div(id="change-password-form").modal-body.change-password-input
            .modal-header
                a(href="index.html").header-logo
                    img(src="img/checkit.svg" alt="CheckIT Logo")
                span.close-modal &times;
            .modal-main
                h2.modal-name Change Password
                h3.field-title Current Password
                .modal-input-wrapper
                    input(type="password" id="current-password" placeholder="Current Password").modal-input.active
                    input(type="text" id="current-password-shadow" placeholder="Current Password").modal-input.secondary
                    img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="current-password-hide")
                    img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="current-password-show")
                h3.field-title New Password
                .modal-input-wrapper
                    input(type="password" id="new-password" placeholder="New Password").modal-input.active
                    input(type="text" id="new-password-shadow" placeholder="New Password").modal-input.secondary
                    img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="new-password-hide")
                    img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="new-password-show")
                h3.field-title Confirm New Password
                .modal-input-wrapper
                    input(type="password" id="new-password-confirmation" placeholder="Confirm New Password").modal-input.active
                    input(type="text" id="new-password-confirmation-shadow" placeholder="Confirm New Password").modal-input.secondary
                    img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="new-password-confirmation-hide")
                    img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="new-password-confirmation-show")
                button(type="button" id="save-password-changes").modal-button Save Changes
</template>

<script>
    module.exports = {
        /*data: function() {
            return {
                password: '',
                validatePassword: ''
            }
        }*/
    }
</script>