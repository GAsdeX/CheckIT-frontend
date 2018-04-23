<template lang="pug">
    .site-content
        .catalog-section
            .container
                h1.section-title Ideas

                .row
                    .col-md-3
                        .catalog-categories
                            .title Category
                                .categories-box
                                    .input-group-checkboxes
                                        input(type="checkbox")
                                        label All categories
                                    .input-group-checkboxes
                                        input(type="checkbox")
                                        label All categories
                                    .input-group-checkboxes
                                        input(type="checkbox")
                                        label All categories
                                    .input-group-checkboxes
                                        input(type="checkbox")
                                        label All categories
                                    .input-group-checkboxes
                                        input(type="checkbox")
                                        label All categories
                                    .input-group-checkboxes
                                        input(type="checkbox")
                                        label All categories

                    .col-md-9
                        .catalog-ideas-block
                            .row
                                each val in [1,2,3,4,5,6,7,8, 9, 10, 11, 12]
                                    .col-md-4
                                        idea-item()

</template>

<script>
    module.exports = {
        name: "catalog",
        components: {
            'idea-item': require('../components/idea-item.vue')
        }
    };
</script>

<style scoped>

</style>