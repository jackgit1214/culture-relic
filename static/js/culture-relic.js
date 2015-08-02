$(document).ready(function () {
	
	
	
    docReady();
    
});


function docReady() {
	
	$("#myCarousel").load("portal/scroll.html",function(){
		
	});
	$("#myModal").on("hidden.bs.modal", function() {
	    $(this).removeData("bs.modal");
	});
	
	$(".btn-setting").click(function(){
		var $this = $(this);
		//$this.addClass("dropdown-toggle");
		//$this.attr("data-toggle","dropdown");
		$("#myModal").modal({
			remote:"login/login.html"
		});
		
	});
	
	//
	//data-toggle="dropdown"
	$("#signin").click(function(){
		var $this = $(this);
		//$this.addClass("dropdown-toggle");
		//$this.attr("data-toggle","dropdown");
		$("#myModal").modal({
			remote:"login/login.html"
		});
	});
	
};




