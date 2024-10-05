var squareLength = 18;
var _colorRange = ['#ECEFF2', '#6F3BC8'];

// 2024
var datas24 = {
    '2024-03-29': -1,
    '2024-03-30': 0,
    '2024-03-31': -1,
    '2024-04-02': 1,
    '2024-04-03': 1,
    '2024-04-04': -1,
    '2024-04-05': 1,
    '2024-04-06': 1,
    '2024-04-07': 1,
    '2024-04-09': 1,
    '2024-04-10': 1,
    '2024-04-12': 0,
    '2024-04-13': 1,
    '2024-04-14': -1,
    '2024-04-16': 1,
    '2024-04-17': 1,
    '2024-04-18': -1,
    '2024-04-19': -1,
    '2024-04-20': -1,
    '2024-04-21': -1,
    '2024-04-23': -1,
    '2024-04-24': 1,
    '2024-04-25': -1,
    '2024-04-27': -1,
    '2024-04-28': 0,
    '2024-04-29': 1,
    '2024-04-30': -1,
    '2024-05-01': -1,
    '2024-05-03': -1,
    '2024-05-04': 0,
    '2024-05-05': 1,
    '2024-05-06': 1,
    '2024-05-07': -1,
    '2024-05-08': -1,
    '2024-05-10': -1,
    '2024-05-11': 1,
    '2024-05-14': 1,
    '2024-05-15': -1,
    '2024-05-16': -1,
    '2024-05-17': -1,
    '2024-05-18': -1,
    '2024-05-19': 1,
    '2024-05-21': 0,
    '2024-05-22': 1,
    '2024-05-24': -1,
    '2024-05-25': 1,
    '2024-05-26': 1,
    '2024-05-28': 1,
    '2024-05-29': -1,
    '2024-05-30': -1,
    '2024-05-31': -1,
    '2024-06-01': 1,
    '2024-06-02': 1,
    '2024-06-04': -1,
    '2024-06-05': -1,
    '2024-06-06': 1,
    '2024-06-07': -1,
    '2024-06-08': -1,
    '2024-06-09': 1,
    '2024-06-11': 1,
    '2024-06-12': -1,
    '2024-06-13': -1,
    '2024-06-14': 1,
    '2024-06-15': -1,
    '2024-06-16': -1,
    '2024-06-21': 1,
    '2024-06-22': -1,
    '2024-06-23': 1,
    '2024-06-25': 1,
    '2024-06-26': 0,
    '2024-06-27': -1,
    '2024-06-28': -1,
    '2024-06-29': -1,
    '2024-06-30': 1,
    '2024-07-02': 1,
    '2024-07-03': -1,
    '2024-07-05': 1,
    '2024-07-06': 1,
    '2024-07-07': 1,
    '2024-07-09': -1,
    '2024-07-10': -1,
    '2024-07-11': -1,
    '2024-07-12': 1,
    '2024-07-13': 1,
    '2024-07-14': -1,
    '2024-07-15': -1,
    '2024-07-16': -1,
    '2024-07-19': 1,
    '2024-07-20': -1,
    '2024-07-21': -1,
    '2024-07-26': -1,
    '2024-07-27': -1,
    '2024-07-28': -1,
    '2024-07-30': 1,
    '2024-07-31': 1,
    '2024-08-01': 1,
    '2024-08-02': -1,
    '2024-08-03': -1,
    '2024-08-04': -1,
    '2024-08-06': 1,
    '2024-08-07': 0,
    '2024-08-08': -1,
    '2024-08-09': 1,
    '2024-08-10': -1,
    '2024-08-11': -1,
    '2024-08-12': -1,
    '2024-08-13': 1,
    '2024-08-14': -1,
    '2024-08-16': 1,
    '2024-08-17': 0,
    '2024-08-18': 1,
    '2024-08-20': -1,
    '2024-08-21': -1,
    '2024-08-22': 1,
    '2024-08-23': 1,
    '2024-08-24': -1,
    '2024-08-25': -1,
    '2024-08-27': 1,
    '2024-08-28': -1,
    '2024-08-29': 1,
    '2024-09-03': -1,
    '2024-09-04': -1,
    '2024-09-05': -1,
    '2024-09-06': 1,
    '2024-09-07': -1,
    '2024-09-08': 1,
    '2024-09-10': 1,
    '2024-09-11': -1,
    '2024-09-12': -1,
    '2024-09-13': -1,
    '2024-09-14': 1,
    '2024-09-15': -1,
    '2024-09-16': -1,
    '2024-09-18': -1,
    '2024-09-20': 1,
    '2024-09-21': 1,
    '2024-09-22': 1,
    '2024-09-23': 1,
    '2024-09-27': -1,
    '2024-09-29': 1,
    '2024-10-04': -1,
    '2024-10-05': 1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Swallows , 7-4 </br>Start P.柳 / C.木下',
    '2024-03-30': 'vs Swallows , 1-1 </br>Start P.涌井 / C.木下',
    '2024-03-31': 'vs Swallows , 5-2 </br>Start P.メヒア / C.宇佐見',
    '2024-04-02': 'vs Giants , 4-3 </br>Start P.小笠原 / C.木下',
    '2024-04-03': 'vs Giants , 5-2 </br>Start P.大野 / C.木下',
    '2024-04-04': 'vs Giants , 0-2 </br>Start P.梅津 / C.木下',
    '2024-04-05': 'vs Carp , 0-1 </br>Start P.柳 / C.加藤匠',
    '2024-04-06': 'vs Carp , 0-4 </br>Start P.涌井 / C.加藤匠',
    '2024-04-07': 'vs Carp , 0-1 </br>Start P.メヒア / C.宇佐見',
    '2024-04-09': 'vs Baystars , 1-3 </br>Start P.小笠原 / C.木下',
    '2024-04-10': 'vs Baystars , 1-6 </br>Start P.松葉 / C.木下',
    '2024-04-12': 'vs Tigers , 2-2 </br>Start P.柳 / C.加藤匠',
    '2024-04-13': 'vs Tigers , 5-2 </br>Start P.メヒア / C.宇佐見',
    '2024-04-14': 'vs Tigers , 1-2 </br>Start P.梅津 / C.木下',
    '2024-04-16': 'vs Swallows , 3-2 </br>Start P.小笠原 / C.木下',
    '2024-04-17': 'vs Swallows , 2-0 </br>Start P.涌井 / C.加藤匠',
    '2024-04-18': 'vs Swallows , 5-11 </br>Start P.柳 / C.加藤匠',
    '2024-04-19': 'vs Tigers , 7-0 </br>Start P.メヒア / C.宇佐見',
    '2024-04-20': 'vs Tigers , 15-2 </br>Start P.大野 / C.加藤匠',
    '2024-04-21': 'vs Tigers , 3-0 </br>Start P.松葉 / C.木下',
    '2024-04-23': 'vs Giants , 2-0 </br>Start P.小笠原 / C.木下',
    '2024-04-24': 'vs Giants , 2-3 </br>Start P.涌井 / C.木下',
    '2024-04-25': 'vs Giants , 3-2 </br>Start P.柳 / C.加藤匠',
    '2024-04-27': 'vs Carp , 4-6 </br>Start P.梅津 / C.木下',
    '2024-04-28': 'vs Carp , 0-0 </br>Start P.高橋 / C.木下',
    '2024-04-29': 'vs Baystars , 11-1 </br>Start P.松葉 / C.木下',
    '2024-04-30': 'vs Baystars , 1-2 </br>Start P.小笠原 / C.木下',
    '2024-05-01': 'vs Baystars , 1-12 </br>Start P.涌井 / C.木下',
    '2024-05-03': 'vs Swallows , 5-3 </br>Start P.メヒア / C.宇佐見',
    '2024-05-04': 'vs Swallows , 7-7 </br>Start P.柳 / C.木下',
    '2024-05-05': 'vs Swallows , 3-6 </br>Start P.高橋 / C.宇佐見',
    '2024-05-06': 'vs Giants , 2-0 </br>Start P.梅津 / C.宇佐見',
    '2024-05-07': 'vs Giants , 0-2 </br>Start P.涌井 / C.木下',
    '2024-05-08': 'vs Giants , 1-4 </br>Start P.小笠原 / C.宇佐見',
    '2024-05-10': 'vs Carp , 6-3 </br>Start P.松葉 / C.木下',
    '2024-05-11': 'vs Carp , 0-4 </br>Start P.柳 / C.加藤匠',
    '2024-05-14': 'vs Tigers , 4-2 </br>Start P.高橋 / C.加藤匠',
    '2024-05-15': 'vs Tigers , 0-1 </br>Start P.小笠原 / C.加藤匠',
    '2024-05-16': 'vs Tigers , 4-9 </br>Start P.梅津 / C.木下',
    '2024-05-17': 'vs Baystars , 2-1 </br>Start P.涌井 / C.木下',
    '2024-05-18': 'vs Baystars , 3-2 </br>Start P.松葉 / C.石橋',
    '2024-05-19': 'vs Baystars , 2-3 </br>Start P.柳 / C.加藤匠',
    '2024-05-21': 'vs Giants , 1-1 </br>Start P.高橋 / C.木下',
    '2024-05-22': 'vs Giants , 2-4 </br>Start P.小笠原 / C.加藤匠',
    '2024-05-24': 'vs Swallows , 2-5 </br>Start P.涌井 / C.木下',
    '2024-05-25': 'vs Swallows , 1-0 </br>Start P.メヒア / C.木下',
    '2024-05-26': 'vs Swallows , 5-0 </br>Start P.仲地 / C.石橋',
    '2024-05-28': 'vs Lions , 3-0 </br>Start P.高橋 / C.木下',
    '2024-05-29': 'vs Lions , 0-1 </br>Start P.小笠原 / C.木下',
    '2024-05-30': 'vs Lions , 0-3 </br>Start P.柳 / C.加藤匠',
    '2024-05-31': 'vs Buffaloes , 2-1 </br>Start P.涌井 / C.木下',
    '2024-06-01': 'vs Buffaloes , 1-2 </br>Start P.メヒア / C.石橋',
    '2024-06-02': 'vs Buffaloes , 1-2 </br>Start P.梅津 / C.石橋',
    '2024-06-04': 'vs Hawks , 2-3 </br>Start P.高橋 / C.加藤匠',
    '2024-06-05': 'vs Hawks , 1-5 </br>Start P.小笠原 / C.宇佐見',
    '2024-06-06': 'vs Hawks , 3-0 </br>Start P.柳 / C.宇佐見',
    '2024-06-07': 'vs Eagles , 0-2 </br>Start P.涌井 / C.加藤匠',
    '2024-06-08': 'vs Eagles , 2-7 </br>Start P.メヒア / C.宇佐見',
    '2024-06-09': 'vs Eagles , 3-1 </br>Start P.松葉 / C.宇佐見',
    '2024-06-11': 'vs Fighters , 0-4 </br>Start P.高橋 / C.宇佐見',
    '2024-06-12': 'vs Fighters , 7-0 </br>Start P.小笠原 / C.加藤匠',
    '2024-06-13': 'vs Fighters , 9-4 </br>Start P.梅津 / C.宇佐見',
    '2024-06-14': 'vs Marines , 3-4 </br>Start P.涌井 / C.宇佐見',
    '2024-06-15': 'vs Marines , 10-0 </br>Start P.メヒア / C.宇佐見',
    '2024-06-16': 'vs Marines , 10-0 </br>Start P.メヒア / C.宇佐見',
    '2024-06-21': 'vs Carp , 1-0 </br>Start P.高橋 / C.宇佐見',
    '2024-06-22': 'vs Carp , 1-3 </br>Start P.メヒア / C.宇佐見',
    '2024-06-23': 'vs Carp , 2-1 </br>Start P.松葉 / C.宇佐見',
    '2024-06-25': 'vs Tigers , 0-1 </br>Start P.小笠原 / C.加藤匠',
    '2024-06-26': 'vs Tigers , 1-1 </br>Start P.涌井 / C.宇佐見',
    '2024-06-27': 'vs Tigers , 8-1 </br>Start P.梅津 / C.宇佐見',
    '2024-06-28': 'vs Baystars , 1-5 </br>Start P.高橋 / C.木下',
    '2024-06-29': 'vs Baystars , 1-5 </br>Start P.大野 / C.木下',
    '2024-06-30': 'vs Baystars , 3-0 </br>Start P.松葉 / C.木下',
    '2024-07-02': 'vs Giants , 1-2 </br>Start P.小笠原 / C.木下',
    '2024-07-03': 'vs Giants , 6-1 </br>Start P.涌井 / C.木下',
    '2024-07-05': 'vs Carp , 2-0 </br>Start P.高橋 / C.加藤匠',
    '2024-07-06': 'vs Carp , 2-1 </br>Start P.梅津 / C.加藤匠',
    '2024-07-07': 'vs Carp , 2-1 </br>Start P.松葉 / C.木下',
    '2024-07-09': 'vs Baystars , 6-5 </br>Start P.小笠原 / C.加藤匠',
    '2024-07-10': 'vs Baystars , 3-0 </br>Start P.松木平 / C.石橋',
    '2024-07-11': 'vs Baystars , 3-2 </br>Start P.メヒア / C.石橋',
    '2024-07-12': 'vs Tigers , 3-0 </br>Start P.高橋 / C.加藤匠',
    '2024-07-13': 'vs Tigers , 10-8 </br>Start P.涌井 / C.加藤匠',
    '2024-07-14': 'vs Tigers , 2-6 </br>Start P.松葉 / C.木下',
    '2024-07-15': 'vs Swallows , 4-1 </br>Start P.梅津 / C.加藤匠',
    '2024-07-16': 'vs Swallows , 4-3 </br>Start P.小笠原 / C.木下',
    '2024-07-19': 'vs Giants , 1-0 </br>Start P.高橋 / C.加藤匠',
    '2024-07-20': 'vs Giants , 3-4 </br>Start P.メヒア / C.加藤匠',
    '2024-07-21': 'vs Giants , 1-4 </br>Start P.松葉 / C.木下',
    '2024-07-26': 'vs Tigers , 5-1 </br>Start P.小笠原 / C.加藤匠',
    '2024-07-27': 'vs Tigers , 7-3 </br>Start P.メヒア / C.加藤匠',
    '2024-07-28': 'vs Tigers , 4-3 </br>Start P.松葉 / C.木下',
    '2024-07-30': 'vs Swallows , 6-0 </br>Start P.高橋 / C.加藤匠',
    '2024-07-31': 'vs Swallows , 1-0 </br>Start P.松木平 / C.加藤匠',
    '2024-08-01': 'vs Swallows , 3-2 </br>Start P.梅津 / C.加藤匠',
    '2024-08-02': 'vs Carp , 1-0 </br>Start P.小笠原 / C.加藤匠',
    '2024-08-03': 'vs Carp , 4-1 </br>Start P.大野 / C.木下',
    '2024-08-04': 'vs Carp , 6-4 </br>Start P.根尾 / C.石橋',
    '2024-08-06': 'vs Baystars , 6-2 </br>Start P.高橋 / C.加藤匠',
    '2024-08-07': 'vs Baystars , 0-0 </br>Start P.松木平 / C.木下',
    '2024-08-08': 'vs Baystars , 2-4 </br>Start P.松葉 / C.木下',
    '2024-08-09': 'vs Giants , 9-2 </br>Start P.小笠原 / C.木下',
    '2024-08-10': 'vs Giants , 0-2 </br>Start P.メヒア / C.宇佐見',
    '2024-08-11': 'vs Giants , 1-3 </br>Start P.大野 / C.木下',
    '2024-08-12': 'vs Swallows , 5-4 </br>Start P.梅津 / C.木下',
    '2024-08-13': 'vs Swallows , 4-5 </br>Start P.高橋 / C.木下',
    '2024-08-14': 'vs Swallows , 7-6 </br>Start P.松木平 / C.木下',
    '2024-08-16': 'vs Tigers , 2-1 </br>Start P.小笠原 / C.木下',
    '2024-08-17': 'vs Tigers , 5-5 </br>Start P.メヒア / C.宇佐見',
    '2024-08-18': 'vs Tigers , 8-4 </br>Start P.大野 / C.木下',
    '2024-08-20': 'vs Baystars , 4-2 </br>Start P.高橋 / C.木下',
    '2024-08-21': 'vs Baystars , 7-1 </br>Start P.松木平 / C.木下',
    '2024-08-22': 'vs Baystars , 8-9 </br>Start P.松葉 / C.宇佐見',
    '2024-08-23': 'vs Giants , 2-8 </br>Start P.福谷 / C.宇佐見',
    '2024-08-24': 'vs Giants , 6-2 </br>Start P.柳 / C.宇佐見',
    '2024-08-25': 'vs Giants , 2-0 </br>Start P.大野 / C.木下',
    '2024-08-27': 'vs Carp , 2-1 </br>Start P.高橋 / C.加藤匠',
    '2024-08-28': 'vs Carp , 1-2 </br>Start P.小笠原 / C.加藤匠',
    '2024-08-29': 'vs Carp , 5-1 </br>Start P.松葉 / C.宇佐見',
    '2024-09-03': 'vs Tigers , 4-1 </br>Start P.高橋 / C.加藤匠',
    '2024-09-04': 'vs Tigers , 9-4 </br>Start P.小笠原 / C.宇佐見',
    '2024-09-05': 'vs Tigers , 2-1 </br>Start P.大野 / C.木下',
    '2024-09-06': 'vs Carp , 0-3 </br>Start P.松葉 / C.宇佐見',
    '2024-09-07': 'vs Carp , 2-1 </br>Start P.福谷 / C.宇佐見',
    '2024-09-08': 'vs Carp , 3-4 </br>Start P.柳 / C.木下',
    '2024-09-10': 'vs Swallows , 3-1 </br>Start P.高橋 / C.加藤匠',
    '2024-09-11': 'vs Swallows , 1-8 </br>Start P.小笠原 / C.木下',
    '2024-09-12': 'vs Swallows , 4-9 </br>Start P.大野 / C.木下',
    '2024-09-13': 'vs Baystars , 5-2 </br>Start P.松葉 / C.宇佐見',
    '2024-09-14': 'vs Baystars , 2-4 </br>Start P.福谷 / C.宇佐見',
    '2024-09-15': 'vs Giants , 6-3 </br>Start P.涌井 / C.木下',
    '2024-09-16': 'vs Giants , 7-1 </br>Start P.松木平 / C.宇佐見',
    '2024-09-18': 'vs Tigers , 3-8 </br>Start P.高橋 / C.加藤匠',
    '2024-09-20': 'vs Swallows , 6-7 </br>Start P.小笠原 / C.木下',
    '2024-09-21': 'vs Swallows , 6-7 </br>Start P.福谷 / C.宇佐見',
    '2024-09-22': 'vs Carp , 2-1 </br>Start P.涌井 / C.宇佐見',
    '2024-09-23': 'vs Carp , 1-0 </br>Start P.松木平 / C.宇佐見',
    '2024-09-27': 'vs Giants , 3-1 </br>Start P.梅津 / C.宇佐見',
    '2024-09-29': 'vs Carp , 3-4 </br>Start P.高橋 / C.加藤匠',
    '2024-10-04': 'vs Baystars , 1-3 </br>Start P.梅津 / C.宇佐見',
    '2024-10-05': 'vs Baystars , 4-3 </br>Start P.小笠原 / C.木下',
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
