<template lang="pug">
    .modal-box
        .modal-header
            .top-side
                router-link(@click.native="closeModal", :to="{name: 'home'}").header-logo Checkit
                button.btn.close-modal(@click="closeModal") &times;
            .bottom-side
                h2.modal-name Notification
        .modal-form
            p.notification-text.alert Are you sure to delete this idea?
            .btn-box.row
                .col-md-6.modal-button-wrapper
                    button(type="button" id="confirm-delete" @click="closeModal").modal-button.confirm.button-grey Delete
                .col-md-6.modal-button-wrapper
                    button(type="button" id="cancel-delete" @click="closeModal" autofocus).modal-button.cancel.button-blue Cancel
</template>

<script>
    module.exports = {
        data: function(){
            return {

            }
        },
        methods: {
            closeModal: function(){
                this.$eventBus.$emit('callModal', {action: 'close'});
            }
        }
    }
</script>