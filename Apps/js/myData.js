

//////////////////纪录图表//////////////////////////
    /*
        后台加数据
        currentPage:当前第几页，从0开始，需要传递到后台查询数据
        返回的数据json格式：[{"level":1,"date":"4-27"},{"level":2,"date":"4-26"},{"level":1,"date":"4-25"},{"level":0,"date":"4-24"}]
        注意事项：
        level：图标的颜色,0-00ba63绿色,1-ffca00黄色,2-ce1c00红色,3-b5b5b5灰色
        date:日期，json数据请按日期逆序排列，谢谢
    */
    var mySingletonData = (function () {
        var instance={currentPage:0,levels:null,dates:null,colors:["#00ba63","#ffca00","#ce1c00","#b5b5b5"]};
        return instance;
    })();
        //console.log(JSON.stringify(reserve(createTestData(mySingletonData.currentPage,mySingletonData.currentPage+30))));
        /*addSpan(reserve(createTestData(mySingletonData.currentPage,mySingletonData.currentPage+30)),colors);*/
    function getColors(datas){
        var level=[];
        for(var i=0;i<datas.length;i++){
            level.push(datas[i]["level"]);
        }
        return level;
    }
    function getDates(datas){
        var dates=[];
        for(var i=0;i<datas.length;i++){
            dates.push(datas[i]["date"]);
        }
        return dates;
    }

    function addSpan(datas,colors){
        $("#chartChunk").empty();
        //var delayTime = 500;//默认延时
        mySingletonData.levels=getColors(datas);
        mySingletonData.dates=getDates(datas);
        $("#timeDuration").text(mySingletonData.dates[0]+" ～ "+mySingletonData.dates[mySingletonData.dates.length-1]);
        //console.log(mySingletonData.dates[0]+"~"+mySingletonData.dates[mySingletonData.dates.length-1])
        var colorList=new Array();
        for(var i=0;i<datas.length;i++){
            var color = colors[i];
            var spanHtml='<span title="'+mySingletonData.dates[$("#chartChunk span").length]+'" style="width:25px;height:23px;display:inline-block;border: 1px solid #fff;background-color:'+color+'"></span>';
            $("#chartChunk").append(spanHtml);

            // setTimeout(function(){
            //     var spanHtml='<span title="'+mySingletonData.dates[$("#chartChunk span").length]+'" style="width:25px;height:23px;display:inline-block;border: 1px solid #fff;background-color:'+color+'"></span>';
            //     $("#chartChunk").append(spanHtml);},delayTime+i*10);
        }


        /*鼠标位置
        $(document).on("mouseover","#chartChunk span",function(e){
            var offset=10;
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
            $("#titleSpan").text(mySingletonData.dates[$(this).index()]).css({left:xx+offset+440,top:yy+offset+300,display:"block"});
        });
        $(document).on("mousemove","#chartChunk span",function(e){
            var offset=10;
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
            $("#titleSpan").css({left:xx+offset+440,top:yy+offset+300});
        });
         $(document).on("mouseout","#chartChunk span",function(){
            $("#titleSpan").css({display:"none"});
        });*/
       /* $(document).off("click","#chartChunk span").on("click","#chartChunk span",function(){
            alert("请后台人员去查询("+mySingletonData.dates[$(this).index()]+")的数据，并进行展示更新");
        });*/
    }

/////////////////////测试数据///////////////////////
    function createTestData(start,before){
        var datas=[];
        for(var i=start;i<before;i++){
            var data={};
            data.level=createRandom(0,3);
            data.date=getMMDD(i);
            datas.push(data);
        }
        return datas;
    }
    function reserve(datas){
        var newData=[];
        for(var i=0;i<datas.length;i++){
            newData.push(datas[datas.length-1-i]);
        }
        return newData;
    }
    function createRandom(start,end){
        return Math.floor(Math.random()*(end-start))+start;
    }
    function getMMDD(num){
        var date=new Date(new Date().getTime()-num*24*3600000);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }
