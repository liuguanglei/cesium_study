/**
 * 0:成功 1：失败
 * @type {{YES: string, NO: string}}
 */
var YesOrNo={
    YES:"1",
    NO:"0"
};
var Status = {
    SUCCESS:"1",
    FAIL:"0"
};

/**
 * 异步调用
 */
var doAjax = function(req){
    var type = req.type==undefined?'POST':req.type;
    var dataType = req.dataType==undefined?'json':req.dataType;
    var async = req.async==undefined?true:req.async;
    var url = req.url;
    var data = req.data;
    var backSuccess = req.success;
    $.ajax({
        type : type,
        url : url,
        data : data,
        async: async,
        success : function(dataResp) {
            if(!dataResp){
                alert('通讯异常。');
                return;
            }
            if(backSuccess) {
            	backSuccess(dataResp);
            }
        }
    });
};
/**
 * 获取form表单数据
 * @param frm
 * @returns
 */
var getFormJson = function(frm) {
    var o = {};
    var a = $(frm).serializeArray();
    $.each(a, function(){
        if(o[this.name] !== undefined) {
            if(!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
/**
 * form 表单异步提交
 * @param frm
 */
var form_submit_ajax = function (frm,fun_validate) {
    if(frm){
        var form = $(frm);
        var req = {};
        req.url = form.attr("action");
        req.type = form.attr("method");
        req.data = getFormJson(form);

        if(fun_validate!=null && !fun_validate()){
            return;
        }

        req.success = form_submit_ajax_success;
        doAjax(req);
    }else{
        //非form
    }
};
/**
 * form 表单异步提交回调
 * @param resp
 */
var form_submit_ajax_success = function (resp) {
    var msg = resp.msg;
    if(!msg){
        alert("通讯数据异常");
        return;
    }else{
        if(msg.status==Status.SUCCESS){
            if(msg.nextUrl){
                if(msg.async==YesOrNo.YES){
                    handleCheckPageLoadUrl(msg.nextUrl);
                }else{
                    window.location.href=msg.nextUrl;
                }
            }else{
                back_success(resp);
            }
        }else{
            back_fail(resp);
        }
    }
};

function gettime(time){
    var datenow;
    if (time){
	   datenow=new Date(time);
    }
    else{
        datenow = new Date();
    }
	var year=datenow.getFullYear();
	var month=datenow.getMonth()+1;
	if (month < 10) {
		month = "0" + month;
	}
  	var day=datenow.getDate();
	if (day<10)
    	day="0"+day;
	var hour=datenow.getHours();
 	if (hour<10)
    	hour="0"+hour;
	var minutes=datenow.getMinutes();
	if (minutes<10)
    	minutes="0"+minutes;
	var seconds=datenow.getSeconds();
 	if (seconds<10)
    	seconds="0"+seconds;
	var dateformat=year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
	return dateformat;
}

function formReset(formId) {
	$(':input','#'+ formId)
	.not(':button, :submit, :reset, :hidden')
	.val('')
	.removeAttr('checked')
	.removeAttr('selected');
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

//验证起始时间与结束时间,起始时间不能大于结束时间
function validateTime(){
    var timeStart = $("#timeStart").val();
    var timeEnd = $("#timeEnd").val();
    if (timeStart&&timeEnd){
        if (timeStart > timeEnd){
            alert("起始时间不能大于结束时间");
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return true;
    }
    /*else if (!timeStart&&!timeEnd){
        return true;
    }
    else {
        alert("请输入有效的时间范围");
        return false;
    }*/
}

/*局部加载页面的模块*/
function loadAreaAjax(target_url,target_area,datainfo){
    $.ajaxSettings.async = false; 
    $.ajax({
          type: 'GET',
          data:datainfo,
          url: target_url, 
          dataType: 'html',   
          success: function(data) {
             $("#"+target_area).html(data);
             $("#"+target_area).show();
          },
          error: function(jqXHR, textStatus, errorThrown) {
          }
    });
}

/*默认datetimepicker插件选择日期后的时间为当天的开始*/
function changeTimeStart(timeString){
    var time_selected = timeString.split(" ");
    time_selected = time_selected[0] + " 00:00:00";
    return time_selected;
}
/*默认datetimepicker插件选择日期后的时间为当天的结束*/
function changeTimeEnd(timeString){
    var time_selected = timeString.split(" ");
    time_selected = time_selected[0] + " 23:59:59";
    return time_selected;
}


/*保留滚动条的位置*/
function  Trim(strValue){     
        strValue =  strValue.replace(/^s*|s*$/g,"");    
        strValue =  strValue.replace(" ","");     
        return strValue;
}
     
function SetCookie(sName,sValue){      
       document.cookie = sName + "=" + escape(sValue);    
}   

function GetCookie(sName){     
    var aCookie = document.cookie.split(";");    
    for(var　i=0;　i　< aCookie.length;　i++){     
        var aCrumb = aCookie[i].split("=");
        if(sName　== Trim(aCrumb[0])){   
           return unescape(aCrumb[1]);    

        }     
    }     
    return null;     
} 
     
function scrollback(sName,divName){
    if(GetCookie(sName)!=null){
        $("#"+divName).scrollTop(GetCookie(sName));
    }     
}     