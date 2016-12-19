// JavaScript Document


//////////////////////////small map
///////////////数据准备//////////////////////
     var geoCoordMap = {
    '阿富汗':[67.709953,33.93911],
    '安哥拉':[17.873887,-11.202692],
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
};
/*
    测试数据说明
    数据格式：JSON数组
    数据样例：[{srcCity:"北京",destCity:"广州",attNum:90,level:1},{srcCity:"上海",destCity:"保定",attNum:40,level:5}];
    字段说明：
    srcCity:发起攻击的城市
    destCity:被攻击的城市
    attNum:攻击次数
    level:严重程度，取值为1~5，分别对应颜色 lime green yellow orange red
*/
    var lineNumber=2;//多少条数据，也就是多少条线
    
    //创建测试数据
    function createTestData(num){
        var testDatas=[];
        //获取地名
        var cities=[];
        for(var key in geoCoordMap){
            cities.push(key);
        }
        for(var i=0;i<num;i++){
             testDatas.push({srcCity:getRandomCity(cities),destCity:getRandomCity(cities),attNum:getRandomAttNum(),level:getRandomLevel()});

        }
        return testDatas;
    }
    //随机获取一个城市名
    function getRandomCity(cities){
        return cities[Math.floor(Math.random()*cities.length)];
    }
    //随机生成一个攻击次数
    function getRandomAttNum(){
        return Math.floor(Math.random()*100)+50;
    }
    //随机生成一个严重级别
    function getRandomLevel(){
        return Math.floor(Math.random()*5)+1;
    }
    var testData=createTestData(lineNumber);
    

/////////////////////////////////
function drawMap(datas){
    var attNum = new Array();
    var levelColor=["lime","red"];
    var level=["正常通信","恶意通信 "];
    var myMap_chart = echarts.init(document.getElementById('map_small'));
    //获取被攻击城市
    var targetCities={};//{"上海":12}
    
    var datasGroupByLevel={"1":[],"2":[]};
    for(var i=0;i<datas.length;i++){
        //{srcCity:"北京",destCity:"广州",attNum:90,level:1}
        var data=datas[i];
        attNum.push(data.attNum);
        if(data.attNum>10){
            data.attNum=10;
        }
        if(undefined==targetCities[data.destCity])targetCities[data.destCity]=data.level;
        else{
            var existsLevel=JSON.stringify(targetCities[data.destCity]);
                if(existsLevel.indexOf(data.level)<0){
                    targetCities[data.destCity]=existsLevel+data.level;
                }
            }
        datasGroupByLevel[data.level].push(data);
    }
    var series = [];
    for(var key in datasGroupByLevel){
        var existDestCities={};
        var data=datasGroupByLevel[key];
        var colorNumber=parseInt(key)-1;
         series.push({
        name: level[colorNumber],
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6-colorNumber,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: levelColor[colorNumber],
                width: 0,
                curveness: 0.2
            }
        },
        
        data: convertLinesData(data)//item[1]
    },
    {
        name: level[colorNumber],
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6-colorNumber,
            trailLength: 0,
            symbol: 'pin',//planePath,
            symbolSize: 15
        },
        
        lineStyle: {
            normal: {
                color: levelColor[colorNumber],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: convertLinesData(data)//item[1]
    },
    {
        name: level[colorNumber],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: levelColor[colorNumber]
            }
        },
        //data: convertEffectData(targetCities,data)
        data: convertEffectData(targetCities,existDestCities,data)
    });
    }
    option = {
    tooltip : {
        trigger: 'item',
        formatter:function(params,ticket,callback){
            var cityName=params["name"];  
            var srcCity=datasGroupByLevel[level.indexOf(params.seriesName)+1][params.dataIndex]["srcCity"];
            if(""==cityName){//如果为空，则是源城市
                var totalHtml="("+srcCity+")发起通信次数：";
                var detailHtml="";
                var sum=0;
                for(var i=0;i<datas.length;i++){
                    var data=datas[i];
                    var num=attNum[i];
                    if(srcCity==data.srcCity){
                        detailHtml+="("+data.srcCity+")向("+data.destCity+")发起"+num+"次通信<br/>";
                        sum+=num;
                    }
                }
                return detailHtml;
        }
            /*var cityName=params["name"];  
            if(""!=cityName){//如果不为空，则是被攻击城市
                var totalHtml="("+cityName+")被攻击总数：";
                var detailHtml="";
                var sum=0;
                for(var i=0;i<datas.length;i++){
                    var data=datas[i];
                    if(cityName==data.destCity){
                        detailHtml+="("+data.srcCity+")发起("+data.attNum+")次("+level[data.level-1]+")攻击<br/>";
                        sum+=data.attNum;
                    }
                }
                return totalHtml+sum+"<br/>"+detailHtml;
            }*/
        //return '攻击起点';
        }
    },
   // backgroundColor: '#404a59',    
/*    tooltip : {
        trigger: 'item'
    },*/
/*    legend: {
        orient: 'vertical',
        top: 'top',
        left: 'right',
        data:["轻微","低级","中级","高级","严重"],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple'//single
    },*/
    geo: {
        map: 'world',
        label: {
            normal:{show:false},
            emphasis: {
                show: false
            }
        },
        roam: true,
        scaleLimit:{max:5,min:1},
        itemStyle: {
            normal: {
                areaColor: '#94a1ad',
                borderColor: '#ccc'
            },
            emphasis: {
                areaColor: '#eee'
            }
        }
    },
    series: series
};
/*console.log(JSON.stringify(series));
*/myMap_chart.setOption(option);  
}

function convertLinesData(datas){
    var res = [];
    for (var i = 0; i < datas.length; i++) {
        var dataItem = datas[i];
        var fromCoord = geoCoordMap[dataItem.srcCity];
        var toCoord = geoCoordMap[dataItem.destCity];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
}

function convertEffectData(targetCities,existDestCities,datas){//
    var result =new Array();
    for(var i=0;i<datas.length;i++){
        var dataItem=datas[i];
        if(undefined==targetCities[dataItem.srcCity]||JSON.stringify(targetCities[dataItem.srcCity]).indexOf(dataItem.level)<0)
        result.push({name: dataItem.srcCity,value: geoCoordMap[dataItem.srcCity].concat(1)});
        if(undefined==existDestCities[dataItem.destCity]||JSON.stringify(existDestCities[dataItem.destCity]).indexOf(dataItem.level)<0){
             if(undefined==existDestCities[dataItem.destCity])existDestCities[dataItem.destCity]=existDestCities.level;
        else{
            var existsLevel=existDestCities[dataItem.destCity];
                if(JSON.stringify(existsLevel).indexOf(dataItem.level)<0){
                    existDestCities[dataItem.destCity]=existsLevel+dataItem.level;
                }
            }
        existDestCities[dataItem.destCity]=dataItem.level;
        result.push({name: dataItem.destCity,value: geoCoordMap[dataItem.destCity].concat([dataItem.attNum])});
        }
    }
    return result;
}

/*drawMap(testData);
*///////////////////////////small map end