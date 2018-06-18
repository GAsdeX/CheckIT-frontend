<template lang="pug">
    .site-content
        .search-result-section
            .container
                h1.section-title.search-result-title
                    | Search results for &#34;
                    span.search-result-name creative
                    | &#34;:
                .col-7
                    .search-result-box
                        each val in [1,2,3,4,5,6,7,8, 9, 10]
                            search-result-item()
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
        name: "search-result",
        components: {
            'search-result-item': require('../components/search-result-item.vue')
        }
    };
</script>

<style scoped>

</style>