var squareLength = 18;
var _colorRange = ['#ECEFF2', '#006298'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': 1,
    '2025-03-30': 1,
    '2025-04-01': -1,
    '2025-04-02': 1,
    '2025-04-04': -1,
    '2025-04-05': -1,
    '2025-04-06': -1,
    '2025-04-08': 1,
    '2025-04-09': 1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Lions , 0-2 </br>Start P.金村 / C.田宮',
    '2025-03-29': 'vs Lions , 2-3 </br>Start P.加藤 / C.郡司',
    '2025-03-30': 'vs Lions , 5-7 </br>Start P.バーヘイゲン / C.田宮',
    '2025-04-01': 'vs Hawks , 1-5 </br>Start P.伊藤 / C.伏見',
    '2025-04-02': 'vs Hawks , 3-1 </br>Start P.北山 / C.郡司',
    '2025-04-04': 'vs Buffaloes , 3-4 </br>Start P.山崎 / C.伏見',
    '2025-04-05': 'vs Buffaloes , 1-11 </br>Start P.金村 / C.田宮',
    '2025-04-06': 'vs Buffaloes , 4-6 </br>Start P.バーヘイゲン / C.田宮',
    '2025-04-08': 'vs Eagles , 2-5 </br>Start P.伊藤 / C.伏見',
    '2025-04-09': 'vs Eagles , 2-8 </br>Start P.加藤 / C.郡司',
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
  .selector('#calmap25f')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
