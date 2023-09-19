let cl = console.log;

$(document).ready(function(){
    const $navLinks = $('#mainNavbar .navbar-nav .nav-link');

        $navLinks.on("click", function(){
            cl($(this).attr('data-id'))
            let $selectedSection = $('#'+ $(this).attr('data-id'))
            // cl($selectedSection.html())
            // cl($selectedSection)
            $('body', 'html').animate({
                scrollTop : $selectedSection.offset().top,
            }, 1000)
        })

    const $scrollToTop = $('#scrollToTop');

    $scrollToTop.on('click', function(){
        $('body, body' ).animate({
            scrollTop : 0
        }, 1000)
    })

    $(window).on('scroll', function(){
        // cl('helo')
        let scrollTopValue = $(window).scrollTop()
        cl(scrollTopValue)
        if(scrollTopValue >= 500){
            $scrollToTop.addClass('active')
        }else{
            $scrollToTop.removeClass('active')
        }
    })
    
})