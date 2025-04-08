var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': 1,
    '2025-03-30': -1,
    '2025-04-01': -1,
    '2025-04-02': 0,
    '2025-04-03': -1,
    '2025-04-04': 1,
    '2025-04-05': 1,
    '2025-04-06': 1,
    '2025-04-08': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Carp , 0-4 </br>Start P.村上 / C.坂本',
    '2025-03-29': 'vs Carp , 2-3 </br>Start P.富田 / C.坂本',
    '2025-03-30': 'vs Carp , 2-0 </br>Start P.門別 / C.梅野',
    '2025-04-01': 'vs Baystars , 1-7 </br>Start P.才木 / C.坂本',
    '2025-04-02': 'vs Baystars , 6-6 </br>Start P.ビーズリー / C.梅野',
    '2025-04-03': 'vs Baystars , 2-5 </br>Start P.デュプランティエ / C.榮枝',
    '2025-04-04': 'vs Giants , 2-7 </br>Start P.村上 / C.坂本',
    '2025-04-05': 'vs Giants , 3-4 </br>Start P.富田 / C.坂本',
    '2025-04-06': 'vs Giants , 0-1 </br>Start P.門別 / C.梅野',
    '2025-04-08': 'vs Swallows , 0-1 </br>Start P.才木 / C.梅野',
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
  .selector('#calmap25t')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
