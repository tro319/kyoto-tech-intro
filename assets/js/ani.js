
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



// スクロール表示、上から

function scrollBurnDown() {
    jQuery(".fadeInMove-d").each(function() {
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

// スクロール表示、下から

function scrollBurnUp() {
    jQuery(".fadeInMove-u").each(function() {
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
    scrollBurnDown();
    scrollBurnUp();
});


// ページ上部へ戻るボタン実装

jQuery(function () {
    const $pageTop = jQuery("#js-pagetop");

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 1) {
            $pageTop.fadeIn(300).css("display", "flex");
        } else {
            $pageTop.fadeOut(300);
        }
    });

    $pageTop.click(function () {
        jQuery("html, body").animate({ scrollTop: 0 }, 300);
    });
});