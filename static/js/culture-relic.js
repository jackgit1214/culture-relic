 var msie = navigator.userAgent.match(/msie/i);
$(document).ready(function() {
	docReady();
});

function docReady() {

};
var relic = {
	homeRead : function() {
		$("#myCarousel").load("portal/scroll.html", function() {
				
		});
		$("#myModal").on("hidden.bs.modal", function() {
			$(this).removeData("bs.modal");
		});

		$(".btn-setting").click(function() {
			var $this = $(this);
			$("#myModal").modal({
				remote : "login/login.html"
			});

		});

		// data-toggle="dropdown"
		$("#signin").click(function() {
			var $this = $(this);
			// $this.addClass("dropdown-toggle");
			// $this.attr("data-toggle","dropdown");
			$("#myModal").modal({
				remote : "login/login.html",
				backdrop : "static"
			});
		});
	},
	manageReady:function(){
	    $('.navbar-toggle').click(function (e) {
	        e.preventDefault();
	        $('.nav-sm').html($('.navbar-collapse').html());
	        $('.sidebar-nav').toggleClass('active');
	        $(this).toggleClass('active');
	    });
	    
	    $('ul.main-menu li a').each(function () {
	        if ($($(this))[0].href == String(window.location))
	            $(this).parent().addClass('active');
	    });
	  
	    
	    $('ul.main-menu li a').click(function (e) {
	        if (msie) e.which = 1;
	        e.preventDefault();
	        $('.sidebar-nav').removeClass('active');
	        $('.navbar-toggle').removeClass('active');
	        //$('#loading').remove();
	        //$('#content').fadeOut().parent().append('<div id="loading" class="center">Loading...<div class="center"></div></div>');
	        
	        var $clink = $(this);
	        //History.pushState(null, null, $clink.data('link'));
	        $('ul.main-menu li.active').removeClass('active');
	        $("#content").load($clink.data("link"),function(){
	        	$clink.parent('li').addClass('active');
	        	//$('#loading').remove();
	            
	        });
	    });
	    
	}
}
