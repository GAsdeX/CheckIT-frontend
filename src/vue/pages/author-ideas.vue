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
                h2.section-description You have&nbsp;
                    |
                    span.section-amount.drafts(v-if="tab == 'drafts'") 5
                    span.section-amount.published(v-if="tab == 'published'") 3
                    span.section-amount.liked(v-if="tab == 'liked'") 4
                    |
                    span.section-description-after.drafts(v-if="tab == 'drafts'") &nbsp;drafts
                    span.section-description-after.published(v-if="tab == 'published'") &nbsp;published ideas
                    span.section-description-after.liked(v-if="tab == 'liked'") &nbsp;liked ideas

                .row
                    .col-md-3(v-if="tab == 'published'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.moderated.approved
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'published'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.moderated.rejected
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'published'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.moderated.approved
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'liked'")
                        idea-item()
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.draft
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.draft
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.draft
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.draft
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea
                    .col-md-3(v-if="tab == 'drafts'")
                        idea-item()
                        ul.editor-section
                            li.editor-item.draft
                            li.editor-item.more
                                button(@click="editorController('toggle')").editor-item.more-button
                                ul.editor-list
                                    li.editor-list-item.edit
                                        a.edit-idea(href="#") Edit Idea
                                    li.editor-list-item.delete
                                        button(@click="callModal('delete-idea')").editor-item.more-button.delete-idea Delete idea


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
            },
            editorController: function(action) {
                var that = event.path[1].lastChild;
                var flag = that.classList.contains('active');
                for (var i = 0; i < document.querySelectorAll('.editor-list').length; i++) {
                    document.querySelectorAll('.editor-list')[i].classList.remove('active');
                }
                if (action === 'toggle') {
                    if (flag) {
                        that.classList.remove('active');
                    } else {
                        that.classList.add('active');
                    };
                };
            },
            callModal: function(component) {
                this.$eventBus.$emit("callModal", {action: component})
            }
        },
        components:{
            'idea-item': require('../components/idea-item.vue')
        }
    }
</script>



