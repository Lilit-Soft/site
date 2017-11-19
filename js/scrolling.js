(function () {
$(document).ready(function (e) {
	var navheight = $("#main-nav").height();

	$('a.page-scroll').bind('click', function (e) {
        e.preventDefault();
		var top = $(this.hash).offset().top - navheight + 10;
        $('html,body').animate({scrollTop: top});
    });
    selectMenu();
	selectNav()
   	$(window).scroll(function () {
		selectNav();
		setTimeout(selectMenu, 400);
	});  

   	function selectMenu() {	
        $(".scroll-page-nav").each(function (i, e) {
            if (Math.round($(e).offset().top) <= ($(window).scrollTop() + navheight))
            {
				$(".navbar li").removeClass("active");
				$("a[href=#" + $(e).attr("id") + "]").parent().addClass("active");
            }
        });
    }
    function selectNav(){
		if ($(window).scrollTop() >= ($(".fixed").height()- navheight)) {
			$("#main-nav").removeClass("nav-absolute").addClass("navbar-top");
		} else {
			$("#main-nav").removeClass("navbar-top").addClass("nav-absolute");
		} 

	}

    $(".navbar li").click(function () { 
        $(".navbar li").removeClass("active");
        $(this).addClass("active");
    });
});

})();