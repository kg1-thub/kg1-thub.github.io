var squareLength = 18;
var _colorRange = ['#ECEFF2', '#0A1D56'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': 1,
    '2026-03-29': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Eagles , 0-10 </br>Start P.宮城 / C.森',
    '2026-03-28': 'vs Eagles , 6-0 </br>Start P.九里 / C.若月',
    '2026-03-29': 'vs Eagles , 5-4 </br>Start P.田嶋 / C.若月',
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
  .selector('#calmap26o')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
