(function () {
    $(window).load(function () {
        var $container = $('.isotopeContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.filter-item a').click(function () {
            $('.filter-item .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        $(".select-item").change(function () {
            $('.filter-item .active').removeClass('active');
            var selector = $(this).find(":selected").attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        });
    });
})();