<template lang="pug">
    .site-content
        .idea-page-section
            .container
                .row
                    .offset-1.col-10.idea-box
                        h3.idea-page-category Culture
                        h1.idea-page-title
                            | The Travelling Art Gallery
                            br
                            | an artists project
                        img(src="img/idea-image.jpg" alt="Idea Image").idea-page-banner
                        .idea-page-sub-box
                            .row
                                .col-2.author-box-wrapper
                                    .author-box
                                        .author-box-likes-wrapper
                                            .author-box-likes-logo
                                            p.author-box-likes
                                                span.author-box-likes-amount 287
                                                | &nbsp;likes
                                        .author-box-info-wrapper
                                            router-link(:to="{name: 'author'}").author-box-info-link
                                                img(src="img/profile-photo.jpg" alt="Author Photo").author-box-info-photo
                                                p.author-box-info-first-name Helen
                                            p.author-box-info-location
                                                router-link(:to="{name: 'search-result'}") Ukraine
                                        .author-box-published-wrapper
                                            p.author-box-published Published
                                            p.author-box-published-datetime
                                                router-link(:to="{name: 'search-result'}").author-box-published-date 21.04
                                                | &nbsp;at&nbsp;
                                                span.author-box-published-time 14:45
                                .col-9.description-box
                                    p.description Contemporary South African art is becoming increasingly popular internationally and art lovers and collectors are looking at this growing market.
                                    p.description The Travelling Art Gallery is a collaborative initiative of South African artists, together with Barbara Lenhard and Florian Gast. Both of them born in Germany are living and working together for nearly ten years in Cape Town, South Africa.
                                    p.description The initiative is all about showcasing and promoting a collection of established and emerging artists to audiences in various cities: Berlin, Frankfurt and either Munich or Hannover. Each pop-up exhibition will be 8-10 days long.
                                    p.description This will happen in June/July 2018 - and we aim to travel for six weeks.
                                    video(src='video/idea-video.mp4' controls="controls").description-video Video tag does not supported
                                    p.description Contemporary South African art is becoming increasingly popular internationally and art lovers and collectors are looking at this growing market.
                                    p.description The Travelling Art Gallery is a collaborative initiative of South African artists, together with Barbara Lenhard and Florian Gast. Both of them born in Germany are living and working together for nearly ten years in Cape Town, South Africa.
                                    .description-slider-wrapper
                                        .description-slider-buttons-wrapper
                                            button.prev
                                                span.top
                                                span.bottom
                                            button.next
                                                span.top
                                                span.bottom
                                        .description-slider
                                            each val in [1,2,3,4]
                                                img(src="img/idea-image.jpg" alt="Idea Image")
                                    .description-like-wrapper
                                        button.description-like-icon
                                        p.description-like-paragraph Like this idea? Press heart to support the author.
</template>

<script>
    var $ = require('jquery');
    var slick = require('slick-carousel');

	module.exports = {
	    created: function() {

        },
        mounted: function() {
            $('.description-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.description-slider-buttons-wrapper .prev'),
                nextArrow: $('.description-slider-buttons-wrapper .next')
            });
        },
	    components: {
        }
	};
</script>
