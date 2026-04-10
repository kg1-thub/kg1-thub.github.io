var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    '2026-03-31': 1,
    '2026-04-01': -1,
    '2026-04-02': 1,
    '2026-04-03': 1,
    '2026-04-04': 1,
    '2026-04-05': -1,
    '2026-04-07': 1,
    '2026-04-08': -1,
    '2026-04-09': 1,
    '2026-04-10': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Giants , 3-1 </br>Start P.村上 / C.坂本',
    '2026-03-28': 'vs Giants , 0-2 </br>Start P.高橋 / C.伏見',
    '2026-03-29': 'vs Giants , 6-12 </br>Start P.伊藤 / C.伏見',
    '2026-03-31': 'vs Baystars , 4-1 </br>Start P.才木 / C.坂本',
    '2026-04-01': 'vs Baystars , 1-4 </br>Start P.ルーカス / C.伏見',
    '2026-04-02': 'vs Baystars , 4-3 </br>Start P.伊原 / C.坂本',
    '2026-04-03': 'vs Carp , 2-4 </br>Start P.村上 / C.坂本',
    '2026-04-04': 'vs Carp , 5-7 </br>Start P.大竹 / C.坂本',
    '2026-04-05': 'vs Carp , 2-1 </br>Start P.高橋 / C.伏見',
    '2026-04-07': 'vs Swallows , 9-3 </br>Start P.才木 / C.坂本',
    '2026-04-08': 'vs Swallows , 2-3 </br>Start P.ルーカス / C.坂本',
    '2026-04-09': 'vs Swallows , 2-0 </br>Start P.茨木 / C.坂本',
    '2026-04-10': 'vs Dragons , 3-5 </br>Start P.村上 / C.坂本',
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
  .selector('#calmap26t')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
