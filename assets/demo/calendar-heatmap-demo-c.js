var squareLength = 18;
var _colorRange = ['#ECEFF2', '#F1533A'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    '2026-03-31': -1,
    '2026-04-02': -1,
    '2026-04-03': -1,
    '2026-04-04': -1,
    '2026-04-05': 1,
    '2026-04-07': 1,
    '2026-04-08': -1,
    '2026-04-11': -1,
    '2026-04-12': -1,
    '2026-04-14': -1,
    '2026-04-15': 1,
    '2026-04-17': -1,
    '2026-04-18': -1,
    '2026-04-19': -1,
    '2026-04-21': 1,
    '2026-04-22': -1,
    '2026-04-23': -1,
    '2026-04-25': 0,
    '2026-04-26': -1,
    '2026-04-28': 1,
    '2026-04-29': -1,
    '2026-04-30': 1,
    '2026-05-01': 1,
    '2026-05-02': -1,
    '2026-05-04': -1,
    '2026-05-05': 0,
    '2026-05-06': 1,
    '2026-05-08': -1,
    '2026-05-09': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Dragons , 6-5 </br>Start P.床田 / C.坂倉',
    '2026-03-28': 'vs Dragons , 2-1 </br>Start P.ターノック / C.坂倉',
    '2026-03-29': 'vs Dragons , 1-0 </br>Start P.栗林 / C.坂倉',
    '2026-03-31': 'vs Swallows , 8-3 </br>Start P.森下 / C.坂倉',
    '2026-04-02': 'vs Swallows , 2-1 </br>Start P.岡本 / C.坂倉',
    '2026-04-03': 'vs Tigers , 2-4 </br>Start P.床田 / C.坂倉',
    '2026-04-04': 'vs Tigers , 5-7 </br>Start P.ターノック / C.坂倉',
    '2026-04-05': 'vs Tigers , 2-1 </br>Start P.栗林 / C.坂倉',
    '2026-04-07': 'vs Giants , 5-2 </br>Start P.森下 / C.坂倉',
    '2026-04-08': 'vs Giants , 1-2 </br>Start P.森 / C.坂倉',
    '2026-04-11': 'vs Baystars , 4-3 </br>Start P.ターノック / C.坂倉',
    '2026-04-12': 'vs Baystars , 6-5 </br>Start P.床田 / C.坂倉',
    '2026-04-14': 'vs Dragons , 6-2 </br>Start P.森下 / C.坂倉',
    '2026-04-15': 'vs Dragons , 2-5 </br>Start P.栗林 / C.坂倉',
    '2026-04-17': 'vs Baystars , 1-5 </br>Start P.岡本 / C.坂倉',
    '2026-04-18': 'vs Baystars , 2-7 </br>Start P.ターノック / C.坂倉',
    '2026-04-19': 'vs Baystars , 0-2 </br>Start P.床田 / C.持丸',
    '2026-04-21': 'vs Swallows , 2-1 </br>Start P.森下 / C.持丸',
    '2026-04-22': 'vs Swallows , 0-2 </br>Start P.大瀬良 / C.持丸',
    '2026-04-23': 'vs Swallows , 0-2 </br>Start P.岡本 / C.持丸',
    '2026-04-25': 'vs Tigers , 2-2 </br>Start P.ターノック / C.持丸',
    '2026-04-26': 'vs Tigers , 1-0 </br>Start P.栗林 / C.持丸',
    '2026-04-28': 'vs Giants , 1-11 </br>Start P.床田 / C.持丸',
    '2026-04-29': 'vs Giants , 4-2 </br>Start P.森下 / C.持丸',
    '2026-04-30': 'vs Giants , 2-3 </br>Start P.玉村 / C.持丸',
    '2026-05-01': 'vs Dragons , 7-3 </br>Start P.岡本 / C.持丸',
    '2026-05-02': 'vs Dragons , 0-4 </br>Start P.ターノック / C.持丸',
    '2026-05-04': 'vs Baystars , 11-8 </br>Start P.大瀬良 / C.持丸',
    '2026-05-05': 'vs Baystars , 5-5 </br>Start P.床田 / C.石原',
    '2026-05-06': 'vs Baystars , 0-10 </br>Start P.栗林 / C.持丸',
    '2026-05-08': 'vs Swallows , 1-4 </br>Start P.森下 / C.持丸',
    '2026-05-09': 'vs Swallows , 0-4 </br>Start P.岡本 / C.持丸',
    //@@NEXTSCORE@@
};
var chartData26 = [];
for (var d in datas26) {
    chartData26.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas26[d],
        score: score26[d],
    });
};
var heatmap26 = calendarHeatmap()
  .data(chartData26)
  .startDate('2026-03-23')
  .endDate('2026-10-31')
  .selector('#calmap26c')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
