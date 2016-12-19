var svgTopo = {
    hostTarget:'',
    checkColor:'#008af1',//'#ff643b',
    //线的颜色
    lineColor:{
        default:'#d9d9d9',
        checked:'#ff2600'
    },
//            lineColorDefault:'#d9d9d9',//默认 #d9d9d9 灰色
//            lineColorChecked:'#ff2600',//选中 #ff2600 红色
    //主机颜色
    hostColor:{
        Normal:'#92d050',
        General:'#90fb9c',
        Warning:'#fef802',
        Critical:'#ff2600'
    },
//            hostColorNormal:'#', //正常（健康）| #92d050 绿色
//            hostColorGeneral:'#',//一般 （亚健康）|#90fb9c 淡绿色
//            hostColorWarning:'#',//警告 (有问题）｜#fef802 黄色
//            hostColorCritical:'#',//宕机 (有严重问题)｜#ff2600 红色
    //主机四项指标颜色 A:'#ff2600',红色｜有问题、B:'#228b22',绿色｜没问题、C:'#228b22',灰色｜不可用
    //0:健康， 1，低危， 2、中低危，3、中危，4、中高危 5、高危   <0 不可用
    hostTargetColor:{
        A:'#ff2600',B:'#ff643b',C:'#228b22',D:'#d9d9d9'
//                                    Virus:{A:'#ff2600',B:'#ff643b',C:'#228b22',D:'#d9d9d9'},
//                                    Trends:{A:'#ff2600',B:'#ff643b',C:'#228b22',D:'#d9d9d9'},
//                                    ENV:{A:'#ff2600',B:'#ff643b',C:'#228b22',D:'#d9d9d9'},
//                                    Communicate:{A:'#ff2600',B:'#ff643b',C:'#228b22',D:'#d9d9d9'}
    },
//            hostTargetColorVirus:{A:'#',B:'#',C:'#'},
//            hostTargetColorTrends:{A:'#',B:'#',C:'#'},
//            hostTargetColorENV:{A:'#',B:'#',C:'#'},
//            hostTargetColorCommunicate:{A:'#',B:'#',C:'#'},

    widthPer100:'100%',
    heightPer100:'100%',
    //画布宽 widthAll／高 heightAll
    widthAll : 1020,
    heightAll : 660,
    //线 宽 widthAllEx（横向长） ｜ 高 heightAllEx（竖向高）
    widthAllEx : 1022,
    heightAllEx : 662,
    //横线长度 widthLine
    widthLine : 1002,//1002
    //树线长度 heightLine
    heightLine : 630,
    //空格宽 blankWidth｜高 blankHeight
    blankWidth : 60,
    blankHeight : 50,
    //方格宽squareWidth｜高squareHeight   长方形——代表主机
    squareWidth : 24,//40
    squareHeight : 24,//27

    //61 121 181 241 301
    firstLineStartX:61,//61
    //58 108 158 208 258
    firstLineStartY:58,//58

    //18/2=9
//            lineStartX : ((this.widthAll - this.widthLine)/2),
    lineStartX : function(){
        return (this.widthAll - this.widthLine)/2;
    },
    //30/2=15
//            lineStartY : ((this.heightAll - this.heightLine)/2),
    lineStartY : function(){
        return (this.heightAll - this.heightLine)/2;
    },
    //第一个主机坐标  主机 40*30（W＊H）  25*25
    firstHost_X : 79,//71
    firstHost_Y : 71,//67
    //第一个主机坐标  主机 40*30（W＊H）  25*25
    varX : function(x){
        var X = this.firstHost_X + x * this.blankWidth;
        return X;
    },
    varY : function(y){
        var Y = this.firstHost_Y + y * this.blankHeight;
        return Y;
    },
    //主机是个状态值xy坐标 ｛begin
    //引用事例 svgTopo.firstAxy().A0x  | svgTopo.firstAxy().A0y
    //主机四种状态坐标点 X 轴 firstHost_X += firstHost_X * 'x' * squareWidth;
    //主机四种状态坐标点 Y 轴 firstHost_Y += firstHost_Y * 'x' * squareHeight;  | 同一行
    //病毒引擎
    firstABCDWidth:8,
    firstABCDHeight:8,
    firstAxy : function(x,y){
        var A0x = x - 8;//-2
        var A0y = y + 29;
        return {A0x:A0x,A0y:A0y};
    },
    //动态安全
    firstBxy : function(x,y){
        var B0x = x + 3;//10
        var B0y = y + 29;
        return {B0x:B0x,B0y:B0y};
    },
    //环境安全
    firstCxy : function(x,y){
        var C0x = x + 14;//22
        var C0y = y + 29;
        return {C0x:C0x,C0y:C0y};
    },
    //通信安全
    firstDxy : function(x,y){
        var D0x = x + 25;//34
        var D0y = y + 29;
        return {D0x:D0x,D0y:D0y};
    },
    //主机是个状态值xy坐标 end｝

    startX:0,//起始x轴方向坐标第一个开始，第一个为0
    startY:0,//起始y轴方向坐标第一个开始，第一个为0

    endX:15,//x轴方向15个
    endY:11,//y轴方向11个

    //可用格 行 rowsBlank＝15 ｜ 列 columnsBlank ＝ 11
    rowsBlank:15,//x轴方向15个位置
    columnsBlank:11,//y轴方向15个位置

    //主机总个数
    totalHosts : function(){
        return this.rowsBlank * this.columnsBlank;
    },
    INFO:'', //information  主机汇总信息
    PN:1,//pageNum         当前页
    PS:165,//pageSize        每页条数  最大165条
    TS:0,//totals          总条数
    hosts:[],
    hostMap:null
};