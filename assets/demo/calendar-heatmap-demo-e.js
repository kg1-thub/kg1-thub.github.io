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
    '2025-04-10': -1,
    '2025-04-11': -1,
    '2025-04-12': -1,
    '2025-04-13': -1,
    '2025-04-15': 1,
    '2025-04-16': 1,
    '2025-04-17': 1,
    '2025-04-18': -1,
    '2025-04-19': 1,
    '2025-04-20': 1,
    '2025-04-22': 1,
    '2025-04-23': 1,
    '2025-04-25': -1,
    '2025-04-26': 1,
    '2025-04-27': 1,
    '2025-04-29': -1,
    '2025-04-30': -1,
    '2025-05-01': -1,
    '2025-05-03': -1,
    '2025-05-04': 1,
    '2025-05-05': 1,
    '2025-05-07': -1,
    '2025-05-09': -1,
    '2025-05-10': -1,
    '2025-05-11': -1,
    '2025-05-13': 1,
    '2025-05-14': 1,
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
    '2025-04-10': 'vs Fighters , 0-10 </br>Start P.岸 / C.石原',
    '2025-04-11': 'vs Buffaloes , 1-4 </br>Start P.早川 / C.太田',
    '2025-04-12': 'vs Buffaloes , 2-4 </br>Start P.松井 / C.太田',
    '2025-04-13': 'vs Buffaloes , 1-6 </br>Start P.古謝 / C.太田',
    '2025-04-15': 'vs Hawks , 1-2 </br>Start P.藤井 / C.太田',
    '2025-04-16': 'vs Hawks , 2-6 </br>Start P.瀧中 / C.堀内',
    '2025-04-17': 'vs Hawks , 3-4 </br>Start P.岸 / C.堀内',
    '2025-04-18': 'vs Marines , 1-4 </br>Start P.早川 / C.太田',
    '2025-04-19': 'vs Marines , 2-1 </br>Start P.内 / C.堀内',
    '2025-04-20': 'vs Marines , 4-1 </br>Start P.古謝 / C.堀内',
    '2025-04-22': 'vs Fighters , 2-4 </br>Start P.藤井 / C.堀内',
    '2025-04-23': 'vs Fighters , 3-8 </br>Start P.瀧中 / C.堀内',
    '2025-04-25': 'vs Hawks , 0-1 </br>Start P.早川 / C.太田',
    '2025-04-26': 'vs Hawks , 6-3 </br>Start P.内 / C.堀内',
    '2025-04-27': 'vs Hawks , 3-2 </br>Start P.岸 / C.堀内',
    '2025-04-29': 'vs Lions , 7-1 </br>Start P.古謝 / C.堀内',
    '2025-04-30': 'vs Lions , 3-1 </br>Start P.藤井 / C.太田',
    '2025-05-01': 'vs Lions , 2-1 </br>Start P.瀧中 / C.堀内',
    '2025-05-03': 'vs Buffaloes , 0-7 </br>Start P.早川 / C.堀内',
    '2025-05-04': 'vs Buffaloes , 14-3 </br>Start P.岸 / C.堀内',
    '2025-05-05': 'vs Marines , 1-2 </br>Start P.荘司 / C.堀内',
    '2025-05-07': 'vs Marines , 7-3 </br>Start P.藤井 / C.堀内',
    '2025-05-09': 'vs Fighters , 2-1 </br>Start P.瀧中 / C.堀内',
    '2025-05-10': 'vs Fighters , 8-7 </br>Start P.古謝 / C.堀内',
    '2025-05-11': 'vs Fighters , 4-0 </br>Start P.岸 / C.堀内',
    '2025-05-13': 'vs Marines , 4-3 </br>Start P.荘司 / C.太田',
    '2025-05-14': 'vs Marines , 4-0 </br>Start P.ハワード / C.太田',
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
