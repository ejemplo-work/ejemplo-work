    /*=============================================
    = INTIAL FUNCTIONS
    =============================================*/
    ckav.intials = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            ckav.intials.pageTransition();
        },

        /*----------  PAGE TRANSITION  ----------*/
        pageTransition: function() {

            if($o.$sectionTo) {
                // if($o.$html.hasClass("device-desktop")){
                    $o.$sectionTo.on("click", function() {
                        $o.$ckavBody.addClass("page-section-active");
    
                        var sectionIs = $(this).attr("data-page-section");
                        $o.$pageSection.removeClass("active-page");
                        $o.$pageSectionWrp.find(sectionIs).addClass("active-page");
    
                        ckav.findTheme($o.$ckavBody);
                    });
                // }
            }

            if($o.$menuIcon) {
                $o.$menuIcon.on("click", function(){
                    $(this).toggleClass("active");
                    $o.$ckavBody.toggleClass("active-menu");
                });
            }

            if($o.$closeSection) {
                $o.$closeSection.on("click", function(){
                    $o.$ckavBody.toggleClass("page-section-active");
                    $o.$ckavBody.removeClass("theme-light theme-dark");
                    $o.$navigationLink.removeClass("active-link");
                });
            }

            if($o.$navigationLink) {
                $o.$navigationLink.on("click", function(){
                    $o.$navigationLink.removeClass("active-link");
                    $(this).addClass("active-link");
                });

                if($o.$html.hasClass("device-mobile")) {
                    $o.$navigationLink.on("click", function(){
                        $o.$menuIcon.toggleClass("active");
                        var toSection = $(this).attr("data-page-section");
                        var $toSection = $(toSection);

                        $('html, body').animate({
                            scrollTop: $toSection.offset().top - 40
                        }, 600);

                        $o.$ckavBody.removeClass("theme-light theme-dark");
                        $o.$ckavBody.removeClass("active-menu");
                    });
                }
            }

        },

    };
    