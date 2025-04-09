var squareLength = 18;
var _colorRange = ['#ECEFF2', '#870011'];

// 2025
var datas25 = {
    '2025-03-28': -1,
    '2025-03-29': 1,
    '2025-03-30': -1,
    '2025-04-03': 1,
    '2025-04-04': 1,
    '2025-04-05': -1,
    '2025-04-06': 1,
    '2025-04-08': -1,
    '2025-04-09': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Buffaloes , 3-2 </br>Start P.早川 / C.太田',
    '2025-03-29': 'vs Buffaloes , 4-5 </br>Start P.古謝 / C.太田',
    '2025-03-30': 'vs Buffaloes , 6-1 </br>Start P.辛島 / C.太田',
    '2025-04-03': 'vs Lions , 4-1 </br>Start P.岸 / C.石原',
    '2025-04-04': 'vs Marines , 1-3 </br>Start P.早川 / C.太田',
    '2025-04-05': 'vs Marines , 1-0 </br>Start P.ヤフーレ / C.太田',
    '2025-04-06': 'vs Marines , 0-5 </br>Start P.古謝 / C.太田',
    '2025-04-08': 'vs Fighters , 2-5 </br>Start P.藤井 / C.太田',
    '2025-04-09': 'vs Fighters , 2-8 </br>Start P.辛島 / C.太田',
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
  .selector('#calmap25e')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
