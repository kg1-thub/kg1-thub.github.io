var squareLength = 18;
var _colorRange = ['#ECEFF2', '#0A1D56'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': -1,
    '2025-03-30': 1,
    '2025-04-02': 1,
    '2025-04-03': 1,
    '2025-04-04': 1,
    '2025-04-05': 1,
    '2025-04-06': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Eagles , 3-2 </br>Start P.宮城 / C.若月',
    '2025-03-29': 'vs Eagles , 4-5 </br>Start P.九里 / C.若月',
    '2025-03-30': 'vs Eagles , 6-1 </br>Start P.高島 / C.福永',
    '2025-04-02': 'vs Marines , 2-3 </br>Start P.曽谷 / C.若月',
    '2025-04-03': 'vs Marines , 2-3 </br>Start P.エスピノーザ / C.若月',
    '2025-04-04': 'vs Fighters , 3-4 </br>Start P.宮城 / C.若月',
    '2025-04-05': 'vs Fighters , 1-11 </br>Start P.九里 / C.若月',
    '2025-04-06': 'vs Fighters , 4-6 </br>Start P.高島 / C.福永',
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
