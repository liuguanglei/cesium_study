(function($){
	var defaults={
		name:"",
		version:"0.1",
		showDate:'',
	    spanHeight:20,
		showTips:true,
		colors:['#008ffe','#89d689','#ee887c','#fde29a','#c9a1f5','#d9dcde'],
		data:null
		//{"row1":[{"1":{"2":"something","7":"anything"}},{"2":{"2":"something","23":"anything"}}],"row2":[{"1":{"5":"something","11":"anything"}}]}
	}
	
	var getShowDate=function(options){
		var myDate={};
		if(''===options.showDate){
		var date=new Date();
			myDate.year=date.getFullYear();
			myDate.month=date.getMonth()+1;
			myDate.dateNumber=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
			return myDate;
		}else{
			var dates=options.showDate.split("-");
			myDate.year=parseInt(dates[0]);
			myDate.month=parseInt(dates[1]);
			myDate.dateNumber=new Date(myDate.year,myDate.month,0).getDate();
			//需要正则校验
			return myDate;
		}
	}
    var createContentDiv=function(options,showDate,ruleSet){
		var tdWidth=100.0/7;
		var spanHeight=options.spanHeight;
		var firstDiv='<div style="overflow:hidden; padding-left:1px;"><table id="contentTable" style="margin:0;width:'+(showDate.dateNumber*tdWidth)+'%; box-sizing: border-box;border-collapse: collapse;" cellpadding=0 cellspacing=0><tr>';
		for(i=0;i<showDate.dateNumber;i++){
			firstDiv+='<td style="width:'+(100.0/showDate.dateNumber-0.1)+'%;text-align:center;height:45px;">'+showDate.year+'年'+showDate.month+'月'+(i+1)+'日</td>';
		}
		firstDiv+="</tr>"
		firstDiv+="<tr>"
		var x = ruleSet.length;
		if (x>0){
			for (var y=0;y<x;y++){
			//添加第二层tr
				ruleName = ruleSet[y];			
				for(i=1;i<=showDate.dateNumber;i++){
						firstDiv+='<td style="height:45px;border:1px solid #e5e5e5; position:relative;">';
					if(undefined!=options.data[ruleName])
					$.each(options.data[ruleName],function(k,v){
						for(var key in v){
							if(parseInt(key)==i){//如果当天有数据
								for(var t in v[key]){
									var marginLeft=parseInt(t)/24.0*100;
									if(marginLeft>95)marginLeft=92;
									var value = v[key][t];
									var valueList = value.split(";");
									var dataFinal='';
									var length = valueList.length;
									for (var z=0;z<length;z++){
										dataFinal += valueList[z]+"&lt;br&gt;"
									}
									firstDiv+='<span style="position:absolute;margin-left:'+marginLeft+'%;width:5px;height:'+spanHeight+'px;display:inline-block;background-color:'+options.colors[y]+';"><input type="hidden" id="title" value="'+dataFinal+'"/></span>';
								}
							}
							
						}
					});
					firstDiv+="</td>";
				}
				firstDiv+="</tr>"
				firstDiv+="<tr>"
			}
		}
		return firstDiv;		
	}
    
	var createBackTable=function(options,showDate,ruleSet){
		var tdWidth=100.0/showDate.dateNumber;
		var html="<tr>";
		for(i=1;i<=showDate.dateNumber;i++){
			html+='<td style="width:'+tdWidth+'%;text-align:center;height:10px; font-size:10px;">'+i+'</td>';
		}
		html+="</tr>"
		html+="<tr>"
		//添加第二层tr
		var x = ruleSet.length;
		if (x>0){
			for (var y=0;y<x;y++){
			ruleName = ruleSet[y];
			for(i=1;i<=showDate.dateNumber;i++){
					html+='<td style="height:4px;position:relative;">';
					if(undefined!=options.data[ruleName])
					$.each(options.data[ruleName],function(k,v){
						for(var key in v){
							if(parseInt(key)==i){//如果当天有数据
								for(var t in v[key]){
									var marginLeft=parseInt(t)/24.0*100;
									html+='<span style="position:absolute;margin-left:'+marginLeft+'%;width:3px;height:4px;display:inline-block;background-color:'+options.colors[y]+';"></span>';
								}
							}
							
						}
					});
					html+="</td>";
				}
				html+="</tr>"
				if (y!=x-1){
					html+="<tr>"
				}
				//添加第二层tr
			}
		}	
		return html;
	}

	var createSliderDiv=function(options,showDate,ruleSet){
		var html='<div id="sliderDiv" style="border:1px solid #e5e5e5;width:100%;height:55px;position:relative;">';
		html+='';
		html+='<table id="backTable" cellpadding=0 cellspacing=0 style="margin:0;padding:0;width:100%;height:100%;z-index:1;position:absolute;">'+createBackTable(options,showDate,ruleSet)+'</table>';
		
		//html+='<table id="backTable" style="width:100%;height:100%;z-index:1;position:absolute;"><tr><td><span style="width:5px;height:4px;background-color:black;display:inline-block;"></span></td></tr></table>';
		html+='<span  id="sliderMiddleSpan" style="width:100%;height:100%;display:inline-block;position:absolute;z-index:2;"></span>';
		html+=' <span  id="sliderSpan" style="cursor:pointer;background-color:#7ab1dd;opacity:0.6;filter:alpha(opacity=60);width:'+(100.0*7/showDate.dateNumber)+'%;height:100%;display:inline-block;position:absolute;z-index:3;"></span></div>';
		return html;	
	}
	var addSliderEvent=function(options,showDate){
		$("#sliderSpan").mousedown(function(e) { 
        var scrollWidth=$("#sliderDiv").width()-$("#sliderSpan").width();//
		var scrollPercent=($("#sliderDiv").width()-$("#sliderSpan").width())*100.0/$("#sliderDiv").width();;
        var marginLeft=$(this).css("marginLeft");
        var offset = $(this).offset();
        var x = e.pageX - offset.left;   
        $(document).bind("mousemove",function(ev)
        { 
            $("#sliderSpan").stop();//加上这个之后
            var _x = ev.pageX-$("#sliderDiv").offset().left- x;
            var marginLeft=parseInt($("#sliderSpan").css("marginLeft").toLowerCase().replace("px",""));         
            if(_x>scrollWidth)_x=scrollWidth;
            if(_x<0)_x=0
            if(marginLeft>=0&&marginLeft<=scrollWidth){
            $("#sliderSpan").css({marginLeft:_x/scrollWidth*scrollPercent+"%"},10); 
            $("#contentTable").css({marginLeft:-1*_x/scrollWidth*$("#contentTable").width()*((showDate.dateNumber-7.0)/showDate.dateNumber)/$("#sliderDiv").width()*100+"%"},10);
            }
            }); 

		}); 
		$(document).mouseup(function(){ 
			//$("#sliderSpan").css("cursor","default"); //鼠标恢复默认
			$(this).unbind("mousemove"); 
		}) 
	}
	$.fn.myScrollTable=function(options,data,ruleSet){
		var options=$.extend(defaults,options);
		var showDate=getShowDate(options);
		options.data=data;
		$(this).append(createContentDiv(options,showDate,ruleSet));
		$(this).append(createSliderDiv(options,showDate,ruleSet));
		addSliderEvent(options,showDate);	
		if(options.showTips){
			$(this).append('<div id="myTips222" style="display:none; width:auto; max-width:200px; overflow:hidden; padding:20px;position:absolute;z-index:22;background-color:rgba(0,0,0,.5); color:#fff; border-radius:5px;"></div>');
			$("#contentTable tr td span").mouseover(function(e){
				$(this).css("cursor","pointer");
				//$("#myTips222").html($(this).children("input").val()).css({"left":e.pageX-$("#contentTable").offset().left,"top":e.pageY-$("#contentTable").offset().top}).show();
				
	var newWidth=e.pageX-$("#contentTable").offset().left-parseFloat($("#contentTable").css("marginLeft").toLowerCase().replace("px",""))*-1;			$("#myTips222").html($(this).children("input").val()).css({"left":newWidth+12,"top":e.pageY-$("#contentTable").offset().top}).show();
			}).mouseout(function(){
				$("#myTips222").hide();
			});
		}
	}

	var getTestData=function(showDate){
		var data={};
		for(var i=1;i<=6;i++){//6种
			var arr=[];
			for(var d=1;d<=showDate.dateNumber;d++){//每一天
				var addNumber=Math.floor(Math.random()*4);//添加几个0~4
				var dayDatas={};
				var timeDatas={};
				for(var m=0;m<addNumber;m++){
					var time=Math.ceil(Math.random()*24);
                    if(undefined==timeDatas[time])timeDatas[time]="something";
                    else m--;
				}
                dayDatas[d]=timeDatas;
                arr.push(dayDatas);
			}
			data["row"+i]=arr;
		}
		return data;
	}
})(jQuery);

var previousMonth=function(){
  $("#depthChart").empty();
  var dateCurrent = $("#dateCurrent").val();
   $.ajaxSettings.async = false; 
    var date;
    var data;
    var ruleSet;
    $.getJSON("/analysis/ruleAnalysis/", {"time":"previous","dateCurrent":dateCurrent},function(ret){
          data=ret.ruleData;
          date={showDate:ret.dateShown};
          ruleSet = ret.ruleSet;
          dateCurrent = ret.dateShown;
            })
    $("#dateCurrent").val(dateCurrent);
    $("#depthChart").myScrollTable(date,data,ruleSet);
}

var nextMonth=function(){
  $("#depthChart").empty();
   var dateCurrent = $("#dateCurrent").val();
   $.ajaxSettings.async = false; 
    var date;
    var data;
    var ruleSet;
    $.getJSON("/analysis/ruleAnalysis/", {"time":"next","dateCurrent":dateCurrent},function(ret){
          data=ret.ruleData;
          date={showDate:ret.dateShown};
          ruleSet = ret.ruleSet;
           dateCurrent = ret.dateShown;
            })
    $("#dateCurrent").val(dateCurrent);
    $("#depthChart").myScrollTable(date,data,ruleSet);

}