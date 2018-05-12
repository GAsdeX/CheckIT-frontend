<template lang="pug">
    .site-header
        .container
            .content-wrapper
                .site-logo
                ul.site-nav
                    li: router-link(:to="{name: 'catalog'}") Projects
                    li: router-link(:to="{name: 'about'}") About
                    li: router-link(:to="{name: 'faq'}") FAQ
                    li: router-link(:to="{name: 'home'}") Contacts
            .content-wrapper
                .site-search
                    .avatar
                .verification-box
                    a.btn(@click="callModal('create-idea')") Create idea
                    a.btn.white.no-padding(@click="callModal('sign-in')") Sing in
</template>

<script>
    var EventBus = require('../../js/event-bus').EventBus;

    console.log(EventBus);
    module.exports =  {
        created: function() {
            // this.$eventBus.$on('callModal', this.receiveModalData);
        },
        methods: {
            callModal: function(component) {
                this.$eventBus.$emit("callModal", {action: component})
            },
            receiveModalData: function(data) {
                console.log(data);
            }
        }
    };
</script>
