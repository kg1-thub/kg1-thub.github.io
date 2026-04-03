var squareLength = 18;
var _colorRange = ['#ECEFF2', '#006298'];

// 2026
var datas26 = {
    '2026-03-27': -1,
    '2026-03-28': -1,
    '2026-03-29': -1,
    '2026-03-31': 1,
    '2026-04-01': -1,
    '2026-04-02': 1,
    '2026-04-03': 1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Hawks , 6-5 </br>Start P.伊藤 / C.田宮',
    '2026-03-28': 'vs Hawks , 6-4 </br>Start P.達 / C.田宮',
    '2026-03-29': 'vs Hawks , 8-4 </br>Start P.有原 / C.田宮',
    '2026-03-31': 'vs Marines , 9-0 </br>Start P.細野 / C.田宮',
    '2026-04-01': 'vs Marines , 2-4 </br>Start P.北山 / C.田宮',
    '2026-04-02': 'vs Marines , 7-1 </br>Start P.加藤 / C.清水優',
    '2026-04-03': 'vs Buffaloes , 12-3 </br>Start P.伊藤 / C.田宮',
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
  .selector('#calmap26f')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
