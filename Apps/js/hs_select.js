(function($) {     
  // 插件的定义     
  $.fn.hsSelect = function(options) { 
	  $this=$(this);
	  var opts = $.extend({}, $.fn.hsSelect.defaults, options);  
	  var html='<div class="my-selectext">'
    	+'<div class="fl my-text"><input  type="text" value=""/></div>'
        +'<div  class="icon-bg fr"></div>'
	+'</div>'
    +'<ul class="my-selectdown">'
    	
    +'</ul>';
	  $(this).append(html);
	  $(opts.data).each(function(){$this.find("ul").append('<li value="'+this.value+'">'+this.name+'</li>')});
	  $(this).find(".icon-bg").on("click",function(){
		$(this).parent().next("ul").toggle();
	  });
	  $(this).find("li").on("click",function(){
		$(this).parent().prev(".my-selectext").find("input").val($(this).text());
		$(this).parents(".my-select").attr("value",$(this).attr("value"));
		$(this).parents(".my-select").attr("name",$(this).text());
		$(this).parent().hide();
	  });
	  $(this).find(".icon-bg").css("background","url('"+opts.img+"') no-repeat center");
	  if(opts.defaultText)$(this).find("input").attr("placeholder",options.defaultText);
	 
	  
	  //$(this).find("input").blur(function(){});;
	 /* alert(11);
    debug(this);       
    var opts = $.extend({}, $.fn.hilight.defaults, options);     
    // iterate and reformat each matched element     
    return this.each(function() {     
      $this = $(this);     
      // build element specific options     
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;     
      // update element styles     
      $this.css({     
        backgroundColor: o.background,     
        color: o.foreground     
      });     
      var markup = $this.html();     
      // call our format function     
      markup = $.fn.hilight.format(markup);     
      $this.html(markup);     
    });   */  
  };     
  // 私有函数：debugging     
  function debug($obj) {     
    if (window.console && window.console.log)     
      window.console.log('hilight selection count: ' + $obj.size());     
  };     
  // 定义暴露format函数     
  $.fn.hsSelect.format = function(txt) {     
    return '<strong>' + txt + '</strong>';     
  };     
  // 插件的defaults     
  $.fn.hsSelect.defaults = {     
   data:[{name:"选项1",value:"111"},{name:"选项2",value:"222"},{name:"选项3",value:"333"},{name:"选项4",value:"444"}]
  };     
// 闭包结束     
})(jQuery);  