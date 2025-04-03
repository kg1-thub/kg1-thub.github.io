var squareLength = 18;
var _colorRange = ['#ECEFF2', '#ff8000'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': 1,
    '2025-03-30': 1,
    '2025-04-01': -1,
    '2025-04-02': 1,
    '2025-04-03': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Swallows , 6-5 </br>Start P.戸郷 / C.甲斐',
    '2025-03-29': 'vs Swallows , 12-0 </br>Start P.赤星 / C.甲斐',
    '2025-03-30': 'vs Swallows , 3-0 </br>Start P.石川 / C.甲斐',
    '2025-04-01': 'vs Dragons , 3-2 </br>Start P.井上 / C.甲斐',
    '2025-04-02': 'vs Dragons , 0-2 </br>Start P.山崎 / C.甲斐',
    '2025-04-03': 'vs Dragons , 3-5 </br>Start P.田中 / C.甲斐',
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
  .selector('#calmap25g')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
