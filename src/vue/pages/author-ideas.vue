<template lang="pug">
   .site-content
        .author-ideas-section
            .container
                h1.section-title MY IDEAS
                ul.authors-nav-links
                    li.authors-nav-links-item(:class="{active: tab === 'published'}")
                        a(@click="setTab('published')") Published
                    li.authors-nav-links-item(:class="{active: tab === 'drafts'}")
                        a(@click="setTab('drafts')") Drafts
                    li.authors-nav-links-item(:class="{active: tab === 'liked'}")
                        a(@click="setTab('liked')") Liked
            .container
                h2.section-title You have drafts

                .row
                    .col-md-3(v-if="tab == 'published'")
                        idea-item()
                    .col-md-3(v-if="tab == 'published'")
                        idea-item()
                    .col-md-3(v-if="tab == 'published'")
                        idea-item()
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()


</template>

<script>
    module.exports= {
        data: function () {
            return {
                tab: 'published'
            }
        },
        methods: {
            setTab: function (tab) {
                this.tab = tab;
            }
        },
        components:{
            'idea-item': require('../components/idea-item.vue')
        }
    }
</script>



