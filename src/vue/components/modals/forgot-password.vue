<template lang="pug">
    .forgot-password-modal.overlay
        div(id="forgot-password-modal").modal-body.forgot-password
            .modal-header
                a(href="index.html").header-logo
                    img(src="img/checkit.svg" alt="CheckIT Logo")
                span.close-modal &times;
            form(id="forgot-password-form").modal-main
                h2.modal-name Re-send password
                h3.field-title Enter your email
                input(type="email" id="forgot-password-email" placeholder="Email" required).modal-input
                button.modal-button(type="submit" name="forgot-password" value="re-send password" id="re-send-password" form="forgot-password-form") Re-send Password
</template>

<script>
    module.exports = {

    }
</script>