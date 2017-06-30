$(function() {
    gradeShow();

    orderShow();

    mapShow();

    achievementShow();
    salesShow();

    //2的功能
    var index = 0;
    var timer = setInterval(function() {
        index = (index == 1) ? 0 : index + 1;
        $(".day-ul").hide().eq(index).show();
    }, 3000)


    //4的功能
    var indexF = 0;
    var timerF = setInterval(function() {
        indexF = (indexF == 2) ? 0 : indexF + 1;
        $(".day-tj h3").hide().eq(indexF).show();
    }, 1000);
    //6的功能
    var indexT = 0;
    var timerT = setInterval(function() {
        indexT = (indexT == 4) ? 0 : indexT + 1;
        $(".ach-show").hide().eq(indexT).show();
    }, 1000);

    //7的滚动功能
    setInterval(function() {
        $(".new-order-show").find('ul').animate({
            marginTop: '-14px'
        }, 500, function() {
            $(this).css({
                marginTop: "0px"
            }).find("li:first").appendTo(this);
        });
    }, 3000);

    //8的功能
    var indexAl = 0;
    var timerAl = setInterval(function() {
        indexAl = (indexAl == 4) ? 0 : indexAl + 1;
        $(".sal-show").hide().eq(indexAl).show();
    }, 1000);

    //新增9的功能
    var num =0;
    var t = setTimeout(timeCount(num),10000);
    function timeCount(num){
        
        num+=123;
       
        $('.number').text(num);
        if(num>123&&num<200){
            num+=103;
        }
        if(num>200&&num<500){
            num+=113;
        }
        if(num>500&&num<800){
            num+=63;
        }
        if(num>800&&num<999){
            num+=60;
        }
        if(num>1000&&num<1500){
              num+=127;  
        }
        if(num>1500&&num<8000){
                 num+=64; 
        }
        if(num>8000){
                 num+=37; 
        }
        if(num<1000000){
           var t = setTimeout(function(){timeCount(num)},10000)  
        }
    }
    //各等级的数量分布
    function gradeShow() {
        var myChart = echarts.init(document.getElementById('grade-show'));
        var option = {
            color: ['blue', 'green', 'red', 'yellow', '#F700D5'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                y: 'bottom',
                data: ['操盘合伙人', '总裁','执行董事','总代','掌柜'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '各等级数量',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '25%'],

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
                data: [{
                    value: 20000,
                    name: '执行董事',
                    selected: true
                }, {
                    value: 100000,
                    name: '总代'
                }, {
                    value: 300000,
                    name: '掌柜'
                }]
            }, {
                name: '各等级数量',
                type: 'pie',
                radius: ['45%', '55%'],
                data: [{
                    value: 100000,
                    name: '总代'
                }, {
                    value: 20000,
                    name: '执行董事'
                }, {
                    value: 2000,
                    name: '总裁'
                }, {
                    value: 500,
                    name: '操盘合伙人'
                }, {
                    value: 300000,
                    name: '掌柜'
                }]
            }]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
    }

    function orderShow() {
        var myChart = echarts.init(document.getElementById('order-show'));
        var option = {
            color: ['#3398DB'],
            textStyle: {
                color: '#fff'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '每日下单量',
                type: 'bar',
                barWidth: '60%',
                data: [3500, 4571, 4814, 5243, 7587, 4579, 4268, 3584, 2546, 2579]
            }]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
    }

    function mapShow() {
        var myChart = echarts.init(document.getElementById('map-show'));
        var geoCoordMap = {
            '上海': [121.4648, 31.2891],
            '北京': [116.4551, 40.2539],
            '安徽': [117.2461,32.0361],
            '福建': [118.3008,25.9277],
            '甘肃': [95.7129,40.166],
            '广东': [113.4668,22.8076],
            '广西': [108.2813,23.6426],
            '贵州': [106.6113,26.9385],
            '海南': [109.9512,19.2041],
            '河北': [115.4004,37.9688],
            '河南': [113.4668,33.8818],
            '黑龙江': [128.1445,48.5156],
            '湖北': [112.2363,31.1572],
            '湖南': [111.5332,27.3779],
            '吉林': [126.4746,43.5938],
            '江苏': [120.0586,32.915],
            '江西': [116.0156,27.29],
            '辽宁': [122.3438,41.0889],
            '内蒙古': [117.5977,44.3408],
            '宁夏': [105.9961,37.3096],
            '青海': [96.2402,35.4199],
            '山东': [118.7402,36.4307],
            '山西': [112.4121,37.6611],
            '陕西': [109.5996,35.6396],
            '四川': [102.9199,30.1904],
            '天津': [117.4219,39.4189],
            '西藏': [88.7695,31.6846],
            '香港': [114.2578,22.3242],
            '新疆': [84.9023,41.748],
            '云南': [101.8652,25.1807],
            '浙江': [120.498,29.0918],
            '重庆': [107.7539,30.1904],
            '佛山': [112.8955,23.1097],
            '湛江': [110.3577,20.9894],
            '深圳': [114.5435,22.5439],
            '泉州': [118.3228,25.1147],
            '南阳': [112.4011,33.0359],
            '开封': [114.5764,34.6124],
            '周口': [114.873,33.6951],
            '青岛': [120.4651,36.3373],
            '烟台': [120.7397,37.5128],
            '邵阳': [110.9619,26.8121],
            '永州': [111.709,25.752],
            '温州': [120.498,27.8119],
            '宁波': [121.5967,29.6466],
            '苏州': [120.6519,31.3989],
            '扬州': [119.4653,32.8162],
            '六盘水': [104.7546,26.0925],
            '安顺': [105.9082,25.9882],
            '南充': [106.2048,31.1517],
            '成都': [103.9526,30.7617],
            '玉溪': [101.9312,23.8898]
        };
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[0].value
                    });
                }
            }
            console.log(res)
            return res;
        };
function randomData() {
    return Math.round(Math.random()*1.5);
}
        var BJData = [
                        [{name: '北京',value: 2.45}, {name: '北京'}],
                        [{name: '上海',value: 0.6}, {name: '北京'}],
                        [{name: '安徽',value: 2.3}, {name: '北京'}],
                        [{name: '福建',value: 3.11}, {name: '北京'}],
                        [{name: '甘肃',value: 1.88}, {name: '北京'}],
                        [{name: '广东',value: 11.69}, {name: '北京'}],
                        [{name: '广西',value: 3.42}, {name: '北京'}],
                        [{name: '贵州',value: 5.63}, {name: '北京'}],
                        [{name: '海南',value: 0.89}, {name: '北京'}],
                        [{name: '河北',value: 3.93}, {name: '北京'}],
                        [{name: '河南',value: 8.08}, {name: '北京'}],
                        [{name: '黑龙江',value: 1.35}, {name: '北京'}],
                        [{name: '湖北',value: 3.68}, {name: '北京'}],
                        [{name: '湖南',value: 3.46}, {name: '北京'}],
                        [{name: '吉林',value: 0.74}, {name: '北京'}],
                        [{name: '江苏',value: 5.30}, {name: '北京'}],
                        [{name: '江西',value: 1.86}, {name: '北京'}],
                        [{name: '辽宁',value: 2.56}, {name: '北京'}],
                        [{name: '内蒙古',value: 1.25}, {name: '北京'}],
                        [{name: '宁夏',value: 0.36}, {name: '北京'}],
                        [{name: '青海',value: 0.47}, {name: '北京'}],
                        [{name: '山东',value: 9.11}, {name: '北京'}],
                        [{name: '山西',value: 4.98}, {name: '北京'}],
                        [{name: '陕西',value: 2.87}, {name: '北京'}],
                        [{name: '四川',value: 4.43}, {name: '北京'}],
                        [{name: '天津',value: 0.60}, {name: '北京'}],
                        [{name: '西藏',value: 0.60}, {name: '北京'}],
                        [{name: '香港',value: 0.01}, {name: '北京'}],
                        [{name: '新疆',value: 1.32}, {name: '北京'}],
                        [{name: '云南',value: 4.50}, {name: '北京'}],
                        [{name: '浙江',value: 4.45}, {name: '北京'}],
                        [{name: '重庆',value: 2.08}, {name: '北京'}],
                        [{name: '佛山',value: 2.08}, {name: '北京'}],
                        [{name: '湛江',value: 2.08}, {name: '北京'}],
                        [{name: '深圳',value: 2.08}, {name: '北京'}],
                        [{name: '泉州',value: 2.08}, {name: '北京'}],
                        [{name: '南阳',value: 2.08}, {name: '北京'}],
                        [{name: '开封',value: 2.08}, {name: '北京'}],
                        [{name: '周口',value: 2.08}, {name: '北京'}],
                        [{name: '青岛',value: 2.08}, {name: '北京'}],
                        [{name: '烟台',value: 2.08}, {name: '北京'}],
                        [{name: '邵阳',value: 2.08}, {name: '北京'}],
                        [{name: '永州',value: 2.08}, {name: '北京'}],
                        [{name: '温州',value: 2.08}, {name: '北京'}],
                        [{name: '宁波',value: 2.08}, {name: '北京'}],
                        [{name: '苏州',value: 2.08}, {name: '北京'}],
                        [{name: '扬州',value: 2.08}, {name: '北京'}],
                        [{name: '六盘水',value: 2.08}, {name: '北京'}],
                        [{name: '安顺',value: 2.08}, {name: '北京'}],
                        [{name: '南充',value: 2.08}, {name: '北京'}],
                        [{name: '成都',value: 2.08}, {name: '北京'}],
                        [{name: '玉溪',value: 2.08}, {name: '北京'}]
                     ];
        var option = {
            title: {
                text: '',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}%'
            },
            legend: {
                show: false,
                orient: 'vertical',
                x: 'left',
                data: ['北京Top10'],

                textStyle: {
                    color: '#fff'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
           visualMap: {
                min: 0,
                max: 12,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                 color: ['#146BF8','#11B6FE','#16FFFF']
            },
            geo: {
                map: 'china',
                scaleLimit:{min:1.3,max:1.3},
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false, 
            },
            series: [{
                name: '北京Top10',
                type: 'lines',

                zlevel: 1,
                effect: {
                    show: true,
                    period: 7,
                    trailLength: 0.7,
                    color: '#fff',
                    shadowBlur: 1,
                    symbolSize: 4
                },
                animationDuration:function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 1000;
                },
                lineStyle: {
                    normal: {
                        color: 'red',
                        width: 0,
                        curveness: 0.1
                    }
                },
                data: convertData(BJData)

            }, { 
                name: '北京Top10',
                type: 'map',
                map:'china',
                scaleLimit:{min:1.3,max:1.3},
                roam: false,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                        color: '#fff'
                       
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },

                data:[
                    {name: '北京',value: 2.45 },
                    {name: '天津',value: 0.60 },
                    {name: '上海',value: 0.6 },
                    {name: '重庆',value: 2.08 },
                    {name: '河北',value: 3.93 },
                    {name: '河南',value: 8.08 },
                    {name: '云南',value: 4.50 },
                    {name: '辽宁',value: 2.56 },
                    {name: '黑龙江',value: 1.35 },
                    {name: '湖南',value: 3.46 },
                    {name: '安徽',value: 2.3},
                    {name: '山东',value: 9.11 },
                    {name: '新疆',value: 1.32 },
                    {name: '江苏',value: 5.30 },
                    {name: '浙江',value: 4.45 },
                    {name: '江西',value: 1.86 },
                    {name: '湖北',value: 3.68 },
                    {name: '广西',value: 3.42 },
                    {name: '甘肃',value: 1.88 },
                    {name: '山西',value: 4.98 },
                    {name: '内蒙古',value: 1.25 },
                    {name: '陕西',value: 2.87 },
                    {name: '吉林',value: 0.74 },
                    {name: '福建',value: 3.11 },
                    {name: '贵州',value: 5.63 },
                    {name: '广东',value: 11.69},
                    {name: '青海',value: 0.47 },
                    {name: '西藏',value: 0.60 },
                    {name: '四川',value: 4.43},
                    {name: '宁夏',value: 0.36 },
                    {name: '海南',value: 0.89 },
                    {name: '香港',value:  0.01 }
                   
                ]
                }

        ]};
        myChart.setOption(option);
    }

    function achievementShow() {
        var myChart = echarts.init(document.getElementById('achievement-show'));
        var option = {
            color: ['red', '#F700D5', 'yellow', 'blueviolet', '#fff'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                y: 'bottom',
                data: ['雄鹰团队', '猛虎团队', '群狼团队', '神勇团队', '财神团队'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '团队业绩',
                type: 'pie',
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
                            fontSize: '20',
                            fontWeight: 'bold'
                        },
                        formatter:'{b}\n{d}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 88641.00,
                    name: '雄鹰团队'
                }, {
                    value: 95462.00,
                    name: '猛虎团队'
                }, {
                    value: 158461.00,
                    name: '群狼团队'
                }, {
                    value: 685145.00,
                    name: '神勇团队'
                }, {
                    value: 912406.00,
                    name: '财神团队'
                }]
            }]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
    }

    function salesShow() {
        var myChart = echarts.init(document.getElementById('sales-show'));
        var option = {
            color: ['red', 'green', 'yellow', 'blueviolet', 'blue'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                y: 'bottom',
                data: ['梦想团队', '精英团队', '超能团队', '兄弟团队', '飞跃团队'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '团队业绩',
                type: 'pie',
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
                data: [{
                    value: 5000,
                    name: '梦想团队'
                }, {
                    value: 8412,
                    name: '精英团队'
                }, {
                    value: 8475,
                    name: '超能团队'
                }, {
                    value: 7111,
                    name: '兄弟团队'
                }, {
                    value: 6142,
                    name: '飞跃团队'
                }]
            }]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize;
    }
});