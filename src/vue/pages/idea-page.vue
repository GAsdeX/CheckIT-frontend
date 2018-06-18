<template lang="pug">
    .site-content
        .head-banners-section
            .container
                .section-title
                    h1 Top ideas
                    .buttons-wrapper
                        button.prev
                            span.top
                            span.bottom
                        button.next
                            span.top
                            span.bottom
                .row(id="top-ideas-slide")
                    each val in [1,2,3,4,5,6,7,8,9,10]
                        .idea-banner
                            .evaluation-box
                                .categories
                                    .category photography
                                .likes
                                    span 242
                            .content-box
                                h2.title
                                    |   Urban Decay &ndash; The St.Louis Story
                                    br
                                    |   limited photobook
                                a(href="#").button-blue.to-idea View idea

        .infographics-section
            .container
                .section-title.centered How it works
                .row
                    .col-md-4
                        .infographics-item
                            .top-bar
                                .icon
                            .bottom-bar
                                .infographics-title Create an idea
                                .infographics-description Lorem Ipsum is simply dummy text of the printing


                    .col-md-4
                        .infographics-item
                            .top-bar
                                .icon
                            .bottom-bar
                                .infographics-title Collect likes
                                .infographics-description Lorem Ipsum is simply dummy text of the printing

                    .col-md-4
                        .infographics-item
                            .top-bar
                                .icon
                            .bottom-bar
                                .infographics-title Find investors
                                .infographics-description Lorem Ipsum is simply dummy text of the printing


        .new-ideas-section
            .container
                .section-title
                    h1 New ideas
                    router-link(:to="{name: 'catalog'}").sub-button.view-all View all
                .row
                    each val in [1,2,3,4,5,6,7,8]
                        .col-md-3
                            .idea-card
                                .top-bar
                                    .avatar(style="background-image: url(../img/blank-colors-desk-370474.jpg)")
                                .bottom-bar
                                    .evaluation-box
                                        .categories
                                            .category fasion
                                        .likes
                                            span 222
                                    .content-box
                                        .title Spelunk Jewelry: A New Collection Inspired by France
                                        .description Attending La Porte Peinte artist residency will inspire a second line of timeless jewelry anchored by place and self-expression.

        .categories-section
            .container
                .section-title Categories
                .categories-box
                    a.category Food
                    a.category Craft
                    a.category Arts
                    a.category Publishing
                    a.category Social
                    a.category Business
                    a.category Music
                    a.category Technology
                    a.category Film
                    a.category Fashion
                    a.category ecology
                    a.category Health
                    a.category Engineering
                    a.category Photography
                    a.category Education
                    a.category Culture

        .bring-an-idea-section
            .container
                .section-title Bring your idea to life
                .row
                    .col-md-7
                        .bring-an-idea-box
                            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut culpa minima mollitia nemo optio perspiciatis provident, sint vel vero. Aperiam eveniet id minus nisi quasi quia repellat sunt voluptates.
                            router-link(:to="{name: 'create-idea'}").btn create idea
                    .col-md-5.image
</template>

<script>
    var $ = require('jquery');
    var slick = require('slick-carousel');

	module.exports = {
	    created: function() {

        },
        mounted: function() {
            $('#top-ideas-slide').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.head-banners-section .prev'),
                nextArrow: $('.head-banners-section .next')
            });
        },
	    components: {
        }
	};
</script>
