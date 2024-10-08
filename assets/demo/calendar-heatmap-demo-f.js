var squareLength = 18;
var _colorRange = ['#ECEFF2', '#006298'];

// 2024
var datas24 = {
    '2024-03-29': 1,
    '2024-03-30': -1,
    '2024-03-31': 1,
    '2024-04-02': -1,
    '2024-04-03': 1,
    '2024-04-05': 1,
    '2024-04-06': -1,
    '2024-04-07': -1,
    '2024-04-09': 1,
    '2024-04-11': -1,
    '2024-04-12': 1,
    '2024-04-13': -1,
    '2024-04-14': -1,
    '2024-04-16': 1,
    '2024-04-17': 0,
    '2024-04-19': 1,
    '2024-04-20': 1,
    '2024-04-21': 1,
    '2024-04-23': 1,
    '2024-04-25': -1,
    '2024-04-27': 1,
    '2024-04-28': -1,
    '2024-04-29': 1,
    '2024-04-30': 1,
    '2024-05-01': -1,
    '2024-05-03': 1,
    '2024-05-04': -1,
    '2024-05-05': 1,
    '2024-05-06': -1,
    '2024-05-07': -1,
    '2024-05-08': -1,
    '2024-05-10': 1,
    '2024-05-11': 1,
    '2024-05-12': 1,
    '2024-05-14': 1,
    '2024-05-15': 1,
    '2024-05-17': 0,
    '2024-05-18': -1,
    '2024-05-19': -1,
    '2024-05-21': 1,
    '2024-05-22': 1,
    '2024-05-23': -1,
    '2024-05-24': 1,
    '2024-05-25': 1,
    '2024-05-26': -1,
    '2024-05-29': 1,
    '2024-05-30': 1,
    '2024-05-31': -1,
    '2024-06-01': -1,
    '2024-06-02': 1,
    '2024-06-04': 1,
    '2024-06-05': -1,
    '2024-06-06': -1,
    '2024-06-07': 1,
    '2024-06-08': -1,
    '2024-06-09': -1,
    '2024-06-11': -1,
    '2024-06-12': 1,
    '2024-06-13': 1,
    '2024-06-14': -1,
    '2024-06-15': -1,
    '2024-06-16': 0,
    '2024-06-18': -1,
    '2024-06-21': 0,
    '2024-06-22': 1,
    '2024-06-23': -1,
    '2024-06-25': -1,
    '2024-06-26': 0,
    '2024-06-28': -1,
    '2024-06-29': -1,
    '2024-06-30': -1,
    '2024-07-02': 1,
    '2024-07-03': -1,
    '2024-07-04': -1,
    '2024-07-06': -1,
    '2024-07-07': -1,
    '2024-07-09': 1,
    '2024-07-10': 1,
    '2024-07-12': -1,
    '2024-07-13': 1,
    '2024-07-14': 1,
    '2024-07-15': -1,
    '2024-07-16': 1,
    '2024-07-17': 1,
    '2024-07-19': 1,
    '2024-07-20': 1,
    '2024-07-21': 1,
    '2024-07-26': 0,
    '2024-07-27': -1,
    '2024-07-28': 1,
    '2024-07-30': 0,
    '2024-07-31': 1,
    '2024-08-01': 1,
    '2024-08-02': -1,
    '2024-08-03': 1,
    '2024-08-04': -1,
    '2024-08-06': 1,
    '2024-08-07': 1,
    '2024-08-08': 1,
    '2024-08-10': 1,
    '2024-08-11': 1,
    '2024-08-12': 1,
    '2024-08-13': -1,
    '2024-08-14': 1,
    '2024-08-15': 1,
    '2024-08-16': -1,
    '2024-08-17': -1,
    '2024-08-18': -1,
    '2024-08-20': 1,
    '2024-08-21': 1,
    '2024-08-22': 1,
    '2024-08-23': -1,
    '2024-08-24': 1,
    '2024-08-25': 1,
    '2024-08-27': 0,
    '2024-08-28': -1,
    '2024-08-30': 1,
    '2024-08-31': -1,
    '2024-09-01': -1,
    '2024-09-03': 1,
    '2024-09-04': 1,
    '2024-09-06': 1,
    '2024-09-07': 1,
    '2024-09-08': -1,
    '2024-09-10': 1,
    '2024-09-11': 1,
    '2024-09-14': -1,
    '2024-09-16': -1,
    '2024-09-17': 1,
    '2024-09-18': 1,
    '2024-09-20': 1,
    '2024-09-21': -1,
    '2024-09-22': 1,
    '2024-09-23': -1,
    '2024-09-25': -1,
    '2024-09-26': 1,
    '2024-09-28': 1,
    '2024-09-29': -1,
    '2024-09-30': -1,
    '2024-10-01': -1,
    '2024-10-03': 1,
    '2024-10-05': 1,
    '2024-10-08': -1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Marines , 1-4 </br>Start P.伊藤 / C.田宮',
    '2024-03-30': 'vs Marines , 3-0 </br>Start P.加藤 / C.田宮',
    '2024-03-31': 'vs Marines , 2-3 </br>Start P.上原 / C.田宮',
    '2024-04-02': 'vs Eagles , 2-4 </br>Start P.山崎 / C.伏見',
    '2024-04-03': 'vs Eagles , 4-2 </br>Start P.北山 / C.田宮',
    '2024-04-05': 'vs Lions , 3-2 </br>Start P.伊藤 / C.田宮',
    '2024-04-06': 'vs Lions , 2-5 </br>Start P.加藤 / C.田宮',
    '2024-04-07': 'vs Lions , 1-11 </br>Start P.上原 / C.田宮',
    '2024-04-09': 'vs Hawks , 2-4 </br>Start P.山崎 / C.伏見',
    '2024-04-11': 'vs Hawks , 6-3 </br>Start P.北山 / C.田宮',
    '2024-04-12': 'vs Buffaloes , 0-1 </br>Start P.伊藤 / C.田宮',
    '2024-04-13': 'vs Buffaloes , 5-1 </br>Start P.加藤 / C.伏見',
    '2024-04-14': 'vs Buffaloes , 6-3 </br>Start P.根本 / C.田宮',
    '2024-04-16': 'vs Hawks , 5-1 </br>Start P.山崎 / C.伏見',
    '2024-04-17': 'vs Hawks , 4-4 </br>Start P.福島 / C.伏見',
    '2024-04-19': 'vs Marines , 4-3 </br>Start P.伊藤 / C.田宮',
    '2024-04-20': 'vs Marines , 2-0 </br>Start P.北山 / C.田宮',
    '2024-04-21': 'vs Marines , 5-0 </br>Start P.加藤 / C.田宮',
    '2024-04-23': 'vs Eagles , 3-4 </br>Start P.山崎 / C.伏見',
    '2024-04-25': 'vs Eagles , 5-1 </br>Start P.鈴木 / C.田宮',
    '2024-04-27': 'vs Buffaloes , 9-0 </br>Start P.伊藤 / C.田宮',
    '2024-04-28': 'vs Buffaloes , 4-5 </br>Start P.加藤 / C.田宮',
    '2024-04-29': 'vs Buffaloes , 1-0 </br>Start P.北山 / C.田宮',
    '2024-04-30': 'vs Lions , 1-2 </br>Start P.山崎 / C.伏見',
    '2024-05-01': 'vs Lions , 3-1 </br>Start P.福島 / C.田宮',
    '2024-05-03': 'vs Buffaloes , 0-3 </br>Start P.鈴木 / C.田宮',
    '2024-05-04': 'vs Buffaloes , 3-1 </br>Start P.加藤 / C.伏見',
    '2024-05-05': 'vs Buffaloes , 3-6 </br>Start P.伊藤 / C.田宮',
    '2024-05-06': 'vs Hawks , 9-4 </br>Start P.北山 / C.田宮',
    '2024-05-07': 'vs Hawks , 2-1 </br>Start P.山崎 / C.伏見',
    '2024-05-08': 'vs Hawks , 3-1 </br>Start P.金村 / C.田宮',
    '2024-05-10': 'vs Marines , 6-3 </br>Start P.福島 / C.田宮',
    '2024-05-11': 'vs Marines , 3-0 </br>Start P.加藤 / C.田宮',
    '2024-05-12': 'vs Marines , 6-5 </br>Start P.伊藤 / C.田宮',
    '2024-05-14': 'vs Lions , 4-1 </br>Start P.山崎 / C.伏見',
    '2024-05-15': 'vs Lions , 12-3 </br>Start P.北山 / C.田宮',
    '2024-05-17': 'vs Marines , 1-1 </br>Start P.金村 / C.田宮',
    '2024-05-18': 'vs Marines , 6-4 </br>Start P.加藤 / C.田宮',
    '2024-05-19': 'vs Marines , 4-3 </br>Start P.伊藤 / C.田宮',
    '2024-05-21': 'vs Buffaloes , 5-4 </br>Start P.山崎 / C.伏見',
    '2024-05-22': 'vs Buffaloes , 5-4 </br>Start P.福島 / C.田宮',
    '2024-05-23': 'vs Buffaloes , 3-9 </br>Start P.上原 / C.田宮',
    '2024-05-24': 'vs Eagles , 3-4 </br>Start P.金村 / C.田宮',
    '2024-05-25': 'vs Eagles , 0-5 </br>Start P.加藤 / C.伏見',
    '2024-05-26': 'vs Eagles , 3-2 </br>Start P.柳川 / C.田宮',
    '2024-05-29': 'vs Tigers , 2-8 </br>Start P.伊藤 / C.田宮',
    '2024-05-30': 'vs Tigers , 0-6 </br>Start P.山崎 / C.伏見',
    '2024-05-31': 'vs Baystars , 3-4 </br>Start P.金村 / C.田宮',
    '2024-06-01': 'vs Baystars , 3-4 </br>Start P.加藤 / C.伏見',
    '2024-06-02': 'vs Baystars , 9-2 </br>Start P.福島 / C.田宮',
    '2024-06-04': 'vs Carp , 0-5 </br>Start P.北山 / C.田宮',
    '2024-06-05': 'vs Carp , 6-0 </br>Start P.伊藤 / C.田宮',
    '2024-06-06': 'vs Carp , 3-1 </br>Start P.鈴木 / C.田宮',
    '2024-06-07': 'vs Swallows , 4-5 </br>Start P.山崎 / C.伏見',
    '2024-06-08': 'vs Swallows , 6-3 </br>Start P.金村 / C.田宮',
    '2024-06-09': 'vs Swallows , 1-0 </br>Start P.加藤 / C.田宮',
    '2024-06-11': 'vs Dragons , 0-4 </br>Start P.上原 / C.清水',
    '2024-06-12': 'vs Dragons , 7-0 </br>Start P.伊藤 / C.田宮',
    '2024-06-13': 'vs Dragons , 9-4 </br>Start P.福島 / C.田宮',
    '2024-06-14': 'vs Giants , 2-7 </br>Start P.山崎 / C.伏見',
    '2024-06-15': 'vs Giants , 0-2 </br>Start P.金村 / C.田宮',
    '2024-06-16': 'vs Giants , 3-3 </br>Start P.加藤 / C.田宮',
    '2024-06-18': 'vs Tigers , 2-1 </br>Start P.細野 / C.進藤',
    '2024-06-21': 'vs Eagles , 9-9 </br>Start P.山崎 / C.清水',
    '2024-06-22': 'vs Eagles , 5-2 </br>Start P.伊藤 / C.田宮',
    '2024-06-23': 'vs Eagles , 2-6 </br>Start P.加藤 / C.田宮',
    '2024-06-25': 'vs Lions , 1-0 </br>Start P.金村 / C.田宮',
    '2024-06-26': 'vs Lions , 2-2 </br>Start P.福島 / C.田宮',
    '2024-06-28': 'vs Hawks , 1-5 </br>Start P.山崎 / C.伏見',
    '2024-06-29': 'vs Hawks , 1-7 </br>Start P.伊藤 / C.田宮',
    '2024-06-30': 'vs Hawks , 3-10 </br>Start P.加藤 / C.伏見',
    '2024-07-02': 'vs Marines , 8-3 </br>Start P.金村 / C.田宮',
    '2024-07-03': 'vs Marines , 6-9 </br>Start P.細野 / C.伏見',
    '2024-07-04': 'vs Marines , 1-3 </br>Start P.上原 / C.清水',
    '2024-07-06': 'vs Buffaloes , 4-1 </br>Start P.福島 / C.田宮',
    '2024-07-07': 'vs Buffaloes , 6-3 </br>Start P.伊藤 / C.田宮',
    '2024-07-09': 'vs Lions , 1-4 </br>Start P.山崎 / C.伏見',
    '2024-07-10': 'vs Lions , 1-6 </br>Start P.金村 / C.田宮',
    '2024-07-12': 'vs Hawks , 4-5 </br>Start P.加藤 / C.田宮',
    '2024-07-13': 'vs Hawks , 3-2 </br>Start P.バーヘイゲン / C.伏見',
    '2024-07-14': 'vs Hawks , 3-1 </br>Start P.伊藤 / C.伏見',
    '2024-07-15': 'vs Eagles , 3-16 </br>Start P.福島 / C.田宮',
    '2024-07-16': 'vs Eagles , 5-4 </br>Start P.山崎 / C.伏見',
    '2024-07-17': 'vs Eagles , 6-2 </br>Start P.金村 / C.田宮',
    '2024-07-19': 'vs Marines , 1-2 </br>Start P.加藤 / C.田宮',
    '2024-07-20': 'vs Marines , 2-10 </br>Start P.バーヘイゲン / C.伏見',
    '2024-07-21': 'vs Marines , 6-10 </br>Start P.伊藤 / C.田宮',
    '2024-07-26': 'vs Lions , 1-1 </br>Start P.加藤 / C.田宮',
    '2024-07-27': 'vs Lions , 1-3 </br>Start P.福島 / C.伏見',
    '2024-07-28': 'vs Lions , 9-0 </br>Start P.伊藤 / C.伏見',
    '2024-07-30': 'vs Buffaloes , 3-3 </br>Start P.金村 / C.田宮',
    '2024-07-31': 'vs Buffaloes , 9-2 </br>Start P.山崎 / C.伏見',
    '2024-08-01': 'vs Buffaloes , 7-6 </br>Start P.バーヘイゲン / C.伏見',
    '2024-08-02': 'vs Hawks , 6-4 </br>Start P.加藤 / C.伏見',
    '2024-08-03': 'vs Hawks , 7-8 </br>Start P.根本 / C.伏見',
    '2024-08-04': 'vs Hawks , 3-2 </br>Start P.伊藤 / C.伏見',
    '2024-08-06': 'vs Eagles , 1-5 </br>Start P.金村 / C.田宮',
    '2024-08-07': 'vs Eagles , 0-2 </br>Start P.山崎 / C.伏見',
    '2024-08-08': 'vs Eagles , 4-5 </br>Start P.加藤 / C.田宮',
    '2024-08-10': 'vs Lions , 5-1 </br>Start P.バーヘイゲン / C.伏見',
    '2024-08-11': 'vs Lions , 8-7 </br>Start P.伊藤 / C.伏見',
    '2024-08-12': 'vs Lions , 8-7 </br>Start P.伊藤 / C.田宮',
    '2024-08-13': 'vs Marines , 0-6 </br>Start P.金村 / C.田宮',
    '2024-08-14': 'vs Marines , 4-1 </br>Start P.山崎 / C.伏見',
    '2024-08-15': 'vs Marines , 6-1 </br>Start P.加藤 / C.伏見',
    '2024-08-16': 'vs Buffaloes , 5-1 </br>Start P.北山 / C.田宮',
    '2024-08-17': 'vs Buffaloes , 3-0 </br>Start P.バーヘイゲン / C.田宮',
    '2024-08-18': 'vs Buffaloes , 5-2 </br>Start P.伊藤 / C.田宮',
    '2024-08-20': 'vs Marines , 3-5 </br>Start P.金村 / C.田宮',
    '2024-08-21': 'vs Marines , 1-7 </br>Start P.山崎 / C.伏見',
    '2024-08-22': 'vs Marines , 3-4 </br>Start P.加藤 / C.梅林',
    '2024-08-23': 'vs Hawks , 5-6 </br>Start P.福島 / C.伏見',
    '2024-08-24': 'vs Hawks , 6-1 </br>Start P.北山 / C.田宮',
    '2024-08-25': 'vs Hawks , 5-3 </br>Start P.伊藤 / C.伏見',
    '2024-08-27': 'vs Eagles , 3-3 </br>Start P.金村 / C.田宮',
    '2024-08-28': 'vs Eagles , 5-9 </br>Start P.山崎 / C.伏見',
    '2024-08-30': 'vs Lions , 2-5 </br>Start P.加藤 / C.田宮',
    '2024-08-31': 'vs Lions , 2-1 </br>Start P.バーヘイゲン / C.伏見',
    '2024-09-01': 'vs Lions , 6-5 </br>Start P.北山 / C.田宮',
    '2024-09-03': 'vs Hawks , 3-6 </br>Start P.伊藤 / C.伏見',
    '2024-09-04': 'vs Hawks , 5-8 </br>Start P.山崎 / C.伏見',
    '2024-09-06': 'vs Buffaloes , 3-2 </br>Start P.金村 / C.田宮',
    '2024-09-07': 'vs Buffaloes , 5-1 </br>Start P.加藤 / C.伏見',
    '2024-09-08': 'vs Buffaloes , 4-5 </br>Start P.北山 / C.田宮',
    '2024-09-10': 'vs Lions , 1-0 </br>Start P.伊藤 / C.伏見',
    '2024-09-11': 'vs Lions , 3-2 </br>Start P.バーヘイゲン / C.伏見',
    '2024-09-14': 'vs Eagles , 7-5 </br>Start P.加藤 / C.伏見',
    '2024-09-16': 'vs Eagles , 6-5 </br>Start P.金村 / C.田宮',
    '2024-09-17': 'vs Hawks , 2-3 </br>Start P.山崎 / C.田宮',
    '2024-09-18': 'vs Hawks , 0-3 </br>Start P.伊藤 / C.伏見',
    '2024-09-20': 'vs Eagles , 7-3 </br>Start P.バーヘイゲン / C.郡司',
    '2024-09-21': 'vs Buffaloes , 2-1 </br>Start P.北山 / C.田宮',
    '2024-09-22': 'vs Buffaloes , 2-3 </br>Start P.加藤 / C.郡司',
    '2024-09-23': 'vs Lions , 6-4 </br>Start P.山崎 / C.郡司',
    '2024-09-25': 'vs Eagles , 1-3 </br>Start P.鍵谷 / C.田宮',
    '2024-09-26': 'vs Eagles , 2-1 </br>Start P.伊藤 / C.田宮',
    '2024-09-28': 'vs Hawks , 7-6 </br>Start P.北山 / C.郡司',
    '2024-09-29': 'vs Hawks , 2-6 </br>Start P.加藤 / C.田宮',
    '2024-09-30': 'vs Lions , 8-0 </br>Start P.山崎 / C.伏見',
    '2024-10-01': 'vs Lions , 4-0 </br>Start P.バーヘイゲン / C.郡司',
    '2024-10-03': 'vs Marines , 0-3 </br>Start P.達 / C.伏見',
    '2024-10-05': 'vs Eagles , 2-3 </br>Start P.加藤 / C.田宮',
    '2024-10-08': 'vs Eagles , 2-0 </br>Start P.伊藤 / C.伏見',
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
