var squareLength = 18;
var _colorRange = ['#ECEFF2', '#008DDA'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': '(NS)vs Swallows , 2-3 </br>Start P.東 / C.山本',
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
  .selector('#calmap26b')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
