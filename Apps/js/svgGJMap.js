//svg攻击地图对象信息
var svgGJMap = {
    svgID:'Layer_2',
    svgName:'svgGongJiMap',
    svgGJTitle:'内网攻击',
    svgStartX:'0px',
    svgStartY:'0px',
    svgWidth:'1024px',//860px
    svgHeight:'768px',//600px
    //区域
    areas:null,
    //主机
    hosts:[],
    //攻击
    attacks:[],
    areaAT:[],
    areaAS:[],
    //标准12区域坐标可计算48区域，192区域坐标，768区域
    //12区域1、2、3、4...12
    //48区域1-1，1-2，1-3，1-4，...12-1，12-2，12-3，12-4
    //192区域1－1-1，1-1-2，1-1-3，1-1-3.....
    LOCATION:{"name":"line1","locations":[
        {"ORDER":"1","X":"128","Y":"128"},
        {"ORDER":"2","X":"384","Y":"128"},
        {"ORDER":"3","X":"640","Y":"128"},
        {"ORDER":"4","X":"896","Y":"128"},
        {"ORDER":"5","X":"128","Y":"384"},
        {"ORDER":"6","X":"384","Y":"384"},
        {"ORDER":"7","X":"640","Y":"384"},
        {"ORDER":"8","X":"896","Y":"384"},
        {"ORDER":"9" ,"X":"128","Y":"640"},
        {"ORDER":"10","X":"384","Y":"640"},
        {"ORDER":"11","X":"640","Y":"640"},
        {"ORDER":"12","X":"896","Y":"640"}
    ]},
    //两次放大坐标个数
    zoom:function(X, Y,ORDER,zlol,level) {
        var x = new Decimal(this.LOCATION.locations[0].X);
        var y = new Decimal(this.LOCATION.locations[0].Y);
        var X = new Decimal(X);
        var Y = new Decimal(Y);
        if(level == '1'){
            x = x;
            y = y;
        }else if(level == '2'){
            x = x.div(1);
            y = y.div(1);
        }else if(level == '3'){
            x = x.div(2);
            y = y.div(2);
        }else if(level == '4'){
            x = x.div(4);
            y = y.div(4);
        }

        var orxy1 = new Object();
        orxy1.X = X.sub(x.div(2)).toString();
        orxy1.Y = Y.sub(y.div(2)).toString();
        zlol.put(ORDER + '-1', orxy1);

        var orxy2 = new Object();
        orxy2.X = X.add(x.div(2)).toString();
        orxy2.Y = Y.sub(y.div(2)).toString();
        zlol.put(ORDER + '-2', orxy2);

        var orxy3 = new Object();
        orxy3.X = X.sub(x.div(2)).toString();
        orxy3.Y = Y.add(y.div(2)).toString();
        zlol.put(ORDER + '-3', orxy3);

        var orxy4 = new Object();
        orxy4.X = X.add(x.div(2)).toString();
        orxy4.Y = Y.add(y.div(2)).toString();
        zlol.put(ORDER + '-4', orxy4);
    },
    //通过区域x、y坐标演算所有坐标| 12区域 区域内最多坐标数81个主机位置
    lolMap:function (x,y){
        //位移5个像素
        x = x - 3;
        y = y - 3;
        var xx = [new Decimal(x).sub(80).toString(),
            new Decimal(x).sub(60).toString(),
            new Decimal(x).sub(40).toString(),
            new Decimal(x).sub(20).toString(),
            new Decimal(x).toString(),
            new Decimal(x).plus(20).toString(),
            new Decimal(x).plus(40).toString(),
            new Decimal(x).plus(60).toString(),
            new Decimal(x).plus(80).toString()];

        var yy = [new Decimal(y).sub(80).toString(),
            new Decimal(y).sub(60).toString(),
            new Decimal(y).sub(40).toString(),
            new Decimal(y).sub(20).toString(),
            new Decimal(y).toString(),
            new Decimal(y).plus(20).toString(),
            new Decimal(y).plus(40).toString(),
            new Decimal(y).plus(60).toString(),
            new Decimal(y).plus(80).toString()];

        var nxy = new Array();
        for(var x1 = 0;x1<xx.length;x1++){
            for(var y1 =0;y1<yy.length;y1++){
                var xy = new Object();
                xy.x = xx[x1];
                xy.y = yy[y1];
                nxy.push(xy);
            }
        }
        return nxy;
    },
    step:function(lal,ahl){
        var step = 1;
        if(new Decimal(lal).div(ahl)>40){
            step = 40+1;
        }else if(new Decimal(lal).div(ahl)>30){
            step = 30+1;
        }else if(new Decimal(lal).div(ahl)>20){
            step = 20;
        }else if(new Decimal(lal).div(ahl)>14){
            step = 14;
        }else if(new Decimal(lal).div(ahl)>13){
            step = 13;
        }else if(new Decimal(lal).div(ahl)>12){
            step = 12;
        }else if(new Decimal(lal).div(ahl)>11){
            step = 11;
        }else if(new Decimal(lal).div(ahl)>10){
            step = 10;
        }else if(new Decimal(lal).div(ahl)>9){
            step = 9;
        }else if(new Decimal(lal).div(ahl)>8){
            step = 8;
        }else if(new Decimal(lal).div(ahl)>7){
            step = 7;
        }else if(new Decimal(lal).div(ahl)>6){
            step = 6;
        }else if(new Decimal(lal).div(ahl)>5){
            step = 5;
        }else if(new Decimal(lal).div(ahl)>4){
            step = 4;
        }else if(new Decimal(lal).div(ahl)>3){
            step = 3;
        }else if(new Decimal(lal).div(ahl)>2){
            step = 2;
        }else if(new Decimal(lal).div(ahl)>=1){
            step = 1;
        }else{
        }
        return step;
    }
};
