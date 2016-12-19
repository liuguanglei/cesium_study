// JavaScript Document
function mySelect(){
	$(".selectWrap .text-box").bind("click",function(){
		//alert(0)
		$(this).next(".downWrap").toggle();
	});
	$(".downWrap li").bind("click",function(){
		//alert($(".downWrap li"))
		$(this).parent().prev(".text-box").find("input").val($(this).text());
		$(this).parent().hide();
	});
}

function selectDiy(){
    $(".select-diy li a").click(function(){
        $(this).parents(".select-diy").find(".dropdown-toggle").val($(this).text());
    });
}