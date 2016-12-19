
/////首页头部搜索下拉列表
//$('.downMenu select').select2();

//菜单切换

$(".sidebar .childul").each(function(){var ulWidth=$(this).children("li").length*100;$(this).css("width",ulWidth)});
$('.sidebar .has-sub').mouseenter(function(){
    $('.sidebar .childul').hide();
    $(this).find('.childul').show();
});
$('.has-sub>ul>li').mouseenter(function(){
    $('.childulthird').hide();
    $(this).find('.childulthird').show();
});

$('.sidebar .has-sub .childul').mouseleave(function(){
    $(this).hide().find('.childulthird').hide();
});
$('.sidebar .has-sub .childul .childulthird').mouseleave(function(){
    $(this).hide().parent().parent().hide();;
});

$('.sidebar .has-sub .childul,.sidebar .has-sub .childul .childulthird').click(function(){
    $(this).hide().find('.childulthird').hide();
});
$(".sidebar .has-sub").not(".has-sub:first").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

//密码修改
$('.layer').draggable();
function userset(sender){
    $(".layer").hide();
    $("."+sender).show();
}
function userset_close(sender){
    $("."+sender).hide();
}