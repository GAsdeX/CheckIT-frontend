<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Sign In
        form.modal-form(v-on:submit="submitForm($event)")
            .input-group-component
                input(type="email" v-model="email" id="email" placeholder="Email" required).modal-input
            .input-group-component
                input(type="password" v-model="password" user_greg_frontend id="password" placeholder="Password" required).modal-input
                img(src="img/icons/eye-off.png" alt="Show Password Image" class="show-password-icon hide active" id="password-hide")
                img(src="img/icons/eye-on.png" alt="Show Password Image" class="show-password-icon show" id="password-show")
            .input-group-component(v-if="signInStatus == 'exists'")
                info-box(danger)
            .input-group-component(v-if="signInStatus == 'error'")
                info-box(danger message="An error occurred while creating of user. Please Reload the page.")
            button(@click.prevent.self="closeModal, callModal('forgot-password')").forgot-password Forgot password?
            .btn-box
                button(type="submit" id="sign-in-button").modal-button.button-blue Sign In
            .sign-up-wrapper
                p.sign-up Don't have an account?
                button(type="button" id="sign-up-button" @click="closeModal, callModal('sign-up')").sub-button Sign up
</template>

<script>
    module.exports = {
        data: function(){
            return {
                email:    '',
                password: '',
                signInStatus: null
            }
        },
        methods: {
            closeModal: function(){
                console.log(22);
                this.$eventBus.$emit('callModal', {action: 'close'});
            },
            callModal: function(component) {
                this.$eventBus.$emit("callModal", {action: component})
            },
            submitForm: function(e) {
                e.preventDefault();
                var data = {
                    email:    this.email,
                    password: this.password
                };

                var that = this;

                this.$store.dispatch('user/logIn', data)
                    .then(function(res) {
                        that.$store.dispatch('user/setLogin', res.data);
                        console.log(res);

                        that.$eventBus.$emit('callModal', {action: 'close'});
                        that.$router.push('/profile');
                    })
                    .catch(function (err) {
                        that.signInStatus = 'error';
                    });
            }
        },
        components: {
            'info-box' : require('../info-box.vue')
        }
    }
</script>