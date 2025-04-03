var squareLength = 18;
var _colorRange = ['#ECEFF2', '#176B87'];

// 2025
var datas25 = {
    '2025-01-01': 1,
    '2025-03-28': -1,
    '2025-03-29': -1,
    '2025-03-30': -1,
    '2025-04-03': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Fighters , 0-2 </br>Start P.今井 / C.古賀',
    '2025-03-29': 'vs Fighters , 2-3 </br>Start P.渡邉 / C.古賀',
    '2025-03-30': 'vs Fighters , 5-7 </br>Start P.高橋 / C.古賀',
    '2025-04-03': 'vs Eagles , 4-1 </br>Start P.上田 / C.牧野',
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
  .selector('#calmap25l')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
