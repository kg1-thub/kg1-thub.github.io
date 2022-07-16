var squareLength = 18;
var _colorRange = ['#ECEFF2', '#ff8000'];

var datas22 = {
    '2022-03-25': 1,
    '2022-03-26': 1,
    '2022-03-27': -1,
    '2022-03-29': 1,
    '2022-03-30': 1,
    '2022-03-31': 1,
    '2022-04-01': 1,
    '2022-04-02': 1,
    '2022-04-03': 1,
    '2022-04-05': -1,
    '2022-04-06': 1,
    '2022-04-07': -1,
    '2022-04-08': -1,
    '2022-04-09': 1,
    '2022-04-10': -1,
    '2022-04-12': 1,
    '2022-04-13': 1,
    '2022-04-15': -1,
    '2022-04-16': -1,
    '2022-04-17': 1,
    '2022-04-19': 1,
    '2022-04-20': 1,
    '2022-04-21': 1,
    '2022-04-22': 1,
    '2022-04-23': 1,
    '2022-04-24': -1,
    '2022-04-26': -1,
    '2022-04-27': 1,
    '2022-04-28': 1,
    '2022-04-29': -1,
    '2022-04-30': -1,
    '2022-05-01': -1,
    '2022-05-03': -1,
    '2022-05-04': 1,
    '2022-05-05': -1,
    '2022-05-06': -1,
    '2022-05-07': -1,
    '2022-05-08': -1,
    '2022-05-10': -1,
    '2022-05-12': 1,
    '2022-05-13': 1,
    '2022-05-14': 1,
    '2022-05-15': -1,
    '2022-05-17': 1,
    '2022-05-18': 1,
    '2022-05-19': 1,
    '2022-05-20': 1,
    '2022-05-21': -1,
    '2022-05-22': -1,
    '2022-05-24': 1,
    '2022-05-25': 1,
    '2022-05-26': -1,
    '2022-05-27': -1,
    '2022-05-28': 1,
    '2022-05-29': -1,
    '2022-05-31': -1,
    '2022-06-01': -1,
    '2022-06-02': 1,
    '2022-06-03': 1,
    '2022-06-04': 1,
    '2022-06-05': -1,
    '2022-06-07': -1,
    '2022-06-08': -1,
    '2022-06-09': 1,
    '2022-06-10': 1,
    '2022-06-11': -1,
    '2022-06-12': -1,
    '2022-06-17': -1,
    '2022-06-18': -1,
    '2022-06-19': 1,
    '2022-06-21': -1,
    '2022-06-22': 1,
    '2022-06-23': -1,
    '2022-06-24': -1,
    '2022-06-25': 1,
    '2022-06-26': -1,
    '2022-06-28': 1,
    '2022-06-29': -1,
    '2022-07-01': -1,
    '2022-07-02': -1,
    '2022-07-03': 1,
    '2022-07-05': 1,
    '2022-07-06': 1,
    '2022-07-07': -1,
    '2022-07-08': 0,
    '2022-07-09': -1,
    '2022-07-10': -1,
    '2022-07-12': 1,
    '2022-07-13': -1,
    '2022-07-14': -1,
    '2022-07-15': -1,
    '2022-07-16': -1,
    //@@NEXTGAME@@
};
var score22 = {
    '2022-03-25': 'vs Dragons , 4-2 </br>Start P.菅野 / C.小林',
    '2022-03-26': 'vs Dragons , 7-5 </br>Start P.山崎伊 / C.大城',
    '2022-03-27': 'vs Dragons , 5-7 </br>Start P.赤星 / C.大城',
    '2022-03-29': 'vs Swallows , 3-5 </br>Start P.戸郷 / C.大城',
    '2022-03-30': 'vs Swallows , 1-3 </br>Start P.ﾒﾙｾﾃﾞｽ / C.小林',
    '2022-03-31': 'vs Swallows , 3-6 </br>Start P.堀田 / C.大城',
    '2022-04-01': 'vs Tigers , 6-5 </br>Start P.菅野 / C.大城',
    '2022-04-02': 'vs Tigers , 5-4 </br>Start P.山崎伊 / C.大城',
    '2022-04-03': 'vs Tigers , 9-5 </br>Start P.赤星 / C.小林',
    '2022-04-05': 'vs Carp , 3-1 </br>Start P.戸郷 / C.大城',
    '2022-04-06': 'vs Carp , 1-2 </br>Start P.ﾒﾙｾﾃﾞｽ / C.小林',
    '2022-04-07': 'vs Carp , 9-2 </br>Start P.堀田 / C.小林',
    '2022-04-08': 'vs Swallows , 2-7 </br>Start P.菅野 / C.大城',
    '2022-04-09': 'vs Swallows , 3-2 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-04-10': 'vs Swallows , 1-2 </br>Start P.赤星 / C.小林',
    '2022-04-12': 'vs Baystars , 10-4 </br>Start P.戸郷 / C.大城',
    '2022-04-13': 'vs Baystars , 4-3 </br>Start P.ﾒﾙｾﾃﾞｽ / C.大城',
    '2022-04-15': 'vs Tigers , 4-1 </br>Start P.菅野 / C.大城',
    '2022-04-16': 'vs Tigers , 2-1 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-04-17': 'vs Tigers , 1-3 </br>Start P.赤星 / C.大城',
    '2022-04-19': 'vs Carp , 3-1 </br>Start P.戸郷 / C.大城',
    '2022-04-20': 'vs Carp , 5-3 </br>Start P.ﾒﾙｾﾃﾞｽ / C.小林',
    '2022-04-21': 'vs Carp , 8-4 </br>Start P.堀田 / C.大城',
    '2022-04-22': 'vs Dragons , 2-7 </br>Start P.菅野 / C.大城',
    '2022-04-23': 'vs Dragons , 0-3 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-04-24': 'vs Dragons , 7-6 </br>Start P.赤星 / C.小林',
    '2022-04-26': 'vs Baystars , 6-4 </br>Start P.戸郷 / C.小林',
    '2022-04-27': 'vs Baystars , 2-8 </br>Start P.ﾒﾙｾﾃﾞｽ / C.小林',
    '2022-04-28': 'vs Baystars , 0-7 </br>Start P.山崎伊 / C.岸田',
    '2022-04-29': 'vs Tigers , 2-3 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-04-30': 'vs Tigers , 3-10 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-05-01': 'vs Tigers , 1-3 </br>Start P.高橋 / C.大城',
    '2022-05-03': 'vs Carp , 12-3 </br>Start P.赤星 / C.小林',
    '2022-05-04': 'vs Carp , 3-6 </br>Start P.戸郷 / C.大城',
    '2022-05-05': 'vs Carp , 3-0 </br>Start P.ﾒﾙｾﾃﾞｽ / C.大城',
    '2022-05-06': 'vs Swallows , 2-13 </br>Start P.堀田 / C.岸田',
    '2022-05-07': 'vs Swallows , 2-6 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-05-08': 'vs Swallows , 3-4 </br>Start P.高橋 / C.大城',
    '2022-05-10': 'vs Baystars , 3-1 </br>Start P.山崎伊 / C.大城',
    '2022-05-12': 'vs Baystars , 1-4 </br>Start P.菅野 / C.大城',
    '2022-05-13': 'vs Dragons , 5-2 </br>Start P.戸郷 / C.大城',
    '2022-05-14': 'vs Dragons , 7-6 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-05-15': 'vs Dragons , 3-9 </br>Start P.高橋 / C.大城',
    '2022-05-17': 'vs Carp , 3-2 </br>Start P.ﾒﾙｾﾃﾞｽ / C.大城',
    '2022-05-18': 'vs Carp , 4-2 </br>Start P.山崎伊 / C.大城',
    '2022-05-19': 'vs Carp , 2-1 </br>Start P.菅野 / C.大城',
    '2022-05-20': 'vs Tigers , 2-6 </br>Start P.戸郷 / C.大城',
    '2022-05-21': 'vs Tigers , 2-1 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-05-22': 'vs Tigers , 4-0 </br>Start P.高橋 / C.小林',
    '2022-05-24': 'vs Orix , 4-2 </br>Start P.ﾒﾙｾﾃﾞｽ / C.大城',
    '2022-05-25': 'vs Orix , 5-3 </br>Start P.山崎伊 / C.大城',
    '2022-05-26': 'vs Orix , 2-3 </br>Start P.菅野 / C.大城',
    '2022-05-27': 'vs Fighters , 3-2 </br>Start P.戸郷 / C.小林',
    '2022-05-28': 'vs Fighters , 4-9 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-05-29': 'vs Fighters , 7-2 </br>Start P.横川 / C.岸田',
    '2022-05-31': 'vs Softbank , 1-3 </br>Start P.ｱﾝﾄﾞﾘｰｽ / C.大城',
    '2022-06-01': 'vs Softbank , 3-6 </br>Start P.赤星 / C.大城',
    '2022-06-02': 'vs Softbank , 3-0 </br>Start P.菅野 / C.小林',
    '2022-06-03': 'vs Lotte , 10-3 </br>Start P.戸郷 / C.小林',
    '2022-06-04': 'vs Lotte , 2-1 </br>Start P.ﾒﾙｾﾃﾞｽ / C.小林',
    '2022-06-05': 'vs Lotte , 4-10 </br>Start P.山崎伊 / C.小林',
    '2022-06-07': 'vs Lions , 9-4 </br>Start P.ｱﾝﾄﾞﾘｰｽ / C.小林',
    '2022-06-08': 'vs Lions , 3-0 </br>Start P.ｼｭｰﾒｰｶｰ / C.小林',
    '2022-06-09': 'vs Lions , 3-4 </br>Start P.赤星 / C.山瀬',
    '2022-06-10': 'vs Eagles , 1-4 </br>Start P.戸郷 / C.山瀬',
    '2022-06-11': 'vs Eagles , 8-1 </br>Start P.ﾒﾙｾﾃﾞｽ / C.山瀬',
    '2022-06-12': 'vs Eagles , 9-2 </br>Start P.山崎伊 / C.山瀬',
    '2022-06-17': 'vs Dragons , 2-0 </br>Start P.菅野 / C.小林',
    '2022-06-18': 'vs Dragons , 4-3 </br>Start P.ｱﾝﾄﾞﾘｰｽ / C.小林',
    '2022-06-19': 'vs Dragons , 3-5 </br>Start P.ｼｭｰﾒｰｶｰ / C.小林',
    '2022-06-21': 'vs Baystars , 1-3 </br>Start P.戸郷 / C.大城',
    '2022-06-22': 'vs Baystars , 5-4 </br>Start P.ﾒﾙｾﾃﾞｽ / C.小林',
    '2022-06-23': 'vs Baystars , 5-7 </br>Start P.赤星 / C.小林',
    '2022-06-24': 'vs Swallows , 16-6 </br>Start P.菅野 / C.大城',
    '2022-06-25': 'vs Swallows , 5-19 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-06-26': 'vs Swallows , 11-10 </br>Start P.戸郷 / C.大城',
    '2022-06-28': 'vs Dragons , 6-2 </br>Start P.高橋 / C.大城',
    '2022-06-29': 'vs Dragons , 2-3 </br>Start P.山崎伊 / C.大城',
    '2022-07-01': 'vs Carp , 5-3 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-07-02': 'vs Carp , 2-0 </br>Start P.菅野 / C.大城',
    '2022-07-03': 'vs Carp , 5-7 </br>Start P.堀田 / C.大城',
    '2022-07-05': 'vs Swallows , 4-1 </br>Start P.戸郷 / C.大城',
    '2022-07-06': 'vs Swallows , 4-3 </br>Start P.ﾒﾙｾﾃﾞｽ / C.大城',
    '2022-07-07': 'vs Swallows , 3-11 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-07-08': 'vs Baystars , 3-3 </br>Start P.山崎伊 / C.大城',
    '2022-07-09': 'vs Baystars , 0-2 </br>Start P.ｱﾝﾄﾞﾘｰｽ / C.大城',
    '2022-07-10': 'vs Baystars , 4-8 </br>Start P.菅野 / C.大城',
    '2022-07-12': 'vs Tigers , 0-4 </br>Start P.戸郷 / C.大城',
    '2022-07-13': 'vs Tigers , 13-0 </br>Start P.ﾒﾙｾﾃﾞｽ / C.大城',
    '2022-07-14': 'vs Tigers , 3-0 </br>Start P.ｼｭｰﾒｰｶｰ / C.大城',
    '2022-07-15': 'vs Carp , 3-6 </br>Start P.山崎伊 / C.大城',
    '2022-07-16': 'vs Carp , 4-11 </br>Start P.ｱﾝﾄﾞﾘｰｽ / C.大城',
    //@@NEXTSCORE@@
};
var chartData22 = [];
for (var d in datas22) {
    chartData22.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas22[d],
        score: score22[d],
    });
};
var heatmap22 = calendarHeatmap()
  .data(chartData22)
  .startDate('2022-03-21')
  .endDate('2022-10-30')
  .selector('#calmap22')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('700px')
  .colorRange(_colorRange);
heatmap22();  // render the chart

var datas21 = {
    '2021-03-26': 1,
    '2021-03-27': 1,
    '2021-03-28': 0,
    '2021-03-30': 0,
    '2021-03-31': -1,
    '2021-04-01': 1,
    '2021-04-02': 0,
    '2021-04-03': -1,
    '2021-04-04': 1,
    '2021-04-06': -1,
    '2021-04-07': -1,
    '2021-04-08': 1,
    '2021-04-09': -1,
    '2021-04-10': -1,
    '2021-04-11': 1,
    '2021-04-13': 1,
    '2021-04-14': 1,
    '2021-04-15': 1,
    '2021-04-16': 1,
    '2021-04-17': 1,
    '2021-04-18': 0,
    '2021-04-20': -1,
    '2021-04-21': 1,
    '2021-04-22': 1,
    '2021-04-23': 1,
    '2021-04-24': -1,
    '2021-04-25': -1,
    '2021-04-27': 1,
    '2021-04-28': 1,
    '2021-04-30': -1,
    '2021-05-01': -1,
    '2021-05-03': 1,
    '2021-05-04': 0,
    '2021-05-05': -1,
    '2021-05-07': 1,
    '2021-05-09': 1,
    '2021-05-11': 1,
    '2021-05-12': 0,
    '2021-05-14': -1,
    '2021-05-15': 1,
    '2021-05-16': -1,
    '2021-05-18': 1,
    '2021-05-19': -1,
    '2021-05-21': 0,
    '2021-05-22': 1,
    '2021-05-23': -1,
    '2021-05-25': 1,
    '2021-05-26': 1,
    '2021-05-27': -1,
    '2021-05-28': -1,
    '2021-05-29': -1,
    '2021-05-30': 1,
    '2021-06-01': 0,
    '2021-06-02': 1,
    '2021-06-03': 0,
    '2021-06-04': 1,
    '2021-06-05': -1,
    '2021-06-06': -1,
    '2021-06-08': 0,
    '2021-06-09': -1,
    '2021-06-10': -1,
    '2021-06-11': 1,
    '2021-06-12': 1,
    '2021-06-13': -1,
    '2021-06-18': -1,
    '2021-06-19': 1,
    '2021-06-20': 1,
    '2021-06-22': 1,
    '2021-06-23': 1,
    '2021-06-25': 1,
    '2021-06-26': 1,
    '2021-06-27': 1,
    '2021-06-29': 1,
    '2021-06-30': -1,
    '2021-07-01': 1,
    '2021-07-03': 1,
    '2021-07-04': -1,
    '2021-07-06': -1,
    '2021-07-07': 1,
    '2021-07-08': -1,
    '2021-07-09': -1,
    '2021-07-10': 1,
    '2021-07-11': 1,
    '2021-07-13': -1,
    '2021-07-14': -1,
    '2021-08-13': 1,
    '2021-08-14': 1,
    '2021-08-15': 1,
    '2021-08-17': -1,
    '2021-08-18': 1,
    '2021-08-20': -1,
    '2021-08-21': -1,
    '2021-08-22': 0,
    '2021-08-24': 1,
    '2021-08-25': 1,
    '2021-08-26': -1,
    '2021-08-27': -1,
    '2021-08-28': 0,
    '2021-08-29': 1,
    '2021-08-31': 1,
    '2021-09-01': 1,
    '2021-09-02': 0,
    '2021-09-03': -1,
    '2021-09-04': -1,
    '2021-09-05': 0,
    '2021-09-07': -1,
    '2021-09-08': -1,
    '2021-09-09': 0,
    '2021-09-10': -1,
    '2021-09-11': -1,
    '2021-09-12': 1,
    '2021-09-14': -1,
    '2021-09-15': 1,
    '2021-09-17': -1,
    '2021-09-18': 0,
    '2021-09-19': 1,
    '2021-09-21': -1,
    '2021-09-22': 1,
    '2021-09-23': 1,
    '2021-09-24': 0,
    '2021-09-25': -1,
    '2021-09-26': -1,
    '2021-09-28': -1,
    '2021-09-29': -1,
    '2021-09-30': -1,
    '2021-10-01': 1,
    '2021-10-02': 1,
    '2021-10-03': 0,
    '2021-10-05': -1,
    '2021-10-06': -1,
    '2021-10-07': -1,
    '2021-10-08': -1,
    '2021-10-09': -1,
    '2021-10-10': -1,
    '2021-10-12': -1,
    '2021-10-13': 0,
    '2021-10-14': -1,
    '2021-10-15': -1,
    '2021-10-16': -1,
    '2021-10-19': 0,
    '2021-10-20': 1,
    '2021-10-23': 1,
    '2021-10-24': -1,
};
var chartData21 = [];
for (var d in datas21) {
    chartData21.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas21[d]
    });
};
var heatmap21 = calendarHeatmap()
  .data(chartData21)
  .startDate('2021-03-15')
  .endDate('2021-10-24')
  .selector('#calmap21')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('690px')
  .colorRange(_colorRange);
heatmap21();  // render the chart

var datas20 = {
    '2020-06-19': 1,
    '2020-06-20': 1,
    '2020-06-21': 1,
    '2020-06-23': 1,
    '2020-06-24': -1,
    '2020-06-25': 0,
    '2020-06-26': 1,
    '2020-06-27': -1,
    '2020-06-28': 1,
    '2020-06-30': 1,
    '2020-07-01': -1,
    '2020-07-02': 1,
    '2020-07-03': 1,
    '2020-07-04': 1,
    '2020-07-05': -1,
    '2020-07-09': -1,
    '2020-07-11': -1,
    '2020-07-12': -1,
    '2020-07-14': 1,
    '2020-07-15': 1,
    '2020-07-16': 1,
    '2020-07-17': 1,
    '2020-07-18': 1,
    '2020-07-19': 1,
    '2020-07-21': 1,
    '2020-07-22': -1,
    '2020-07-23': 1,
    '2020-07-24': 0,
    '2020-07-25': -1,
    '2020-07-26': 1,
    '2020-07-28': 1,
    '2020-07-29': -1,
    '2020-07-30': -1,
    '2020-07-31': 1,
    '2020-08-01': 1,
    '2020-08-02': -1,
    '2020-08-04': 1,
    '2020-08-05': 1,
    '2020-08-06': -1,
    '2020-08-07': -1,
    '2020-08-08': -1,
    '2020-08-09': 0,
    '2020-08-12': 1,
    '2020-08-13': 1,
    '2020-08-14': 1,
    '2020-08-15': -1,
    '2020-08-16': -1,
    '2020-08-18': 1,
    '2020-08-19': 1,
    '2020-08-20': 1,
    '2020-08-21': -1,
    '2020-08-22': -1,
    '2020-08-23': -1,
    '2020-08-25': 1,
    '2020-08-26': 1,
    '2020-08-27': 1,
    '2020-08-28': -1,
    '2020-08-29': 1,
    '2020-08-30': 1,
    '2020-09-01': 1,
    '2020-09-02': 1,
    '2020-09-03': 1,
    '2020-09-04': -1,
    '2020-09-05': 1,
    '2020-09-07': 1,
    '2020-09-08': 1,
    '2020-09-09': 1,
    '2020-09-10': 0,
    '2020-09-11': 1,
    '2020-09-12': 1,
    '2020-09-13': 1,
    '2020-09-15': 1,
    '2020-09-16': 1,
    '2020-09-17': -1,
    '2020-09-18': -1,
    '2020-09-19': -1,
    '2020-09-20': 1,
    '2020-09-21': 1,
    '2020-09-22': 1,
    '2020-09-23': 1,
    '2020-09-25': 1,
    '2020-09-26': -1,
    '2020-09-27': 1,
    '2020-09-29': 1,
    '2020-09-30': -1,
    '2020-10-01': 1,
    '2020-10-02': -1,
    '2020-10-03': 1,
    '2020-10-04': 1,
    '2020-10-05': -1,
    '2020-10-06': 1,
    '2020-10-07': -1,
    '2020-10-08': 1,
    '2020-10-10': 1,
    '2020-10-11': -1,
    '2020-10-12': -1,
    '2020-10-13': -1,
    '2020-10-14': 1,
    '2020-10-15': 0,
    '2020-10-16': -1,
    '2020-10-18': -1,
    '2020-10-20': 0,
    '2020-10-21': -1,
    '2020-10-22': 1,
    '2020-10-23': 1,
    '2020-10-24': -1,
    '2020-10-25': -1,
    '2020-10-27': -1,
    '2020-10-28': -1,
    '2020-10-29': -1,
    '2020-10-30': 0,
    '2020-10-31': 1,
    '2020-11-01': 1,
    '2020-11-03': 0,
    '2020-11-04': -1,
    '2020-11-05': -1,
    '2020-11-07': 1,
    '2020-11-08': -1,
    '2020-11-10': 1,
    '2020-11-14': -1,
};
var chartData20 = [];
for (var d in datas20) {
    chartData20.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas20[d]
    });
};
var heatmap20 = calendarHeatmap()
  .data(chartData20)
  .startDate('2020-06-07')
  .endDate('2020-11-15')
  .selector('#calmap20')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('500px')
  .colorRange(_colorRange);
heatmap20();  // render the chart

