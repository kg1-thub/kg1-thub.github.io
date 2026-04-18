var squareLength = 18;
var _colorRange = ['#ECEFF2', '#124076'];

// 2026
var datas26 = {
    '2026-03-27': 1,
    '2026-03-28': 1,
    '2026-03-29': -1,
    '2026-03-31': -1,
    '2026-04-01': 1,
    '2026-04-02': -1,
    '2026-04-03': 1,
    '2026-04-04': -1,
    '2026-04-05': -1,
    '2026-04-07': -1,
    '2026-04-08': -1,
    '2026-04-09': -1,
    '2026-04-10': 1,
    '2026-04-11': -1,
    '2026-04-12': -1,
    '2026-04-14': -1,
    '2026-04-15': 1,
    '2026-04-16': 1,
    '2026-04-17': -1,
    '2026-04-18': -1,
    //@@NEXTGAME@@
};
var score26 = {
    '2026-03-27': 'vs Lions , 3-1 </br>Start P.毛利 / C.松川',
    '2026-03-28': 'vs Lions , 11-0 </br>Start P.田中 / C.松川',
    '2026-03-29': 'vs Lions , 0-4 </br>Start P.小島 / C.松川',
    '2026-03-31': 'vs Fighters , 9-0 </br>Start P.木村 / C.佐藤',
    '2026-04-01': 'vs Fighters , 2-4 </br>Start P.ジャクソン / C.松川',
    '2026-04-02': 'vs Fighters , 7-1 </br>Start P.西野 / C.松川',
    '2026-04-03': 'vs Hawks , 3-2 </br>Start P.毛利 / C.松川',
    '2026-04-04': 'vs Hawks , 2-5 </br>Start P.田中 / C.松川',
    '2026-04-05': 'vs Hawks , 3-4 </br>Start P.小島 / C.佐藤',
    '2026-04-07': 'vs Buffaloes , 3-1 </br>Start P.木村 / C.松川',
    '2026-04-08': 'vs Buffaloes , 9-1 </br>Start P.ジャクソン / C.松川',
    '2026-04-09': 'vs Buffaloes , 2-1 </br>Start P.西野 / C.佐藤',
    '2026-04-10': 'vs Lions , 3-6 </br>Start P.河村 / C.松川',
    '2026-04-11': 'vs Lions , 5-2 </br>Start P.田中 / C.松川',
    '2026-04-12': 'vs Lions , 2-1 </br>Start P.廣池 / C.佐藤',
    '2026-04-14': 'vs Fighters , 1-5 </br>Start P.ジャクソン / C.松川',
    '2026-04-15': 'vs Fighters , 9-7 </br>Start P.毛利 / C.佐藤',
    '2026-04-16': 'vs Fighters , 5-3 </br>Start P.木村 / C.佐藤',
    '2026-04-17': 'vs Eagles , 1-0 </br>Start P.種市 / C.佐藤',
    '2026-04-18': 'vs Eagles , 9-1 </br>Start P.田中 / C.松川',
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
  .selector('#calmap26m')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap26();  // render the chart
