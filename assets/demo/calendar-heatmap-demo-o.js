var squareLength = 18;
var _colorRange = ['#ECEFF2', '#0A1D56'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Eagles , 3-2 </br>Start P.宮城 / C.若月',
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
  .selector('#calmap25o')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
