<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Change Password
        form.modal-form(v-on:submit="submitForm($event)")
            .input-group-component
                //-label(for="current-password") Current Password
                input(type="password" id="current-password" placeholder="Current Password" equired).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="current-password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="current-password-show")
            .input-group-component
                //-label(for="new-password") New Password
                input(type="password" id="new-password" placeholder="New Password, 8+ symbols" pattern=".{8,}" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="new-password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="new-password-show")
            .input-group-component
                //-label(for="new-password") Confirm New Password
                input(type="password" id="confirm-new-password" placeholder="Confirm New Password" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="confirm-new-password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="confirm-new-password-show")
            .btn-box
                button(type="submit" id="save-password-changes").modal-button.button-blue Save Changes
</template>

<script>
    module.exports = {
        data: function(){
            return {
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            }
        },
        methods: {
            closeModal: function(){
                this.$eventBus.$emit('callModal', {action: 'close'});
            },
            submitForm: function(e) {
                e.preventDefault();
                var data = {
                    currentPassword: this.currentPassword,
                    newPassword: this.newPassword,
                    confirmNewPassword: this.confirmNewPassword
                }
                console.log(data);
            }
        }
    }
</script>