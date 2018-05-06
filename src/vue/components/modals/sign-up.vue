<template lang="pug">
    .sign-up-modal.overlay
        div(id="sign-up-modal").modal-body.sign-up
            .modal-header
                a(href="index.html").header-logo
                    img(src="img/checkit.svg" alt="CheckIT Logo")
                span.close-modal &times;
            form(id="sign-up-form").modal-main
                h2.modal-name Sign Up
                h3.field-title First Name
                input(type="text" placeholder="First Name" required).modal-input
                h3.field-title Last Name
                input(type="text" placeholder="Last Name").modal-input
                h3.field-title email
                input(type="email" placeholder="Email" required).modal-input
                h3.field-title Password
                .modal-input-wrapper
                    input(type="password" id="sign-up-password" placeholder="Password").modal-input.active
                    input(type="text" id="sign-up-password-shadow" placeholder="Password").modal-input.secondary
                    img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="sign-up-password-hide")
                    img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="sign-up-password-show")
                button.modal-button(type="submit" name="sign-up" value="Sign Up" id="sign-up" form="sign-up-form") Sign Up
                .sign-in-wrapper
                    p.sign-in Have an account?
                    button(type="button" id="sign-in-button") Sign in
</template>

<script>
    module.exports = {

    }
</script>