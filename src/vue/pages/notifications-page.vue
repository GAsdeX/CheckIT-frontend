<template lang="pug">
    .site-content
        .notification-section
            .container
                h1.section-title.notification-title Notifications
                .col-10
                    .notification-box
                        each val in [1,2,3,4,5,6,7,8, 9, 10]
                            notification-item()
                ul.page-pagination.pagination
                    li.pagination-navigation.prev
                        span
                    li.pagination-page.current
                        span 1
                    li.pagination-page
                        a(href="#") 2
                    li.pagination-page
                        a(href="#") 3
                    li.pagination-page
                        a(href="#") 4
                    li.pagination-page
                        a(href="#") 5
                    li.pagination-page
                        a(href="#") 6
                    li.pagination-navigation.next
                        a(href="#")
</template>

<script>
    module.exports = {
        name: "notifications-page",
        components: {
            'notification-item': require('../components/notification-item.vue')
        }
    };
</script>

<style scoped>

</style>