"use strict";function openNav(){document.getElementById("search_nav").style.width="100%"}function closeNav(){document.getElementById("search_nav").style.width="0%"}$(document).ready(function(){$.Scrollax(),$("#testmonials").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:4500,responsiveClass:!0,autoplayHoverPause:!0,responsive:{0:{items:1,margin:30},600:{items:1,margin:15},1e3:{items:1,margin:15}}}),$("#project_detail").owlCarousel({loop:!0,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:8e3,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsiveClass:!0,autoplayHoverPause:!1,responsive:{0:{items:1,margin:30},600:{items:1,margin:30},1e3:{items:1,margin:30}}}),$("#our-clients").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:3e3,responsiveClass:!0,autoplayHoverPause:!1,responsive:{0:{items:2,margin:50},600:{items:3,margin:30},1e3:{items:4,margin:110}}}),$(".countup").counterUp({delay:5,time:200}),$(window).width()>991&&$("ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(100).fadeIn(300)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(100).fadeOut(300)}),0!==$(".project").length&&($(".project").hover3d({selector:".project__card"}),$(".movie").hover3d({selector:".movie__card",shine:!0,sensitivity:20})),0!==$(".services-3d").length&&($(".services-3d").hover3d({selector:".services__card"}),$(".movie").hover3d({selector:".movie__card",shine:!0,sensitivity:20})),$("#videomodal").on("hidden.bs.modal",function(){var e=$(this).find("iframe"),t=e.attr("src");e.attr("src",""),e.attr("src",t)}),$("#videomodal").on("hidden.bs.modal",function(){var e=document.getElementById("htmlVideo");null!=e&&(e.pause(),e.currentTime=0)}),$("#preloader").fadeOut("normall",function(){$(this).remove()}),$(window).scroll(function(){$(this).scrollTop()>500?$(".scroll-to-top").fadeIn(400):$(".scroll-to-top").fadeOut(400)}),$(".scroll-to-top").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},600)});var e=$(".isotope-grid").isotope({itemSelector:".isotope-item",layoutMode:"fitRows",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:"[data-category]",weight:function(e){var t=$(e).find(".weight").text();return parseFloat(t.replace(/[\(\)]/g,""))}}}),t={ium:function(){return $(this).find(".name").text().match(/ium$/)}};$("#filters").on("click","button",function(){var o=$(this).attr("data-filter");o=t[o]||o,e.isotope({filter:o})}),$(".parent-isotope").each(function(e,t){var o=$(t);o.on("click","button",function(){o.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")})}),(new WOW).init()});var swiper=new Swiper(".swiper-container",{speed:600,parallax:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3}});0!==$("#video-area").length&&$("#video-play").mb_YTPlayer();var card=$(".video-effect-box");$(document).on("mousemove",function(e){var t=-($(window).innerWidth()/2-e.pageX)/100,o=($(window).innerHeight()/2-e.pageY)/100;card.attr("style","transform: rotateY("+t+"deg) rotateX("+o+"deg);-webkit-transform: rotateY("+t+"deg) rotateX("+o+"deg);-moz-transform: rotateY("+t+"deg) rotateX("+o+"deg)")}),jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter(".quantity input"),jQuery(".quantity").each(function(){var e=jQuery(this),t=e.find('input[type="number"]'),o=e.find(".quantity-up"),a=e.find(".quantity-down"),i=t.attr("min"),n=t.attr("max");o.click(function(){var o=parseFloat(t.val());if(o>=n)var a=o;else a=o+1;e.find("input").val(a),e.find("input").trigger("change")}),a.click(function(){var o=parseFloat(t.val());if(o<=i)var a=o;else a=o-1;e.find("input").val(a),e.find("input").trigger("change")})});card=$(".error-box");$(document).on("mousemove",function(e){var t=-($(window).innerWidth()/2-e.pageX)/50,o=($(window).innerHeight()/2-e.pageY)/50;card.attr("style","transform: rotateY("+t+"deg) rotateX("+o+"deg);-webkit-transform: rotateY("+t+"deg) rotateX("+o+"deg);-moz-transform: rotateY("+t+"deg) rotateX("+o+"deg)")}),$(".qua_go").on("click",function(e){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1300),e.preventDefault()});