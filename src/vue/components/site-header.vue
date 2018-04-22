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
                    a.btn Create idea
                    a.btn.white.no-padding Sing in
</template>

<script>
    module.exports =  {

    };
</script>
