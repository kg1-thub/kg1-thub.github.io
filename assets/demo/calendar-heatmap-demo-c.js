var squareLength = 18;
var _colorRange = ['#ECEFF2', '#F1533A'];

// 2025
var datas25 = {
    '2025-03-28': -1,
    '2025-03-29': -1,
    '2025-03-30': 1,
    '2025-04-02': -1,
    '2025-04-03': -1,
    '2025-04-04': 1,
    '2025-04-05': 1,
    '2025-04-06': 1,
    '2025-04-08': 0,
    '2025-04-09': -1,
    '2025-04-10': 1,
    '2025-04-11': 1,
    '2025-04-12': 1,
    '2025-04-13': 1,
    '2025-04-15': 1,
    '2025-04-16': -1,
    '2025-04-18': 1,
    '2025-04-19': 1,
    '2025-04-20': -1,
    '2025-04-23': 1,
    '2025-04-25': -1,
    '2025-04-26': -1,
    '2025-04-27': -1,
    '2025-04-29': -1,
    '2025-04-30': -1,
    '2025-05-01': -1,
    '2025-05-02': -1,
    '2025-05-03': 1,
    '2025-05-04': 1,
    '2025-05-05': 1,
    '2025-05-07': 1,
    '2025-05-09': -1,
    '2025-05-10': 1,
    '2025-05-11': -1,
    '2025-05-13': 1,
    '2025-05-14': 1,
    '2025-05-15': 1,
    '2025-05-16': 1,
    '2025-05-17': -1,
    '2025-05-18': -1,
    '2025-05-20': 1,
    '2025-05-22': 0,
    '2025-05-23': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Tigers , 0-4 </br>Start P.森下 / C.會澤',
    '2025-03-29': 'vs Tigers , 2-3 </br>Start P.床田 / C.石原',
    '2025-03-30': 'vs Tigers , 2-0 </br>Start P.森 / C.石原',
    '2025-04-02': 'vs Swallows , 5-4 </br>Start P.大瀬良 / C.會澤',
    '2025-04-03': 'vs Swallows , 3-0 </br>Start P.玉村 / C.石原',
    '2025-04-04': 'vs Baystars , 8-2 </br>Start P.森下 / C.會澤',
    '2025-04-05': 'vs Baystars , 8-7 </br>Start P.床田 / C.石原',
    '2025-04-06': 'vs Baystars , 7-6 </br>Start P.森 / C.石原',
    '2025-04-08': 'vs Dragons , 1-1 </br>Start P.ドミンゲス / C.石原',
    '2025-04-09': 'vs Dragons , 3-1 </br>Start P.大瀬良 / C.會澤',
    '2025-04-10': 'vs Dragons , 1-2 </br>Start P.玉村 / C.石原',
    '2025-04-11': 'vs Giants , 12-3 </br>Start P.森下 / C.會澤',
    '2025-04-12': 'vs Giants , 1-0 </br>Start P.床田 / C.石原',
    '2025-04-13': 'vs Giants , 5-3 </br>Start P.森 / C.石原',
    '2025-04-15': 'vs Dragons , 7-1 </br>Start P.ドミンゲス / C.石原',
    '2025-04-16': 'vs Dragons , 0-2 </br>Start P.大瀬良 / C.會澤',
    '2025-04-18': 'vs Tigers , 2-5 </br>Start P.森下 / C.會澤',
    '2025-04-19': 'vs Tigers , 0-3 </br>Start P.床田 / C.石原',
    '2025-04-20': 'vs Tigers , 8-1 </br>Start P.森 / C.石原',
    '2025-04-23': 'vs Swallows , 7-1 </br>Start P.大瀬良 / C.會澤',
    '2025-04-25': 'vs Baystars , 2-1 </br>Start P.森下 / C.會澤',
    '2025-04-26': 'vs Baystars , 2-0 </br>Start P.床田 / C.石原',
    '2025-04-27': 'vs Baystars , 2-1 </br>Start P.玉村 / C.石原',
    '2025-04-29': 'vs Giants , 4-3 </br>Start P.森 / C.石原',
    '2025-04-30': 'vs Giants , 2-0 </br>Start P.大瀬良 / C.會澤',
    '2025-05-01': 'vs Giants , 4-3 </br>Start P.ドミンゲス / C.坂倉',
    '2025-05-02': 'vs Dragons , 2-4 </br>Start P.森下 / C.坂倉',
    '2025-05-03': 'vs Dragons , 2-0 </br>Start P.床田 / C.坂倉',
    '2025-05-04': 'vs Dragons , 9-4 </br>Start P.玉村 / C.坂倉',
    '2025-05-05': 'vs Swallows , 0-4 </br>Start P.高橋 / C.坂倉',
    '2025-05-07': 'vs Swallows , 3-5 </br>Start P.大瀬良 / C.坂倉',
    '2025-05-09': 'vs Baystars , 4-3 </br>Start P.森下 / C.坂倉',
    '2025-05-10': 'vs Baystars , 3-5 </br>Start P.床田 / C.坂倉',
    '2025-05-11': 'vs Baystars , 4-2 </br>Start P.玉村 / C.坂倉',
    '2025-05-13': 'vs Giants , 5-4 </br>Start P.森 / C.坂倉',
    '2025-05-14': 'vs Giants , 3-0 </br>Start P.大瀬良 / C.坂倉',
    '2025-05-15': 'vs Giants , 5-1 </br>Start P.ドミンゲス / C.坂倉',
    '2025-05-16': 'vs Tigers , 2-4 </br>Start P.森下 / C.坂倉',
    '2025-05-17': 'vs Tigers , 5-2 </br>Start P.床田 / C.坂倉',
    '2025-05-18': 'vs Tigers , 3-1 </br>Start P.玉村 / C.坂倉',
    '2025-05-20': 'vs Swallows , 3-2 </br>Start P.森 / C.坂倉',
    '2025-05-22': 'vs Swallows , 2-2 </br>Start P.大瀬良 / C.坂倉',
    '2025-05-23': 'vs Baystars , 1-2 </br>Start P.森下 / C.坂倉',
    //@@NEXTSCORE@@
};
var chartData25 = [];
for (var d in datas25) {
    chartData25.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas25[d],
        score: score25[d],
    });
};
var heatmap25 = calendarHeatmap()
  .data(chartData25)
  .startDate('2025-03-28')
  .endDate('2025-10-31')
  .selector('#calmap25c')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
