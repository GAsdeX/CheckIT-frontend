<template lang="pug">
    .sing-in-modal.overlay
        div(id="sing-in-modal").modal-body.sing-in
            .modal-header
                a(href="index.html").header-logo
                    img(src="img/checkit.svg" alt="CheckIT Logo")
                span.close-modal &times;
            form(id="sing-in-form").modal-main
                h2.modal-name Sign In
                h3.field-title Email
                input(type="email" id="sing-in-email" placeholder="Email" required).modal-input
                h3.field-title Password
                .modal-input-wrapper
                    input(type="password" id="sing-in-password" placeholder="Password").modal-input.active
                    input(type="text" id="sing-in-password-shadow" placeholder="Password").modal-input.secondary
                    img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="sing-in-password-hide")
                    img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="sing-in-password-show")
                button.forgot-password(name="forgot-password" type="button" id="forgot-password") Forgot password?
                button.modal-button(type="submit" name="sign-in" value="Save Changes" form="sing-in-form") Sign In
                .sign-up-wrapper
                    p.sign-up Don't have an account?
                    button(type="button" id="sign-up-button") Sign up
</template>

<script>
    module.exports = {

    }
</script>