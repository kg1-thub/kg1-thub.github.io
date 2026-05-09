var squareLength = 18;
var _colorRange = ['#ECEFF2', '#870011'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    '2026-03-28': -1,
    '2026-03-29': -1,
    '2026-03-31': -1,
    '2026-04-01': -1,
    '2026-04-02': 1,
    '2026-04-03': 1,
    '2026-04-04': 1,
    '2026-04-05': 0,
    '2026-04-07': 1,
    '2026-04-08': -1,
    '2026-04-09': -1,
    '2026-04-11': 1,
    '2026-04-12': 1,
    '2026-04-14': 1,
    '2026-04-15': 1,
    '2026-04-16': -1,
    '2026-04-17': 1,
    '2026-04-18': 1,
    '2026-04-19': -1,
    '2026-04-21': -1,
    '2026-04-22': -1,
    '2026-04-23': 1,
    '2026-04-25': -1,
    '2026-04-26': -1,
    '2026-04-28': -1,
    '2026-04-29': -1,
    '2026-05-01': -1,
    '2026-05-02': -1,
    '2026-05-03': 1,
    '2026-05-04': 1,
    '2026-05-05': 1,
    '2026-05-06': -1,
    '2026-05-08': -1,
    '2026-05-09': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Buffaloes , 0-10 </br>Start P.荘司 / C.太田',
    '2026-03-28': 'vs Buffaloes , 6-0 </br>Start P.瀧中 / C.太田',
    '2026-03-29': 'vs Buffaloes , 5-4 </br>Start P.藤原 / C.太田',
    '2026-03-31': 'vs Hawks , 2-4 </br>Start P.前田 / C.太田',
    '2026-04-01': 'vs Hawks , 1-6 </br>Start P.古謝 / C.太田',
    '2026-04-02': 'vs Hawks , 5-4 </br>Start P.ウレーニャ / C.伊藤',
    '2026-04-03': 'vs Lions , 3-6 </br>Start P.荘司 / C.太田',
    '2026-04-04': 'vs Lions , 1-2 </br>Start P.瀧中 / C.伊藤',
    '2026-04-05': 'vs Lions , 1-1 </br>Start P.藤原 / C.伊藤',
    '2026-04-07': 'vs Fighters , 3-0 </br>Start P.前田 / C.太田',
    '2026-04-08': 'vs Fighters , 0-1 </br>Start P.古謝 / C.太田',
    '2026-04-09': 'vs Fighters , 2-4 </br>Start P.ウレーニャ / C.伊藤',
    '2026-04-11': 'vs Buffaloes , 11-4 </br>Start P.早川 / C.太田',
    '2026-04-12': 'vs Buffaloes , 4-0 </br>Start P.瀧中 / C.伊藤',
    '2026-04-14': 'vs Hawks , 2-3 </br>Start P.荘司 / C.太田',
    '2026-04-15': 'vs Hawks , 2-3 </br>Start P.古謝 / C.太田',
    '2026-04-16': 'vs Hawks , 6-0 </br>Start P.藤原 / C.伊藤',
    '2026-04-17': 'vs Marines , 1-0 </br>Start P.藤井 / C.太田',
    '2026-04-18': 'vs Marines , 9-1 </br>Start P.ウレーニャ / C.伊藤',
    '2026-04-19': 'vs Marines , 5-8 </br>Start P.早川 / C.太田',
    '2026-04-21': 'vs Fighters , 3-1 </br>Start P.荘司 / C.太田',
    '2026-04-22': 'vs Fighters , 5-4 </br>Start P.古謝 / C.太田',
    '2026-04-23': 'vs Fighters , 2-3 </br>Start P.瀧中 / C.伊藤',
    '2026-04-25': 'vs Lions , 7-9 </br>Start P.ウレーニャ / C.伊藤',
    '2026-04-26': 'vs Lions , 0-3 </br>Start P.早川 / C.太田',
    '2026-04-28': 'vs Marines , 3-1 </br>Start P.荘司 / C.太田',
    '2026-04-29': 'vs Marines , 5-3 </br>Start P.前田 / C.太田',
    '2026-05-01': 'vs Hawks , 4-1 </br>Start P.古謝 / C.太田',
    '2026-05-02': 'vs Hawks , 5-0 </br>Start P.ウレーニャ / C.伊藤',
    '2026-05-03': 'vs Hawks , 0-7 </br>Start P.早川 / C.太田',
    '2026-05-04': 'vs Fighters , 3-1 </br>Start P.瀧中 / C.伊藤',
    '2026-05-05': 'vs Fighters , 3-2 </br>Start P.荘司 / C.太田',
    '2026-05-06': 'vs Fighters , 2-12 </br>Start P.前田 / C.太田',
    '2026-05-08': 'vs Lions , 4-2 </br>Start P.ウレーニャ / C.太田',
    '2026-05-09': 'vs Lions , 6-2 </br>Start P.古謝 / C.太田',
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
  .selector('#calmap26e')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
