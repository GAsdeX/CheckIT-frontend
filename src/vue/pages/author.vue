<template lang="pug">
    .site-content
        .author-section
            .container
                h1.section-title Author
                .row
                    .col-xl-10.author-container
                        .author-box
                            .container
                                .row
                                    .col-lg-2.author-photo-wrapper
                                        .author-photo
                                    .col-lg-3
                                        .author-info
                                            p.author-name Helen Hitrova
                                            p.author-location Odesa, Ukraine
                                            p.author-email
                                                a(href="mailto:helen@gmail.com") helen@gmail.com
                                            p.author-phone
                                                a(href="tel:+380969635258") +380 96 963 52 58
                                            p.author-website
                                                a(href="www.helenhitrova.com") www.helenhitrova.com
                                    .col-lg-7
                                        p.author-about I'm a designer from China, now living in Brooklyn, NY. I work in digital product design but also love creating physical tangible art and illustrations. I love food, travel, animals which you can see them a lot from my work.
                h2.section-description.author-ideas-title
                    span.author-first-name Helen
                    |  created 
                    span.author-ideas-quantity 2
                    |  ideas
                .container.author-ideas-container
                    .row.author-ideas
                        .col-md-3.author-ideas-item
                            idea-item()
                        .col-md-3.author-ideas-item
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



