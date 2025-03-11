
// ハンバーガーメニュー動作設定

jQuery("#hamburger").on("click", function() {
    jQuery(".icon").toggleClass("close");
    jQuery(".sm").slideToggle();
});

// ハンバーガーメニューリサイズ後

jQuery(window).on("resize", function() {
    if (window.innerWidth > 768) {
        jQuery(".sm").hide();
        jQuery(".icon").removeClass("close");
    }
});



// スクロール表示、右から

function scrollBurnRight() {
    jQuery(".fadeInMove-r").each(function() {
        var scrollTop = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        var targetPosY = jQuery(this).offset().top;
        var targetHeight = jQuery(this).innerHeight();
        var windowWidth = jQuery(window).width();
        var threshold = targetPosY - windowHeight + 250;

        if (scrollTop > threshold) {
            jQuery(this).addClass("active");
        }
    });
}

// スクロール表示、左から

function scrollBurnLeft() {
    jQuery(".fadeInMove-l").each(function() {
        var scrollTop = jQuery(window).scrollTop();
        var windowHeight = jQuery(window).height();
        var targetPosY = jQuery(this).offset().top;
        var targetHeight = jQuery(this).innerHeight();
        var windowWidth = jQuery(window).width();
        var threshold = targetPosY - windowHeight + 250;

        if (scrollTop > threshold) {
            jQuery(this).addClass("active");
        }
    });
}

jQuery(window).scroll(function() {
    scrollBurnRight();
    scrollBurnLeft();
});