var squareLength = 18;
var _colorRange = ['#ECEFF2', '#124076'];

// 2025
var datas25 = {
    '2025-03-28': 1,
    '2025-03-29': 1,
    '2025-03-30': 1,
    '2025-04-02': -1,
    '2025-04-03': -1,
    '2025-04-04': -1,
    '2025-04-05': 1,
    '2025-04-06': -1,
    '2025-04-08': 1,
    '2025-04-09': -1,
    '2025-04-11': -1,
    '2025-04-12': -1,
    '2025-04-15': -1,
    //@@NEXTGAME@@
};
var score25 = {
    '2025-03-28': 'vs Hawks , 2-8 </br>Start P.小島 / C.佐藤',
    '2025-03-29': 'vs Hawks , 4-5 </br>Start P.ボス / C.田村',
    '2025-03-30': 'vs Hawks , 4-7 </br>Start P.種市 / C.佐藤',
    '2025-04-02': 'vs Buffaloes , 2-3 </br>Start P.西野 / C.田村',
    '2025-04-03': 'vs Buffaloes , 2-3 </br>Start P.石川 / C.佐藤',
    '2025-04-04': 'vs Eagles , 1-3 </br>Start P.田中 / C.寺地',
    '2025-04-05': 'vs Eagles , 1-0 </br>Start P.小島 / C.佐藤',
    '2025-04-06': 'vs Eagles , 0-5 </br>Start P.ボス / C.佐藤',
    '2025-04-08': 'vs Lions , 3-7 </br>Start P.種市 / C.佐藤',
    '2025-04-09': 'vs Lions , 2-0 </br>Start P.西野 / C.田村',
    '2025-04-11': 'vs Hawks , 4-5 </br>Start P.石川 / C.佐藤',
    '2025-04-12': 'vs Hawks , 0-8 </br>Start P.小島 / C.佐藤',
    '2025-04-15': 'vs Fighters , 3-9 </br>Start P.種市 / C.佐藤',
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
  .selector('#calmap25m')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
