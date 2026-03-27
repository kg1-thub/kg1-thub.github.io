var squareLength = 18;
var _colorRange = ['#ECEFF2', '#ff8000'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': '(NS)vs Tigers , 3-1 </br>Start P.竹丸 / C.岸田',
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
  .selector('#calmap26g')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
