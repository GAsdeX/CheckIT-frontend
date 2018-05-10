<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Reset Password
        form.modal-form(v-on:submit="submitForm($event)")
            .input-group-component
                label(for="new-password") New Password
                input(type="password" id="new-password" placeholder="New Password" pattern=".{8,}" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="new-password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="new-password-show")
            .input-group-component
                label(for="new-password") Confirm New Password
                input(type="password" id="confirm-new-password" placeholder="Confirm New Password" pattern=".{8,}" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="confirm-new-password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="confirm-new-password-show")
            .btn-box
                button(type="submit" id="save-password-changes").modal-button.button-blue Save Changes
</template>

<script>
    module.exports = {
        data: function(){
            return {
                newPassword: "",
                confirmNewPassword: ""
            }
        },
        methods: {
            closeModal: function(){
                console.log(22);
                this.$eventBus.$emit('callModal', {action: 'close'});
            },
            submitForm: function(e) {
                e.preventDefault();
                var data = {
                    newPassword: this.newPassword,
                    confirmNewPassword: this.confirmNewPassword
                }
                console.log(data);
            }
        }
    }
</script>