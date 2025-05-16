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
    '2025-04-08': -1,
    '2025-04-09': -1,
    '2025-04-10': 0,
    '2025-04-11': 1,
    '2025-04-12': 1,
    '2025-04-13': 1,
    '2025-04-15': 1,
    '2025-04-16': -1,
    '2025-04-17': -1,
    '2025-04-18': 1,
    '2025-04-19': -1,
    '2025-04-20': -1,
    '2025-04-22': 0,
    '2025-04-23': -1,
    '2025-04-25': 1,
    '2025-04-26': -1,
    '2025-04-27': -1,
    '2025-04-29': 1,
    '2025-04-30': 1,
    '2025-05-03': 1,
    '2025-05-04': -1,
    '2025-05-05': 1,
    '2025-05-06': -1,
    '2025-05-07': 0,
    '2025-05-09': -1,
    '2025-05-10': 1,
    '2025-05-11': -1,
    '2025-05-13': -1,
    '2025-05-14': 1,
    '2025-05-15': -1,
    '2025-05-16': -1,
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
    '2025-04-08': 'vs Hawks , 2-5 </br>Start P.椋木 / C.福永',
    '2025-04-09': 'vs Hawks , 9-10 </br>Start P.曽谷 / C.若月',
    '2025-04-10': 'vs Hawks , 1-1 </br>Start P.エスピノーザ / C.若月',
    '2025-04-11': 'vs Eagles , 1-4 </br>Start P.田嶋 / C.若月',
    '2025-04-12': 'vs Eagles , 2-4 </br>Start P.九里 / C.若月',
    '2025-04-13': 'vs Eagles , 1-6 </br>Start P.宮城 / C.若月',
    '2025-04-15': 'vs Lions , 2-0 </br>Start P.高島 / C.福永',
    '2025-04-16': 'vs Lions , 0-5 </br>Start P.曽谷 / C.若月',
    '2025-04-17': 'vs Lions , 2-3 </br>Start P.エスピノーザ / C.若月',
    '2025-04-18': 'vs Fighters , 2-1 </br>Start P.九里 / C.若月',
    '2025-04-19': 'vs Fighters , 4-7 </br>Start P.椋木 / C.福永',
    '2025-04-20': 'vs Fighters , 0-2 </br>Start P.宮城 / C.福永',
    '2025-04-22': 'vs Hawks , 5-5 </br>Start P.田嶋 / C.若月',
    '2025-04-23': 'vs Hawks , 6-2 </br>Start P.曽谷 / C.若月',
    '2025-04-25': 'vs Lions , 2-6 </br>Start P.九里 / C.若月',
    '2025-04-26': 'vs Lions , 3-0 </br>Start P.エスピノーザ / C.若月',
    '2025-04-27': 'vs Lions , 3-2 </br>Start P.高島 / C.福永',
    '2025-04-29': 'vs Marines , 3-2 </br>Start P.宮城 / C.若月',
    '2025-04-30': 'vs Marines , 5-0 </br>Start P.田嶋 / C.若月',
    '2025-05-03': 'vs Eagles , 0-7 </br>Start P.曽谷 / C.福永',
    '2025-05-04': 'vs Eagles , 14-3 </br>Start P.高島 / C.若月',
    '2025-05-05': 'vs Fighters , 1-0 </br>Start P.九里 / C.若月',
    '2025-05-06': 'vs Fighters , 3-7 </br>Start P.東 / C.若月',
    '2025-05-07': 'vs Fighters , 2-2 </br>Start P.宮城 / C.森',
    '2025-05-09': 'vs Hawks , 1-11 </br>Start P.エスピノーザ / C.森',
    '2025-05-10': 'vs Hawks , 6-1 </br>Start P.曽谷 / C.福永',
    '2025-05-11': 'vs Hawks , 1-7 </br>Start P.田嶋 / C.若月',
    '2025-05-13': 'vs Fighters , 7-0 </br>Start P.九里 / C.若月',
    '2025-05-14': 'vs Fighters , 5-9 </br>Start P.宮城 / C.福永',
    '2025-05-15': 'vs Fighters , 7-0 </br>Start P.寺西 / C.若月',
    '2025-05-16': 'vs Lions , 3-0 </br>Start P.エスピノーザ / C.若月',
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
