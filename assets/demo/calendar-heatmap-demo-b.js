var squareLength = 18;
var _colorRange = ['#ECEFF2', '#008DDA'];

// 2024
var datas24 = {
    '2024-03-29': 1,
    '2024-03-30': 1,
    '2024-03-31': -1,
    '2024-04-02': 1,
    '2024-04-03': -1,
    '2024-04-04': 1,
    '2024-04-05': 1,
    '2024-04-06': 1,
    '2024-04-05': 1,
    '2024-04-06': 1,
    '2024-04-07': -1,
    '2024-04-09': -1,
    '2024-04-10': -1,
    '2024-04-12': 1,
    '2024-04-13': -1,
    '2024-04-14': -1,
    '2024-04-16': -1,
    '2024-04-17': -1,
    '2024-04-19': -1,
    '2024-04-20': 1,
    '2024-04-21': 1,
    '2024-04-23': 0,
    '2024-04-24': -1,
    '2024-04-26': 1,
    '2024-04-27': -1,
    '2024-04-28': -1,
    '2024-04-29': -1,
    '2024-04-30': 1,
    '2024-05-01': 1,
    '2024-05-03': 1,
    '2024-05-04': -1,
    '2024-05-05': 1,
    '2024-05-06': 1,
    '2024-05-08': -1,
    '2024-05-10': -1,
    '2024-05-11': 1,
    '2024-05-12': -1,
    '2024-05-14': -1,
    '2024-05-15': -1,
    '2024-05-17': 1,
    '2024-05-18': 1,
    '2024-05-19': -1,
    '2024-05-21': 1,
    '2024-05-22': 1,
    '2024-05-23': 1,
    '2024-05-24': -1,
    '2024-05-25': -1,
    '2024-05-26': -1,
    '2024-05-28': 1,
    '2024-05-29': -1,
    '2024-05-30': -1,
    '2024-05-31': 1,
    '2024-06-01': 1,
    '2024-06-02': -1,
    '2024-06-04': 1,
    '2024-06-05': -1,
    '2024-06-06': -1,
    '2024-06-07': -1,
    '2024-06-08': -1,
    '2024-06-09': 1,
    '2024-06-11': 1,
    '2024-06-12': 1,
    '2024-06-13': 1,
    '2024-06-14': 1,
    '2024-06-15': 1,
    '2024-06-16': 1,
    '2024-06-21': -1,
    '2024-06-22': 1,
    '2024-06-25': -1,
    '2024-06-27': 1,
    '2024-06-28': 1,
    '2024-06-29': 1,
    '2024-06-30': -1,
    '2024-07-02': 1,
    '2024-07-03': -1,
    '2024-07-04': 1,
    '2024-07-05': 1,
    '2024-07-06': -1,
    '2024-07-07': -1,
    '2024-07-09': 1,
    '2024-07-10': 1,
    '2024-07-11': 1,
    '2024-07-12': -1,
    '2024-07-13': -1,
    '2024-07-14': 1,
    '2024-07-15': 1,
    '2024-07-17': -1,
    '2024-07-19': 1,
    '2024-07-19': 1,
    '2024-07-19': 1,
    '2024-07-19': 1,
    '2024-07-20': -1,
    '2024-07-21': -1,
    '2024-07-26': -1,
    '2024-07-27': -1,
    '2024-07-28': -1,
    '2024-07-30': -1,
    '2024-07-31': -1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Carp , 4-3 </br>Start P.東 / C.山本',
    '2024-03-30': 'vs Carp , 6-1 </br>Start P.平良 / C.山本',
    '2024-03-31': 'vs Carp , 1-5 </br>Start P.大貫 / C.伊藤',
    '2024-04-02': 'vs Tigers , 3-5 </br>Start P.ジャクソン / C.山本',
    '2024-04-03': 'vs Tigers , 5-2 </br>Start P.濱口 / C.山本',
    '2024-04-04': 'vs Tigers , 2-3 </br>Start P.中川 / C.松尾',
    '2024-04-05': 'vs Tigers , 2-3 </br>Start P.中川 / C.山本',
    '2024-04-06': 'vs Tigers , 2-3 </br>Start P.中川 / C.山本',
    '2024-04-05': 'vs Giants , 1-2 </br>Start P.東 / C.山本',
    '2024-04-06': 'vs Giants , 4-6 </br>Start P.ケイ / C.山本',
    '2024-04-07': 'vs Giants , 3-0 </br>Start P.大貫 / C.伊藤',
    '2024-04-09': 'vs Dragons , 1-3 </br>Start P.ジャクソン / C.山本',
    '2024-04-10': 'vs Dragons , 1-6 </br>Start P.小園 / C.松尾',
    '2024-04-12': 'vs Swallows , 3-1 </br>Start P.東 / C.山本',
    '2024-04-13': 'vs Swallows , 2-5 </br>Start P.ケイ / C.山本',
    '2024-04-14': 'vs Swallows , 0-9 </br>Start P.大貫 / C.伊藤',
    '2024-04-16': 'vs Carp , 11-2 </br>Start P.ジャクソン / C.山本',
    '2024-04-17': 'vs Carp , 5-1 </br>Start P.濱口 / C.山本',
    '2024-04-19': 'vs Swallows , 4-3 </br>Start P.東 / C.山本',
    '2024-04-20': 'vs Swallows , 4-7 </br>Start P.ケイ / C.山本',
    '2024-04-21': 'vs Swallows , 3-8 </br>Start P.大貫 / C.伊藤',
    '2024-04-23': 'vs Tigers , 1-1 </br>Start P.ジャクソン / C.山本',
    '2024-04-24': 'vs Tigers , 3-5 </br>Start P.濱口 / C.山本',
    '2024-04-26': 'vs Giants , 7-2 </br>Start P.東 / C.山本',
    '2024-04-27': 'vs Giants , 1-2 </br>Start P.ケイ / C.山本',
    '2024-04-28': 'vs Giants , 2-6 </br>Start P.大貫 / C.伊藤',
    '2024-04-29': 'vs Dragons , 11-1 </br>Start P.ジャクソン / C.山本',
    '2024-04-30': 'vs Dragons , 1-2 </br>Start P.中川 / C.山本',
    '2024-05-01': 'vs Dragons , 1-12 </br>Start P.石田 / C.戸柱',
    '2024-05-03': 'vs Carp , 0-2 </br>Start P.東 / C.山本',
    '2024-05-04': 'vs Carp , 4-1 </br>Start P.ケイ / C.山本',
    '2024-05-05': 'vs Carp , 0-5 </br>Start P.大貫 / C.山本',
    '2024-05-06': 'vs Swallows , 6-5 </br>Start P.ジャクソン / C.伊藤',
    '2024-05-08': 'vs Swallows , 2-6 </br>Start P.石田 / C.戸柱',
    '2024-05-10': 'vs Tigers , 3-4 </br>Start P.東 / C.山本',
    '2024-05-11': 'vs Tigers , 11-9 </br>Start P.中川 / C.山本',
    '2024-05-12': 'vs Tigers , 0-1 </br>Start P.大貫 / C.山本',
    '2024-05-14': 'vs Giants , 2-1 </br>Start P.ケイ / C.山本',
    '2024-05-15': 'vs Giants , 4-0 </br>Start P.石田 / C.戸柱',
    '2024-05-17': 'vs Dragons , 2-1 </br>Start P.東 / C.山本',
    '2024-05-18': 'vs Dragons , 3-2 </br>Start P.中川 / C.山本',
    '2024-05-19': 'vs Dragons , 2-3 </br>Start P.大貫 / C.山本',
    '2024-05-21': 'vs Swallows , 0-7 </br>Start P.ケイ / C.山本',
    '2024-05-22': 'vs Swallows , 1-2 </br>Start P.ジャクソン / C.戸柱',
    '2024-05-23': 'vs Swallows , 3-5 </br>Start P.石田 / C.山本',
    '2024-05-24': 'vs Carp , 2-5 </br>Start P.東 / C.山本',
    '2024-05-25': 'vs Carp , 6-9 </br>Start P.中川 / C.山本',
    '2024-05-26': 'vs Carp , 2-4 </br>Start P.大貫 / C.山本',
    '2024-05-28': 'vs Eagles , 6-1 </br>Start P.ケイ / C.山本',
    '2024-05-29': 'vs Eagles , 0-4 </br>Start P.ジャクソン / C.戸柱',
    '2024-05-30': 'vs Eagles , 5-6 </br>Start P.石田 / C.山本',
    '2024-05-31': 'vs Fighters , 3-4 </br>Start P.東 / C.山本',
    '2024-06-01': 'vs Fighters , 3-4 </br>Start P.中川 / C.伊藤',
    '2024-06-02': 'vs Fighters , 9-2 </br>Start P.大貫 / C.山本',
    '2024-06-04': 'vs Buffaloes , 3-1 </br>Start P.ケイ / C.山本',
    '2024-06-05': 'vs Buffaloes , 1-2 </br>Start P.ジャクソン / C.山本',
    '2024-06-06': 'vs Buffaloes , 1-3 </br>Start P.石田 / C.戸柱',
    '2024-06-07': 'vs Hawks , 1-10 </br>Start P.森 / C.伊藤',
    '2024-06-08': 'vs Hawks , 3-5 </br>Start P.東 / C.山本',
    '2024-06-09': 'vs Hawks , 8-5 </br>Start P.石田 / C.山本',
    '2024-06-11': 'vs Marines , 0-4 </br>Start P.ジャクソン / C.伊藤',
    '2024-06-12': 'vs Marines , 3-13 </br>Start P.ケイ / C.山本',
    '2024-06-13': 'vs Marines , 1-3 </br>Start P.大貫 / C.山本',
    '2024-06-14': 'vs Lions , 1-5 </br>Start P.濱口 / C.戸柱',
    '2024-06-15': 'vs Lions , 0-4 </br>Start P.東 / C.山本',
    '2024-06-16': 'vs Lions , 0-5 </br>Start P.石田 / C.山本',
    '2024-06-21': 'vs Tigers , 1-0 </br>Start P.ジャクソン / C.山本',
    '2024-06-22': 'vs Tigers , 2-5 </br>Start P.東 / C.山本',
    '2024-06-25': 'vs Giants , 2-3 </br>Start P.濱口 / C.戸柱',
    '2024-06-27': 'vs Giants , 5-4 </br>Start P.平良 / C.山本',
    '2024-06-28': 'vs Dragons , 1-5 </br>Start P.ジャクソン / C.山本',
    '2024-06-29': 'vs Dragons , 1-5 </br>Start P.東 / C.山本',
    '2024-06-30': 'vs Dragons , 3-0 </br>Start P.ケイ / C.山本',
    '2024-07-02': 'vs Swallows , 6-4 </br>Start P.石田 / C.山本',
    '2024-07-03': 'vs Swallows , 3-5 </br>Start P.濱口 / C.伊藤',
    '2024-07-04': 'vs Swallows , 3-0 </br>Start P.平良 / C.山本',
    '2024-07-05': 'vs Tigers , 1-2 </br>Start P.ジャクソン / C.戸柱',
    '2024-07-06': 'vs Tigers , 2-1 </br>Start P.森 / C.山本',
    '2024-07-07': 'vs Tigers , 6-5 </br>Start P.ケイ / C.山本',
    '2024-07-09': 'vs Dragons , 6-5 </br>Start P.石田 / C.山本',
    '2024-07-10': 'vs Dragons , 3-0 </br>Start P.東 / C.山本',
    '2024-07-11': 'vs Dragons , 3-2 </br>Start P.平良 / C.山本',
    '2024-07-12': 'vs Giants , 3-2 </br>Start P.ジャクソン / C.山本',
    '2024-07-13': 'vs Giants , 6-1 </br>Start P.吉野 / C.伊藤',
    '2024-07-14': 'vs Giants , 0-6 </br>Start P.ケイ / C.山本',
    '2024-07-15': 'vs Carp , 6-1 </br>Start P.濱口 / C.山本',
    '2024-07-17': 'vs Carp , 0-3 </br>Start P.東 / C.山本',
    '2024-07-19': 'vs Swallows , 7-8 </br>Start P.ジャクソン / C.山本',
    '2024-07-19': 'vs Swallows , 7-8 </br>Start P.ジャクソン / C.山本',
    '2024-07-19': 'vs Swallows , 7-8 </br>Start P.ジャクソン / C.山本',
    '2024-07-19': 'vs Swallows , 7-8 </br>Start P.ジャクソン / C.山本',
    '2024-07-20': 'vs Swallows , 6-4 </br>Start P.石田 / C.山本',
    '2024-07-21': 'vs Swallows , 8-7 </br>Start P.ケイ / C.山本',
    '2024-07-26': 'vs Giants , 2-5 </br>Start P.ジャクソン / C.山本',
    '2024-07-27': 'vs Giants , 1-2 </br>Start P.山崎 / C.山本',
    '2024-07-28': 'vs Giants , 0-6 </br>Start P.ケイ / C.山本',
    '2024-07-30': 'vs Carp , 6-3 </br>Start P.濱口 / C.山本',
    '2024-07-31': 'vs Carp , 2-1 </br>Start P.東 / C.山本',
    //@@NEXTSCORE@@
};
var chartData24 = [];
for (var d in datas24) {
    chartData24.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas24[d],
        score: score24[d],
    });
};
var heatmap24 = calendarHeatmap()
  .data(chartData24)
  .startDate('2024-03-29')
  .endDate('2024-10-08')
  .selector('#calmap24')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap24();  // render the chart
