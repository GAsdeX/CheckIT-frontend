<template lang="pug">
    .site-header
        .container
            .content-wrapper
                router-link(:to="{name: 'home'}").site-logo Checkit
                ul.site-nav
                    li: router-link(:to="{name: 'catalog'}") Ideas
                    li: router-link(:to="{name: 'about'}") About
                    li: router-link(:to="{name: 'faq'}") FAQ
                    li: router-link(:to="{name: 'contacts'}") Contacts
            .content-wrapper
                .site-search
                    .avatar
                .verification-box
                    router-link(:to="{name: 'create-idea'}").btn Create idea
                    a.btn.white.no-padding(@click="callModal('sign-in')" v-if="!isloggedIn") Sing in
                    a.btn.user-round.no-padding.no-user-photo(v-if="isloggedIn")
                        nav.profile-nav
                            .top-bar
                                | name
                            ul.bottom-bar
                                li: router-link(:to="{name: 'profile'}") My Profile
                                li: router-link(:to="{name: 'projects'}") My Projects
                                li: router-link(:to="{name: 'notifications'}") Notifications
                                li: a(@click="logOut") Sign Out


</template>

<script>
    module.exports =  {
        created: function() {
            // this.$eventBus.$on('callModal', this.receiveModalData);
        },
        computed: {
            isloggedIn: function() {
                return this.$store.getters['user/getLoginStatus'];
            }
        },
        methods: {
            callModal: function(component) {
                this.$eventBus.$emit("callModal", {action: component})
            },
            receiveModalData: function(data) {
                console.log(data);
            },
            logOut: function() {
                var that = this;

                this.$router.push({name: 'home'});
                this.$store.dispatch('user/logOut');
            }
        }
    };
</script>
