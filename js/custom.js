    $(document).ready(function(){
        $('.more').click(function(){
            $('.menu-nav ul').toggleClass('show');
        });
    });

    // $(document).ready(function(){
    //     $('.nav-link').click(function () {
    //         $('.tab_pan').removeClass('act');
    //         $('.tab_pan').addClass('act');
    //     });
    // });
        
    $(document).ready(function(){
        $('.nav-link').click(function(){
            $('.nav-link').removeClass('add');
            $(this).addClass('add');

            var show = $(this).attr("href");
            $('.tab_pan').removeClass('act');
            $(show).addClass('act');
         
        });
    });
    