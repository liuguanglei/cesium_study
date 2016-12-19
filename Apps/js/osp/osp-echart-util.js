/**
 * 生成双环饼图
 * 参数说明：
 * element: 插入对象, eg: document.getElementById('alarmChart');
 * data:数据集合, eg:
 [
	{name: "规则异常", value: 300, children: [
		{name: "规则1",value: 150},
		{name: "规则2",value: 100},
		{name: "规则3",value: 50}
	]},
	{name: "基线异常", value: 250, children: [
		{name: "规则4",value: 100},
		{name: "规则5",value: 100},
		{name: "规则6",value: 50}
	]},
	{name: "流量异常", value: 500, children: [
		{name: "规则7",value: 200},
		{name: "规则8",value: 100},
		{name: "规则9",value: 200}
	]}
];
 */
function createDoublePieChart(element, data){
	var innerData = [], outsideData = [];
	for (var i = 0; i< data.length; i++) {
		innerData.push({name: data[i]['name'], value: data[i]['value']});
		outsideData = outsideData.concat(data[i]['children']);
	}	
	var pieChart = echarts.init(element);
	var option = {
	    tooltip : {
	        show: true,
	        formatter: "{b}<br/>  数量:{c}  ({d}%)"
	    },
	    calculable : false,
	    series : [
	        {
	            name: "",
	            type:'pie',
	            center : ['35%', 200],
	            radius : '45%',
	            itemStyle : {
	                normal : {
	                    label : {
	                        position : 'inner',
	                        formatter : function (params) {                         
	                          return (params.percent - 0).toFixed(0) + '%'
	                        }
	                    },
	                    labelLine : {
	                        show : false
	                    }
	                },
	                emphasis : {
	                    label : {
	                        show : true,
	                        formatter : "{b}\n{d}%"
	                    }
	                }	                
	            },
	            data:innerData
	        },
	        {
	            name: "",
	            type:'pie',
	            center : ['35%', 200],
	            radius : ['51%', '80%'],
	            data : outsideData
	        }      
	    ]
	};
	pieChart.setOption(option);
	return pieChart;
}

/**
 * 生成折线状图
 * 参数说明：
 * element: 插入对象, eg: document.getElementById('alarmChart');
 * data:数据集合, eg:
[
	{name: "2016-03-01",value: 100},  
	{name: "2016-03-02",value: 20},
	{name: "2016-03-03",value: 50},
	{name: "2016-03-04",value: 60},
	{name: "2016-03-05",value: 70},
	{name: "2016-03-06",value: 90},
	{name: "2016-03-07",value: 150},
	{name: "2016-03-08",value: 102}
];
 */
function createLineChart(element, data){
	var xData = [], yData = [];
	for (var i = 0; i< data.length; i++) {
		xData.push(data[i]['name']);
		yData.push(data[i]['value']);
	}	
	var lineChart = echarts.init(element);
	
	var option = {
		backgroundColor:'#FFF',
		tooltip : {
	     	show: true,
	     	formatter: "{b}<br/>  数量: {c}"
	 	},
	    legend: { data:[] },
	    xAxis: {
	        name:"日期",
	        nameTextStyle:{fontSize: 12,color: '#7d7d7d'},
	        data: xData,
	        boundaryGap : false,
	        splitLine:{ show:false },
	        axisLabel:{
	            textStyle:{fontSize: 12,color: '#7d7d7d'},
	            rotate:45
	        }
	     },
	     yAxis: {show:true,
	      name:"数量",
	      nameTextStyle:{fontSize: 12,color: '#7d7d7d'},
	      splitLine:{ show:false },
	      axisLabel:{
	          textStyle:{fontSize: 12,color: '#7d7d7d'}
	      }
	  },
	     series: [{
	         name: '',
	         type: 'line',
	         data: yData,
	         itemStyle: {
	             normal: {
	                 color:"#7d7d7d"
	             }
	         }
	     }]
	 };
	lineChart.setOption(option);
	return lineChart;
}