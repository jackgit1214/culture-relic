$(document).ready(function () {
	
    docReady();
    
});


function docReady() {
	
	$("#myCarousel").load("portal/scroll.html",function(){
		
	});
//	carouse.carouseIData();
//	$(".carousel").carousel('cycle');
};


var carouse = {
		carouseIData:function(){
			$.getJSON("static/js/CarouselData.json",function(datas){
				initCarouse(datas);
			});
			function initCarouse(data){
				$.each(data.files,function(i,obj){
					var isActive = "";
					if (i==0)
						isActive = "active";
					var $li = $("<li>").attr("data-target","#myCarousel")
							.attr("data-slide-to",i)
							.addClass(isActive);
					var $img = $("<img>");
					$img.attr("src",obj.filepath);
					var $a = $("<a target='"+obj.articleId+"'>").attr("href",obj.href);
					$a.append($img);
					var $div = $("<div>").addClass("item")
									.addClass(isActive)
									.append($a);
					$("#caro-indi").append($li);
					$("#caro-inner").append($div);
				});
			}
		}
};
