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
    '2026-04-04': 1,
    '2026-04-05': 1,
    '2026-04-07': -1,
    '2026-04-08': 1,
    '2026-04-09': 1,
    '2026-04-11': -1,
    '2026-04-12': -1,
    '2026-04-14': 1,
    '2026-04-15': -1,
    '2026-04-16': -1,
    '2026-04-17': -1,
    '2026-04-18': 1,
    '2026-04-19': -1,
    '2026-04-21': 1,
    '2026-04-22': 1,
    '2026-04-23': -1,
    '2026-04-24': -1,
    '2026-04-25': -1,
    '2026-04-26': -1,
    '2026-04-28': 1,
    '2026-04-29': -1,
    '2026-04-30': 1,
    '2026-05-01': 1,
    '2026-05-02': -1,
    '2026-05-03': 1,
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
    '2026-04-04': 'vs Buffaloes , 6-3 </br>Start P.達 / C.田宮',
    '2026-04-05': 'vs Buffaloes , 8-2 </br>Start P.有原 / C.田宮',
    '2026-04-07': 'vs Eagles , 3-0 </br>Start P.細野 / C.田宮',
    '2026-04-08': 'vs Eagles , 0-1 </br>Start P.北山 / C.清水優',
    '2026-04-09': 'vs Eagles , 2-4 </br>Start P.加藤 / C.田宮',
    '2026-04-11': 'vs Hawks , 3-6 </br>Start P.伊藤 / C.田宮',
    '2026-04-12': 'vs Hawks , 7-11 </br>Start P.有原 / C.田宮',
    '2026-04-14': 'vs Marines , 1-5 </br>Start P.達 / C.田宮',
    '2026-04-15': 'vs Marines , 9-7 </br>Start P.加藤 / C.清水優',
    '2026-04-16': 'vs Marines , 5-3 </br>Start P.細野 / C.田宮',
    '2026-04-17': 'vs Lions , 3-5 </br>Start P.北山 / C.田宮',
    '2026-04-18': 'vs Lions , 5-3 </br>Start P.伊藤 / C.田宮',
    '2026-04-19': 'vs Lions , 3-15 </br>Start P.有原 / C.田宮',
    '2026-04-21': 'vs Eagles , 3-1 </br>Start P.達 / C.田宮',
    '2026-04-22': 'vs Eagles , 5-4 </br>Start P.加藤 / C.清水優',
    '2026-04-23': 'vs Eagles , 2-3 </br>Start P.福島 / C.田宮',
    '2026-04-24': 'vs Buffaloes , 3-2 </br>Start P.伊藤 / C.田宮',
    '2026-04-25': 'vs Buffaloes , 4-2 </br>Start P.北山 / C.清水優',
    '2026-04-26': 'vs Buffaloes , 9-4 </br>Start P.有原 / C.田宮',
    '2026-04-28': 'vs Lions , 1-2 </br>Start P.細野 / C.田宮',
    '2026-04-29': 'vs Lions , 3-0 </br>Start P.達 / C.進藤',
    '2026-04-30': 'vs Lions , 2-3 </br>Start P.伊藤 / C.進藤',
    '2026-05-01': 'vs Buffaloes , 5-1 </br>Start P.加藤 / C.田宮',
    '2026-05-02': 'vs Buffaloes , 9-10 </br>Start P.古林 / C.田宮',
    '2026-05-03': 'vs Buffaloes , 3-0 </br>Start P.北山 / C.進藤',
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
