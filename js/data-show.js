$(function(){
  gradeShow();

  orderShow();

  mapShow();

  achievementShow();
  salesShow();

    //2的功能
    var index = 0;
    var timer = setInterval(function(){
        index=(index ==1)?0:index+1;
        $(".day-ul").hide().eq(index).show();
    },3000)


    //4的功能
    var indexF=0;
    var timerF= setInterval(function(){
        indexF=(indexF==2)?0:indexF+1;
        $(".day-tj h3").hide().eq(indexF).show();
    },1000);

    //7的滚动功能
    setInterval(function(){
        $(".new-order-show").find('ul').animate({
            marginTop:'-14px'
        },500,function(){
           $(this).css({marginTop : "0px"}).find("li:first").appendTo(this); 
        });
    },3000);  
      // function autoScroll(obj){  
      //       $(obj).find("ul").animate({  
      //           marginTop : "-39px"  
      //       },500,function(){  
      //           $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  
      //       })  
      //   }  
        
           
        

  //各等级的数量分布
  function gradeShow(){
    var myChart = echarts.init(document.getElementById('grade-show'));
    var option = {
          color:['blue', 'green','red','yellow','#F700D5'],
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'horizontal',
              y:'bottom',
              data:['执行董事','总代','天使','总裁','操盘合伙人'],
              textStyle:{
                color:'#fff'
               }
          },
          series: [
              {
                  name:'各等级数量',
                  type:'pie',
                  selectedMode: 'single',
                  radius: [0, '30%'],

                  label: {
                      normal: {
                          position: 'inner'
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                      {value:20000, name:'执行董事', selected:true},
                      {value:100000, name:'总代'},
                      {value:300000, name:'天使'}
                  ]
              },
              {
                  name:'各等级数量',
                  type:'pie',
                  radius: ['40%', '55%'],
                  data:[
                      {value:100000, name:'总代'},
                      {value:20000, name:'执行董事'},
                      {value:2000, name:'总裁'},
                      {value:500, name:'操盘合伙人'},
                      {value:300000, name:'天使'}
                  ]
              }
          ]
      };
      myChart.setOption(option);
      window.onresize = myChart.resize;
  }

  function orderShow(){
    var myChart = echarts.init(document.getElementById('order-show'));
    var option = {
        color: ['#3398DB'],
        textStyle:{
            color:'#fff'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['1日', '2日', '3日', '4日', '5日', '6日', '7日','8日', '9日', '10日'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'每日下单量',
                type:'bar',
                barWidth: '60%',
                data:[3500, 4571, 4814, 5243, 7587, 4579, 4268,3584,2546,2579]
            }
        ]
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
  }

  function mapShow(){
    var myChart = echarts.init(document.getElementById('map-show'));
    var geoCoordMap = {
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
        
       
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
       
        '重庆': [107.7539,30.1904],
        
        '安徽': [117.2461,32.0361],
        '福建': [118.3008,25.9277],
        '甘肃': [95.7129,40.166],
        '广东': [113.4668,22.8076],
        '广西': [108.2813,23.6426],
        '贵州': [106.6113,26.9385]
    };

    var BJData = [
        [{name:'北京'}, {name:'安徽',value:120}],
        [{name:'北京'}, {name:'福建',value:150}],
        [{name:'北京'}, {name:'甘肃',value:130}],
        [{name:'北京'}, {name:'广东',value:110}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}],
        [{name:'北京'}, {name:'广东',value:150}]
      
    ];

    var SHData = [
        [{name:'上海'},{name:'包头',value:95}]
       
    ];

    var GZData = [
        [{name:'广州'},{name:'福州',value:95}]
       
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
             hoverable: false,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 1
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    borderWidth:1,
                   // borderColor:'rgba(30,144,255,0.5)',
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top10',
            type: 'map',
            zlevel: 2,
            symbol: 'emptyCircle',
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                //symbol: planePath,
                symbolSize: 30
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top10',
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
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    var option = {

        title : {
            text: '',
            subtext: '',
            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            scaleLimit:{min:1.1,max:1.1},
            roam:false,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        dataRange: {
            min : 0,
            max : 100,
            calculable : true,
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            }
        },
        series: series
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
  }

  function achievementShow(){
    var myChart = echarts.init(document.getElementById('achievement-show'));
    var option = {
        color:['red', '#F700D5','yellow','blueviolet','#fff'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            y: 'bottom',
            data:['雄鹰团队','猛虎团队','群狼团队','神勇团队','财神团队'],
            textStyle:{
                color:'#fff'
            }
        },
        series: [
            {
                name:'团队业绩',
                type:'pie',
                radius: ['40%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:88641.00, name:'雄鹰团队'},
                    {value:95462.00, name:'猛虎团队'},
                    {value:158461.00, name:'群狼团队'},
                    {value:685145.00, name:'神勇团队'},
                    {value:912406.00, name:'财神团队'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
  }

  function salesShow(){
     var myChart = echarts.init(document.getElementById('sales-show'));
    var option = {
        color:['red', 'green','yellow','blueviolet','blue'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            y: 'bottom',
            data:['梦想团队','精英团队','超能团队','兄弟团队','飞跃团队'],
            textStyle:{
                color:'#fff'
            }
        },
        series: [
            {
                name:'团队业绩',
                type:'pie',
                radius: ['40%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:5000, name:'梦想团队'},
                    {value:8412, name:'精英团队'},
                    {value:8475, name:'超能团队'},
                    {value:7111, name:'兄弟团队'},
                    {value:6142, name:'飞跃团队'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
  }
});