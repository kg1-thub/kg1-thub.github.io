var squareLength = 18;
var _colorRange = ['#ECEFF2', '#124076'];

// 2024
var datas24 = {
    '2024-03-29': -1,
    '2024-03-30': 1,
    '2024-03-31': -1,
    '2024-04-02': -1,
    '2024-04-03': 1,
    '2024-04-04': -1,
    '2024-04-05': 1,
    '2024-04-06': -1,
    '2024-04-07': 1,
    '2024-04-09': 1,
    '2024-04-10': 1,
    '2024-04-12': -1,
    '2024-04-13': 0,
    '2024-04-14': 1,
    '2024-04-16': 1,
    '2024-04-17': 1,
    '2024-04-19': -1,
    '2024-04-20': -1,
    '2024-04-21': -1,
    '2024-04-23': -1,
    '2024-04-24': -1,
    '2024-04-25': -1,
    '2024-04-27': -1,
    '2024-04-28': 1,
    '2024-04-29': -1,
    '2024-04-30': 1,
    '2024-05-01': 1,
    '2024-05-03': -1,
    '2024-05-04': 1,
    '2024-05-05': 1,
    '2024-05-06': 1,
    '2024-05-07': 1,
    '2024-05-10': -1,
    '2024-05-11': -1,
    '2024-05-12': -1,
    '2024-05-14': 1,
    '2024-05-15': 0,
    '2024-05-17': 0,
    '2024-05-18': 1,
    '2024-05-19': 1,
    '2024-05-21': 1,
    '2024-05-22': 1,
    '2024-05-24': 1,
    '2024-05-25': 1,
    '2024-05-26': 1,
    '2024-05-28': 1,
    '2024-05-29': 0,
    '2024-05-30': 0,
    '2024-05-31': 1,
    '2024-06-01': 1,
    '2024-06-02': -1,
    '2024-06-04': -1,
    '2024-06-05': 1,
    '2024-06-06': -1,
    '2024-06-07': -1,
    '2024-06-08': 1,
    '2024-06-09': -1,
    '2024-06-11': -1,
    '2024-06-12': -1,
    '2024-06-13': -1,
    '2024-06-14': -1,
    '2024-06-15': 1,
    '2024-06-16': 1,
    '2024-06-21': -1,
    '2024-06-22': -1,
    '2024-06-23': 0,
    '2024-06-25': 1,
    '2024-06-26': 1,
    '2024-06-28': 1,
    '2024-06-29': -1,
    '2024-06-30': 1,
    '2024-07-02': -1,
    '2024-07-03': 1,
    '2024-07-04': 1,
    '2024-07-05': 1,
    '2024-07-06': 1,
    '2024-07-07': 1,
    '2024-07-09': -1,
    '2024-07-10': 1,
    '2024-07-12': 1,
    '2024-07-13': 1,
    '2024-07-14': -1,
    '2024-07-15': 1,
    '2024-07-16': -1,
    '2024-07-17': -1,
    '2024-07-19': -1,
    '2024-07-20': -1,
    '2024-07-21': -1,
    '2024-07-26': 1,
    '2024-07-27': 1,
    '2024-07-28': -1,
    '2024-07-30': 1,
    '2024-07-31': 1,
    '2024-08-01': 1,
    '2024-08-02': 1,
    '2024-08-03': -1,
    '2024-08-04': 1,
    '2024-08-06': -1,
    '2024-08-07': 1,
    '2024-08-08': -1,
    '2024-08-10': 1,
    '2024-08-11': 1,
    '2024-08-12': -1,
    '2024-08-13': 1,
    '2024-08-14': -1,
    '2024-08-15': -1,
    '2024-08-16': -1,
    '2024-08-17': 1,
    '2024-08-18': -1,
    '2024-08-20': -1,
    '2024-08-21': -1,
    '2024-08-22': -1,
    '2024-08-23': -1,
    '2024-08-24': 1,
    '2024-08-25': -1,
    '2024-08-27': 1,
    '2024-08-28': 1,
    '2024-08-29': -1,
    '2024-08-30': 1,
    '2024-08-31': -1,
    '2024-09-01': -1,
    '2024-09-05': 1,
    '2024-09-06': -1,
    '2024-09-07': -1,
    '2024-09-08': 1,
    '2024-09-10': 1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Fighters , 1-4 </br>Start P.小島 / C.佐藤',
    '2024-03-30': 'vs Fighters , 3-0 </br>Start P.種市 / C.田村',
    '2024-03-31': 'vs Fighters , 2-3 </br>Start P.佐々木 / C.佐藤',
    '2024-04-02': 'vs Hawks , 2-0 </br>Start P.西野 / C.田村',
    '2024-04-03': 'vs Hawks , 2-4 </br>Start P.メルセデス / C.田村',
    '2024-04-04': 'vs Hawks , 8-1 </br>Start P.美馬 / C.佐藤',
    '2024-04-05': 'vs Buffaloes , 1-0 </br>Start P.小島 / C.佐藤',
    '2024-04-06': 'vs Buffaloes , 1-9 </br>Start P.種市 / C.田村',
    '2024-04-07': 'vs Buffaloes , 5-2 </br>Start P.佐々木 / C.佐藤',
    '2024-04-09': 'vs Lions , 0-5 </br>Start P.西野 / C.田村',
    '2024-04-10': 'vs Lions , 2-3 </br>Start P.メルセデス / C.田村',
    '2024-04-12': 'vs Eagles , 5-2 </br>Start P.小島 / C.佐藤',
    '2024-04-13': 'vs Eagles , 2-2 </br>Start P.種市 / C.田村',
    '2024-04-14': 'vs Eagles , 2-9 </br>Start P.佐々木 / C.佐藤',
    '2024-04-16': 'vs Lions , 4-3 </br>Start P.唐川 / C.佐藤',
    '2024-04-17': 'vs Lions , 2-0 </br>Start P.西野 / C.田村',
    '2024-04-19': 'vs Fighters , 4-3 </br>Start P.メルセデス / C.田村',
    '2024-04-20': 'vs Fighters , 2-0 </br>Start P.小島 / C.佐藤',
    '2024-04-21': 'vs Fighters , 5-0 </br>Start P.種市 / C.佐藤',
    '2024-04-23': 'vs Hawks , 2-4 </br>Start P.佐々木 / C.佐藤',
    '2024-04-24': 'vs Hawks , 2-4 </br>Start P.佐々木 / C.佐藤',
    '2024-04-25': 'vs Hawks , 0-6 </br>Start P.西野 / C.田村',
    '2024-04-27': 'vs Eagles , 1-4 </br>Start P.メルセデス / C.佐藤',
    '2024-04-28': 'vs Eagles , 10-1 </br>Start P.小島 / C.佐藤',
    '2024-04-29': 'vs Eagles , 6-8 </br>Start P.種市 / C.田村',
    '2024-04-30': 'vs Buffaloes , 0-1 </br>Start P.佐々木 / C.佐藤',
    '2024-05-01': 'vs Buffaloes , 3-6 </br>Start P.ダイクストラ / C.佐藤',
    '2024-05-03': 'vs Eagles , 12-1 </br>Start P.西野 / C.田村',
    '2024-05-04': 'vs Eagles , 0-2 </br>Start P.メルセデス / C.佐藤',
    '2024-05-05': 'vs Eagles , 1-4 </br>Start P.小島 / C.佐藤',
    '2024-05-06': 'vs Lions , 8-1 </br>Start P.種市 / C.田村',
    '2024-05-07': 'vs Lions , 6-1 </br>Start P.ダイクストラ / C.佐藤',
    '2024-05-10': 'vs Fighters , 6-3 </br>Start P.佐々木 / C.佐藤',
    '2024-05-11': 'vs Fighters , 3-0 </br>Start P.メルセデス / C.佐藤',
    '2024-05-12': 'vs Fighters , 6-5 </br>Start P.小島 / C.佐藤',
    '2024-05-14': 'vs Buffaloes , 1-4 </br>Start P.西野 / C.田村',
    '2024-05-15': 'vs Buffaloes , 1-1 </br>Start P.種市 / C.田村',
    '2024-05-17': 'vs Fighters , 1-1 </br>Start P.佐々木 / C.佐藤',
    '2024-05-18': 'vs Fighters , 6-4 </br>Start P.メルセデス / C.田村',
    '2024-05-19': 'vs Fighters , 4-3 </br>Start P.小島 / C.佐藤',
    '2024-05-21': 'vs Lions , 3-5 </br>Start P.西野 / C.佐藤',
    '2024-05-22': 'vs Lions , 1-2 </br>Start P.種市 / C.佐藤',
    '2024-05-24': 'vs Lions , 1-2 </br>Start P.種市 / C.佐藤',
    '2024-05-25': 'vs Hawks , 2-0 </br>Start P.メルセデス / C.佐藤',
    '2024-05-26': 'vs Hawks , 7-1 </br>Start P.岩下 / C.佐藤',
    '2024-05-28': 'vs Swallows , 3-5 </br>Start P.小島 / C.佐藤',
    '2024-05-29': 'vs Swallows , 3-3 </br>Start P.種市 / C.佐藤',
    '2024-05-30': 'vs Swallows , 3-3 </br>Start P.西野 / C.佐藤',
    '2024-05-31': 'vs Tigers , 5-4 </br>Start P.美馬 / C.佐藤',
    '2024-06-01': 'vs Tigers , 3-2 </br>Start P.田中 / C.佐藤',
    '2024-06-02': 'vs Tigers , 0-1 </br>Start P.メルセデス / C.佐藤',
    '2024-06-04': 'vs Giants , 18-2 </br>Start P.小島 / C.佐藤',
    '2024-06-05': 'vs Giants , 3-4 </br>Start P.種市 / C.佐藤',
    '2024-06-06': 'vs Giants , 7-4 </br>Start P.西野 / C.田村',
    '2024-06-07': 'vs Carp , 4-0 </br>Start P.美馬 / C.佐藤',
    '2024-06-08': 'vs Carp , 1-3 </br>Start P.佐々木 / C.佐藤',
    '2024-06-09': 'vs Carp , 4-1 </br>Start P.メルセデス / C.佐藤',
    '2024-06-11': 'vs Baystars , 0-4 </br>Start P.小島 / C.佐藤',
    '2024-06-12': 'vs Baystars , 3-13 </br>Start P.中森 / C.田村',
    '2024-06-13': 'vs Baystars , 1-3 </br>Start P.西野 / C.田村',
    '2024-06-14': 'vs Dragons , 3-4 </br>Start P.種市 / C.佐藤',
    '2024-06-15': 'vs Dragons , 10-0 </br>Start P.横山 / C.佐藤',
    '2024-06-16': 'vs Dragons , 10-0 </br>Start P.横山 / C.佐藤',
    '2024-06-21': 'vs Hawks , 9-4 </br>Start P.小島 / C.佐藤',
    '2024-06-22': 'vs Hawks , 3-1 </br>Start P.種市 / C.佐藤',
    '2024-06-23': 'vs Hawks , 6-6 </br>Start P.メルセデス / C.佐藤',
    '2024-06-25': 'vs Eagles , 10-2 </br>Start P.西野 / C.田村',
    '2024-06-26': 'vs Eagles , 4-1 </br>Start P.中森 / C.佐藤',
    '2024-06-28': 'vs Buffaloes , 4-3 </br>Start P.小島 / C.佐藤',
    '2024-06-29': 'vs Buffaloes , 3-5 </br>Start P.種市 / C.佐藤',
    '2024-06-30': 'vs Buffaloes , 7-0 </br>Start P.石川 / C.田村',
    '2024-07-02': 'vs Fighters , 8-3 </br>Start P.メルセデス / C.佐藤',
    '2024-07-03': 'vs Fighters , 6-9 </br>Start P.田中 / C.佐藤',
    '2024-07-04': 'vs Fighters , 1-3 </br>Start P.西野 / C.田村',
    '2024-07-05': 'vs Lions , 3-6 </br>Start P.小島 / C.佐藤',
    '2024-07-06': 'vs Lions , 3-4 </br>Start P.種市 / C.佐藤',
    '2024-07-07': 'vs Lions , 2-9 </br>Start P.中森 / C.佐藤',
    '2024-07-09': 'vs Eagles , 2-4 </br>Start P.メルセデス / C.佐藤',
    '2024-07-10': 'vs Eagles , 18-5 </br>Start P.石川 / C.田村',
    '2024-07-12': 'vs Buffaloes , 1-0 </br>Start P.小島 / C.佐藤',
    '2024-07-13': 'vs Buffaloes , 6-0 </br>Start P.種市 / C.佐藤',
    '2024-07-14': 'vs Buffaloes , 1-5 </br>Start P.田中 / C.佐藤',
    '2024-07-15': 'vs Hawks , 5-8 </br>Start P.西野 / C.田村',
    '2024-07-16': 'vs Hawks , 4-1 </br>Start P.メルセデス / C.佐藤',
    '2024-07-17': 'vs Hawks , 6-4 </br>Start P.高野 / C.佐藤',
    '2024-07-19': 'vs Fighters , 1-2 </br>Start P.小島 / C.佐藤',
    '2024-07-20': 'vs Fighters , 2-10 </br>Start P.種市 / C.佐藤',
    '2024-07-21': 'vs Fighters , 6-10 </br>Start P.石川 / C.田村',
    '2024-07-26': 'vs Eagles , 1-6 </br>Start P.西野 / C.田村',
    '2024-07-27': 'vs Eagles , 3-5 </br>Start P.唐川 / C.佐藤',
    '2024-07-28': 'vs Eagles , 8-7 </br>Start P.種市 / C.佐藤',
    '2024-07-30': 'vs Lions , 7-6 </br>Start P.小島 / C.佐藤',
    '2024-07-31': 'vs Lions , 7-6 </br>Start P.小島 / C.佐藤',
    '2024-08-01': 'vs Lions , 4-1 </br>Start P.佐々木 / C.佐藤',
    '2024-08-02': 'vs Buffaloes , 2-3 </br>Start P.石川 / C.田村',
    '2024-08-03': 'vs Buffaloes , 5-1 </br>Start P.西野 / C.田村',
    '2024-08-04': 'vs Buffaloes , 0-3 </br>Start P.種市 / C.佐藤',
    '2024-08-06': 'vs Hawks , 4-6 </br>Start P.小島 / C.佐藤',
    '2024-08-07': 'vs Hawks , 6-2 </br>Start P.メルセデス / C.佐藤',
    '2024-08-08': 'vs Hawks , 3-6 </br>Start P.佐々木 / C.佐藤',
    '2024-08-10': 'vs Buffaloes , 3-1 </br>Start P.唐川 / C.佐藤',
    '2024-08-11': 'vs Buffaloes , 6-1 </br>Start P.種市 / C.佐藤',
    '2024-08-12': 'vs Buffaloes , 0-4 </br>Start P.西野 / C.田村',
    '2024-08-13': 'vs Fighters , 0-6 </br>Start P.小島 / C.佐藤',
    '2024-08-14': 'vs Fighters , 4-1 </br>Start P.メルセデス / C.佐藤',
    '2024-08-15': 'vs Fighters , 6-1 </br>Start P.佐々木 / C.佐藤',
    '2024-08-16': 'vs Hawks , 4-0 </br>Start P.石川 / C.田村',
    '2024-08-17': 'vs Hawks , 2-5 </br>Start P.カイケル / C.田村',
    '2024-08-18': 'vs Hawks , 2-1 </br>Start P.種市 / C.佐藤',
    '2024-08-20': 'vs Fighters , 3-5 </br>Start P.小島 / C.田村',
    '2024-08-21': 'vs Fighters , 1-7 </br>Start P.メルセデス / C.田村',
    '2024-08-22': 'vs Fighters , 3-4 </br>Start P.佐々木 / C.松川',
    '2024-08-23': 'vs Buffaloes , 1-0 </br>Start P.カイケル / C.田村',
    '2024-08-24': 'vs Buffaloes , 0-1 </br>Start P.西野 / C.田村',
    '2024-08-25': 'vs Buffaloes , 2-0 </br>Start P.種市 / C.佐藤',
    '2024-08-27': 'vs Lions , 2-0 </br>Start P.小島 / C.佐藤',
    '2024-08-28': 'vs Lions , 4-3 </br>Start P.唐川 / C.佐藤',
    '2024-08-29': 'vs Lions , 0-8 </br>Start P.カイケル / C.田村',
    '2024-08-30': 'vs Hawks , 6-2 </br>Start P.佐々木 / C.佐藤',
    '2024-08-31': 'vs Hawks , 1-4 </br>Start P.メルセデス / C.佐藤',
    '2024-09-01': 'vs Hawks , 2-10 </br>Start P.種市 / C.佐藤',
    '2024-09-05': 'vs Eagles , 3-1 </br>Start P.カイケル / C.田村',
    '2024-09-06': 'vs Eagles , 1-2 </br>Start P.西野 / C.田村',
    '2024-09-07': 'vs Eagles , 1-4 </br>Start P.小島 / C.佐藤',
    '2024-09-08': 'vs Eagles , 9-5 </br>Start P.佐々木 / C.佐藤',
    '2024-09-10': 'vs Buffaloes , 1-4 </br>Start P.唐川 / C.佐藤',
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
