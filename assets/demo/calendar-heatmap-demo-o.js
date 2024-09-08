var squareLength = 18;
var _colorRange = ['#ECEFF2', '#0A1D56'];

// 2024
var datas24 = {
    '2024-03-29': -1,
    '2024-03-30': 1,
    '2024-03-31': -1,
    '2024-04-02': -1,
    '2024-04-03': -1,
    '2024-04-04': 1,
    '2024-04-05': -1,
    '2024-04-06': 1,
    '2024-04-07': -1,
    '2024-04-09': 1,
    '2024-04-10': -1,
    '2024-04-11': 1,
    '2024-04-12': -1,
    '2024-04-13': 1,
    '2024-04-14': 1,
    '2024-04-16': -1,
    '2024-04-17': 1,
    '2024-04-18': 1,
    '2024-04-19': -1,
    '2024-04-20': 0,
    '2024-04-21': 1,
    '2024-04-23': 1,
    '2024-04-24': 1,
    '2024-04-25': -1,
    '2024-04-27': -1,
    '2024-04-28': 1,
    '2024-04-29': -1,
    '2024-04-30': -1,
    '2024-05-01': -1,
    '2024-05-03': -1,
    '2024-05-04': 1,
    '2024-05-05': -1,
    '2024-05-06': 1,
    '2024-05-08': -1,
    '2024-05-11': -1,
    '2024-05-14': -1,
    '2024-05-15': 0,
    '2024-05-17': -1,
    '2024-05-18': 1,
    '2024-05-19': 1,
    '2024-05-21': -1,
    '2024-05-22': -1,
    '2024-05-23': 1,
    '2024-05-24': 1,
    '2024-05-25': -1,
    '2024-05-26': -1,
    '2024-05-28': -1,
    '2024-05-29': -1,
    '2024-05-30': 1,
    '2024-05-31': 1,
    '2024-06-01': -1,
    '2024-06-02': -1,
    '2024-06-04': -1,
    '2024-06-05': 1,
    '2024-06-06': 1,
    '2024-06-07': 1,
    '2024-06-08': 1,
    '2024-06-09': 1,
    '2024-06-11': 1,
    '2024-06-12': 1,
    '2024-06-13': -1,
    '2024-06-14': -1,
    '2024-06-15': 1,
    '2024-06-16': -1,
    '2024-06-21': 1,
    '2024-06-22': -1,
    '2024-06-23': 1,
    '2024-06-25': -1,
    '2024-06-26': -1,
    '2024-06-27': 1,
    '2024-06-28': -1,
    '2024-06-29': 1,
    '2024-06-30': -1,
    '2024-07-02': 1,
    '2024-07-06': 1,
    '2024-07-07': 1,
    '2024-07-09': 1,
    '2024-07-10': 1,
    '2024-07-12': -1,
    '2024-07-13': -1,
    '2024-07-14': 1,
    '2024-07-15': -1,
    '2024-07-16': 1,
    '2024-07-17': -1,
    '2024-07-19': -1,
    '2024-07-20': -1,
    '2024-07-21': -1,
    '2024-07-26': -1,
    '2024-07-27': -1,
    '2024-07-28': -1,
    '2024-07-30': 0,
    '2024-07-31': -1,
    '2024-08-01': -1,
    '2024-08-02': -1,
    '2024-08-03': 1,
    '2024-08-04': -1,
    '2024-08-06': -1,
    '2024-08-07': 1,
    '2024-08-08': 1,
    '2024-08-10': -1,
    '2024-08-11': -1,
    '2024-08-12': 1,
    '2024-08-13': -1,
    '2024-08-14': -1,
    '2024-08-15': 1,
    '2024-08-16': 1,
    '2024-08-17': 1,
    '2024-08-18': 1,
    '2024-08-20': -1,
    '2024-08-21': -1,
    '2024-08-22': -1,
    '2024-08-23': 1,
    '2024-08-24': -1,
    '2024-08-25': 1,
    '2024-08-27': -1,
    '2024-08-28': 1,
    '2024-08-30': 1,
    '2024-08-31': 1,
    '2024-09-01': 1,
    '2024-09-02': -1,
    '2024-09-03': 1,
    '2024-09-04': 1,
    '2024-09-06': -1,
    '2024-09-07': -1,
    '2024-09-08': 1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Hawks , 1-3 </br>Start P.宮城 / C.森',
    '2024-03-30': 'vs Hawks , 2-0 </br>Start P.エスピノーザ / C.森',
    '2024-03-31': 'vs Hawks , 2-5 </br>Start P.田嶋 / C.森',
    '2024-04-02': 'vs Lions , 2-1 </br>Start P.カスティーヨ / C.若月',
    '2024-04-03': 'vs Lions , 3-0 </br>Start P.山下 / C.森',
    '2024-04-04': 'vs Lions , 1-2 </br>Start P.東 / C.若月',
    '2024-04-05': 'vs Marines , 1-0 </br>Start P.宮城 / C.森',
    '2024-04-06': 'vs Marines , 1-9 </br>Start P.エスピノーザ / C.森',
    '2024-04-07': 'vs Marines , 5-2 </br>Start P.曽谷 / C.若月',
    '2024-04-09': 'vs Eagles , 5-4 </br>Start P.田嶋 / C.若月',
    '2024-04-10': 'vs Eagles , 4-5 </br>Start P.高島 / C.若月',
    '2024-04-11': 'vs Eagles , 2-1 </br>Start P.山下 / C.森',
    '2024-04-12': 'vs Fighters , 0-1 </br>Start P.東 / C.若月',
    '2024-04-13': 'vs Fighters , 5-1 </br>Start P.宮城 / C.森',
    '2024-04-14': 'vs Fighters , 6-3 </br>Start P.カスティーヨ / C.森',
    '2024-04-16': 'vs Eagles , 6-2 </br>Start P.田嶋 / C.森',
    '2024-04-17': 'vs Eagles , 0-5 </br>Start P.エスピノーザ / C.若月',
    '2024-04-18': 'vs Eagles , 0-7 </br>Start P.曽谷 / C.若月',
    '2024-04-19': 'vs Hawks , 9-7 </br>Start P.山下 / C.若月',
    '2024-04-20': 'vs Hawks , 3-3 </br>Start P.東 / C.若月',
    '2024-04-21': 'vs Hawks , 1-3 </br>Start P.宮城 / C.森',
    '2024-04-23': 'vs Lions , 2-1 </br>Start P.田嶋 / C.若月',
    '2024-04-24': 'vs Lions , 4-3 </br>Start P.エスピノーザ / C.若月',
    '2024-04-25': 'vs Lions , 1-3 </br>Start P.カスティーヨ / C.若月',
    '2024-04-27': 'vs Fighters , 9-0 </br>Start P.椋木 / C.森',
    '2024-04-28': 'vs Fighters , 4-5 </br>Start P.齋藤 / C.若月',
    '2024-04-29': 'vs Fighters , 1-0 </br>Start P.曽谷 / C.若月',
    '2024-04-30': 'vs Marines , 0-1 </br>Start P.宮城 / C.森',
    '2024-05-01': 'vs Marines , 3-6 </br>Start P.田嶋 / C.若月',
    '2024-05-03': 'vs Fighters , 0-3 </br>Start P.東 / C.若月',
    '2024-05-04': 'vs Fighters , 3-1 </br>Start P.エスピノーザ / C.森',
    '2024-05-05': 'vs Fighters , 3-6 </br>Start P.カスティーヨ / C.森',
    '2024-05-06': 'vs Eagles , 2-4 </br>Start P.曽谷 / C.若月',
    '2024-05-08': 'vs Eagles , 4-1 </br>Start P.宮城 / C.森',
    '2024-05-11': 'vs Hawks , 4-1 </br>Start P.エスピノーザ / C.若月',
    '2024-05-14': 'vs Marines , 1-4 </br>Start P.東 / C.若月',
    '2024-05-15': 'vs Marines , 1-1 </br>Start P.カスティーヨ / C.森',
    '2024-05-17': 'vs Eagles , 3-5 </br>Start P.田嶋 / C.森',
    '2024-05-18': 'vs Eagles , 8-3 </br>Start P.曽谷 / C.若月',
    '2024-05-19': 'vs Eagles , 3-2 </br>Start P.齋藤 / C.若月',
    '2024-05-21': 'vs Fighters , 5-4 </br>Start P.エスピノーザ / C.森',
    '2024-05-22': 'vs Fighters , 5-4 </br>Start P.カスティーヨ / C.森',
    '2024-05-23': 'vs Fighters , 3-9 </br>Start P.高島 / C.若月',
    '2024-05-24': 'vs Lions , 6-9 </br>Start P.東 / C.若月',
    '2024-05-25': 'vs Lions , 6-5 </br>Start P.曽谷 / C.若月',
    '2024-05-26': 'vs Lions , 5-2 </br>Start P.鈴木 / C.若月',
    '2024-05-28': 'vs Carp , 2-1 </br>Start P.エスピノーザ / C.森',
    '2024-05-29': 'vs Carp , 14-0 </br>Start P.田嶋 / C.森',
    '2024-05-30': 'vs Carp , 2-8 </br>Start P.齋藤 / C.森',
    '2024-05-31': 'vs Dragons , 2-1 </br>Start P.カスティーヨ / C.森',
    '2024-06-01': 'vs Dragons , 1-2 </br>Start P.東 / C.若月',
    '2024-06-02': 'vs Dragons , 1-2 </br>Start P.曽谷 / C.若月',
    '2024-06-04': 'vs Baystars , 3-1 </br>Start P.エスピノーザ / C.若月',
    '2024-06-05': 'vs Baystars , 1-2 </br>Start P.田嶋 / C.若月',
    '2024-06-06': 'vs Baystars , 1-3 </br>Start P.高島 / C.若月',
    '2024-06-07': 'vs Giants , 0-2 </br>Start P.東 / C.若月',
    '2024-06-08': 'vs Giants , 0-5 </br>Start P.齋藤 / C.若月',
    '2024-06-09': 'vs Giants , 1-4 </br>Start P.佐藤 / C.若月',
    '2024-06-11': 'vs Tigers , 4-0 </br>Start P.曽谷 / C.若月',
    '2024-06-12': 'vs Tigers , 4-0 </br>Start P.エスピノーザ / C.若月',
    '2024-06-13': 'vs Tigers , 0-5 </br>Start P.田嶋 / C.若月',
    '2024-06-14': 'vs Swallows , 3-5 </br>Start P.カスティーヨ / C.若月',
    '2024-06-15': 'vs Swallows , 9-3 </br>Start P.東 / C.福永',
    '2024-06-16': 'vs Swallows , 4-5 </br>Start P.山下 / C.若月',
    '2024-06-21': 'vs Lions , 2-0 </br>Start P.エスピノーザ / C.若月',
    '2024-06-22': 'vs Lions , 2-4 </br>Start P.齋藤 / C.若月',
    '2024-06-23': 'vs Lions , 4-1 </br>Start P.カスティーヨ / C.森',
    '2024-06-25': 'vs Hawks , 2-7 </br>Start P.曽谷 / C.若月',
    '2024-06-26': 'vs Hawks , 1-5 </br>Start P.東 / C.森',
    '2024-06-27': 'vs Hawks , 3-1 </br>Start P.宮城 / C.森',
    '2024-06-28': 'vs Marines , 4-3 </br>Start P.エスピノーザ / C.森',
    '2024-06-29': 'vs Marines , 3-5 </br>Start P.田嶋 / C.若月',
    '2024-06-30': 'vs Marines , 7-0 </br>Start P.山下 / C.若月',
    '2024-07-02': 'vs Eagles , 1-4 </br>Start P.曽谷 / C.若月',
    '2024-07-06': 'vs Fighters , 4-1 </br>Start P.カスティーヨ / C.森',
    '2024-07-07': 'vs Fighters , 6-3 </br>Start P.エスピノーザ / C.若月',
    '2024-07-09': 'vs Hawks , 3-0 </br>Start P.田嶋 / C.若月',
    '2024-07-10': 'vs Hawks , 4-3 </br>Start P.宮城 / C.森',
    '2024-07-12': 'vs Marines , 1-0 </br>Start P.曽谷 / C.若月',
    '2024-07-13': 'vs Marines , 6-0 </br>Start P.カスティーヨ / C.森',
    '2024-07-14': 'vs Marines , 1-5 </br>Start P.齋藤 / C.森',
    '2024-07-15': 'vs Lions , 3-0 </br>Start P.エスピノーザ / C.若月',
    '2024-07-16': 'vs Lions , 1-2 </br>Start P.田嶋 / C.若月',
    '2024-07-17': 'vs Lions , 6-0 </br>Start P.宮城 / C.森',
    '2024-07-19': 'vs Eagles , 2-3 </br>Start P.曽谷 / C.若月',
    '2024-07-20': 'vs Eagles , 2-3 </br>Start P.カスティーヨ / C.森',
    '2024-07-21': 'vs Eagles , 5-12 </br>Start P.佐藤 / C.若月',
    '2024-07-26': 'vs Hawks , 5-1 </br>Start P.宮城 / C.森',
    '2024-07-27': 'vs Hawks , 3-0 </br>Start P.田嶋 / C.若月',
    '2024-07-28': 'vs Hawks , 4-1 </br>Start P.曽谷 / C.若月',
    '2024-07-30': 'vs Fighters , 3-3 </br>Start P.エスピノーザ / C.若月',
    '2024-07-31': 'vs Fighters , 9-2 </br>Start P.齋藤 / C.森',
    '2024-08-01': 'vs Fighters , 7-6 </br>Start P.高島 / C.石川',
    '2024-08-02': 'vs Marines , 2-3 </br>Start P.宮城 / C.若月',
    '2024-08-03': 'vs Marines , 5-1 </br>Start P.田嶋 / C.若月',
    '2024-08-04': 'vs Marines , 0-3 </br>Start P.曽谷 / C.若月',
    '2024-08-06': 'vs Marines , 0-3 </br>Start P.曽谷 / C.若月',
    '2024-08-07': 'vs Lions , 3-2 </br>Start P.佐藤 / C.森',
    '2024-08-08': 'vs Lions , 3-0 </br>Start P.高島 / C.森',
    '2024-08-10': 'vs Marines , 3-1 </br>Start P.宮城 / C.森',
    '2024-08-11': 'vs Marines , 6-1 </br>Start P.齋藤 / C.若月',
    '2024-08-12': 'vs Marines , 0-4 </br>Start P.田嶋 / C.若月',
    '2024-08-13': 'vs Eagles , 0-3 </br>Start P.曽谷 / C.若月',
    '2024-08-14': 'vs Eagles , 1-6 </br>Start P.エスピノーザ / C.若月',
    '2024-08-15': 'vs Eagles , 3-2 </br>Start P.高島 / C.若月',
    '2024-08-16': 'vs Fighters , 5-1 </br>Start P.才木 / C.若月',
    '2024-08-17': 'vs Fighters , 3-0 </br>Start P.宮城 / C.森',
    '2024-08-18': 'vs Fighters , 5-2 </br>Start P.山下 / C.森',
    '2024-08-20': 'vs Lions , 1-0 </br>Start P.田嶋 / C.若月',
    '2024-08-21': 'vs Lions , 1-0 </br>Start P.曽谷 / C.若月',
    '2024-08-22': 'vs Lions , 2-1 </br>Start P.高島 / C.森',
    '2024-08-23': 'vs Marines , 1-0 </br>Start P.カスティーヨ / C.森',
    '2024-08-24': 'vs Marines , 0-1 </br>Start P.宮城 / C.森',
    '2024-08-25': 'vs Marines , 2-0 </br>Start P.エスピノーザ / C.若月',
    '2024-08-27': 'vs Hawks , 3-1 </br>Start P.田嶋 / C.若月',
    '2024-08-28': 'vs Hawks , 1-4 </br>Start P.山下 / C.森',
    '2024-08-30': 'vs Eagles , 0-2 </br>Start P.曽谷 / C.若月',
    '2024-08-31': 'vs Eagles , 0-6 </br>Start P.宮城 / C.森',
    '2024-09-01': 'vs Eagles , 2-6 </br>Start P.エスピノーザ / C.若月',
    '2024-09-02': 'vs Eagles , 5-2 </br>Start P.高島 / C.森',
    '2024-09-03': 'vs Lions , 3-2 </br>Start P.田嶋 / C.若月',
    '2024-09-04': 'vs Lions , 4-0 </br>Start P.山下 / C.若月',
    '2024-09-06': 'vs Fighters , 3-2 </br>Start P.カスティーヨ / C.若月',
    '2024-09-07': 'vs Fighters , 5-1 </br>Start P.曽谷 / C.若月',
    '2024-09-08': 'vs Fighters , 4-5 </br>Start P.宮城 / C.若月',
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
  .startDate('2024-03-22')
  .endDate('2024-10-08')
  .selector('#calmap24')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap24();  // render the chart
