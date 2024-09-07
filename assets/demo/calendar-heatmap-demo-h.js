var squareLength = 18;
var _colorRange = ['#ECEFF2', '#fcc800'];

// 2024
var datas24 = {
    '2024-03-29': 1,
    '2024-03-30': -1,
    '2024-03-31': 1,
    '2024-04-02': 1,
    '2024-04-03': -1,
    '2024-04-04': 1,
    '2024-04-05': 1,
    '2024-04-06': 1,
    '2024-04-07': -1,
    '2024-04-09': -1,
    '2024-04-11': 1,
    '2024-04-12': 1,
    '2024-04-13': 1,
    '2024-04-14': 1,
    '2024-04-16': -1,
    '2024-04-17': 0,
    '2024-04-19': 1,
    '2024-04-20': 0,
    '2024-04-21': -1,
    '2024-04-23': 1,
    '2024-04-24': 1,
    '2024-04-25': 1,
    '2024-04-27': 1,
    '2024-04-28': 1,
    '2024-04-29': 1,
    '2024-04-30': 1,
    '2024-05-01': -1,
    '2024-05-03': -1,
    '2024-05-04': -1,
    '2024-05-05': 1,
    '2024-05-06': 1,
    '2024-05-07': 1,
    '2024-05-08': 1,
    '2024-05-11': 1,
    '2024-05-14': -1,
    '2024-05-15': 1,
    '2024-05-17': 1,
    '2024-05-18': 1,
    '2024-05-19': 1,
    '2024-05-21': 1,
    '2024-05-22': 1,
    '2024-05-24': -1,
    '2024-05-25': -1,
    '2024-05-26': -1,
    '2024-05-28': 1,
    '2024-05-29': -1,
    '2024-05-30': -1,
    '2024-05-31': 1,
    '2024-06-01': 1,
    '2024-06-02': 1,
    '2024-06-04': 1,
    '2024-06-05': 1,
    '2024-06-06': -1,
    '2024-06-07': 1,
    '2024-06-08': 1,
    '2024-06-09': -1,
    '2024-06-11': 1,
    '2024-06-12': -1,
    '2024-06-13': 1,
    '2024-06-14': 1,
    '2024-06-15': 1,
    '2024-06-16': -1,
    '2024-06-21': 1,
    '2024-06-22': 1,
    '2024-06-23': 0,
    '2024-06-25': 1,
    '2024-06-26': 1,
    '2024-06-27': -1,
    '2024-06-28': 1,
    '2024-06-29': 1,
    '2024-06-30': 1,
    '2024-07-02': 1,
    '2024-07-04': -1,
    '2024-07-05': -1,
    '2024-07-06': -1,
    '2024-07-07': 1,
    '2024-07-09': -1,
    '2024-07-10': -1,
    '2024-07-12': 1,
    '2024-07-13': -1,
    '2024-07-14': -1,
    '2024-07-15': -1,
    '2024-07-16': 1,
    '2024-07-17': 1,
    '2024-07-19': 1,
    '2024-07-20': -1,
    '2024-07-21': 1,
    '2024-07-26': 1,
    '2024-07-27': 1,
    '2024-07-28': 1,
    '2024-07-30': 1,
    '2024-07-31': -1,
    '2024-08-01': 1,
    '2024-08-02': 1,
    '2024-08-03': -1,
    '2024-08-04': 1,
    '2024-08-06': 1,
    '2024-08-07': -1,
    '2024-08-08': 1,
    '2024-08-10': -1,
    '2024-08-11': 1,
    '2024-08-12': 1,
    '2024-08-13': 1,
    '2024-08-14': -1,
    '2024-08-15': 1,
    '2024-08-16': 1,
    '2024-08-17': -1,
    '2024-08-18': 1,
    '2024-08-20': -1,
    '2024-08-21': -1,
    '2024-08-23': 1,
    '2024-08-24': -1,
    '2024-08-25': -1,
    '2024-08-27': 1,
    '2024-08-28': -1,
    '2024-08-30': -1,
    '2024-08-31': 1,
    '2024-09-01': 1,
    '2024-09-03': -1,
    '2024-09-04': -1,
    '2024-09-06': -1,
    '2024-09-07': -1,
    //@@NEXTGAME@@
};
var score24 = {
    '2024-03-29': 'vs Buffaloes , 1-3 </br>Start P.有原 / C.甲斐',
    '2024-03-30': 'vs Buffaloes , 2-0 </br>Start P.モイネロ / C.甲斐',
    '2024-03-31': 'vs Buffaloes , 2-5 </br>Start P.スチュワート・ジュニア / C.海野',
    '2024-04-02': 'vs Marines , 2-0 </br>Start P.大関 / C.甲斐',
    '2024-04-03': 'vs Marines , 2-4 </br>Start P.東浜 / C.甲斐',
    '2024-04-04': 'vs Marines , 8-1 </br>Start P.大津 / C.海野',
    '2024-04-05': 'vs Eagles , 1-6 </br>Start P.石川 / C.甲斐',
    '2024-04-06': 'vs Eagles , 4-5 </br>Start P.モイネロ / C.甲斐',
    '2024-04-07': 'vs Eagles , 3-2 </br>Start P.スチュワート・ジュニア / C.海野',
    '2024-04-09': 'vs Fighters , 2-4 </br>Start P.有原 / C.甲斐',
    '2024-04-11': 'vs Fighters , 6-3 </br>Start P.大関 / C.甲斐',
    '2024-04-12': 'vs Lions , 1-2 </br>Start P.東浜 / C.甲斐',
    '2024-04-13': 'vs Lions , 2-11 </br>Start P.モイネロ / C.甲斐',
    '2024-04-14': 'vs Lions , 1-4 </br>Start P.大津 / C.海野',
    '2024-04-16': 'vs Fighters , 5-1 </br>Start P.有原 / C.甲斐',
    '2024-04-17': 'vs Fighters , 4-4 </br>Start P.大関 / C.甲斐',
    '2024-04-19': 'vs Buffaloes , 9-7 </br>Start P.東浜 / C.甲斐',
    '2024-04-20': 'vs Buffaloes , 3-3 </br>Start P.モイネロ / C.甲斐',
    '2024-04-21': 'vs Buffaloes , 1-3 </br>Start P.スチュワート・ジュニア / C.海野',
    '2024-04-23': 'vs Marines , 2-4 </br>Start P.有原 / C.甲斐',
    '2024-04-24': 'vs Marines , 1-10 </br>Start P.大関 / C.甲斐',
    '2024-04-25': 'vs Marines , 0-6 </br>Start P.大津 / C.海野',
    '2024-04-27': 'vs Lions , 2-1 </br>Start P.モイネロ / C.甲斐',
    '2024-04-28': 'vs Lions , 3-2 </br>Start P.東浜 / C.甲斐',
    '2024-04-29': 'vs Lions , 5-4 </br>Start P.スチュワート・ジュニア / C.海野',
    '2024-04-30': 'vs Eagles , 8-0 </br>Start P.有原 / C.甲斐',
    '2024-05-01': 'vs Eagles , 3-4 </br>Start P.大関 / C.甲斐',
    '2024-05-03': 'vs Lions , 1-0 </br>Start P.大津 / C.海野',
    '2024-05-04': 'vs Lions , 5-4 </br>Start P.モイネロ / C.甲斐',
    '2024-05-05': 'vs Lions , 0-4 </br>Start P.東浜 / C.甲斐',
    '2024-05-06': 'vs Fighters , 9-4 </br>Start P.和田 / C.甲斐',
    '2024-05-07': 'vs Fighters , 2-1 </br>Start P.有原 / C.甲斐',
    '2024-05-08': 'vs Fighters , 3-1 </br>Start P.石川 / C.甲斐',
    '2024-05-11': 'vs Buffaloes , 4-1 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-05-14': 'vs Eagles , 4-1 </br>Start P.有原 / C.甲斐',
    '2024-05-15': 'vs Eagles , 3-7 </br>Start P.石川 / C.甲斐',
    '2024-05-17': 'vs Lions , 6-2 </br>Start P.モイネロ / C.甲斐',
    '2024-05-18': 'vs Lions , 3-2 </br>Start P.大津 / C.海野',
    '2024-05-19': 'vs Lions , 2-1 </br>Start P.大関 / C.海野',
    '2024-05-21': 'vs Eagles , 21-0 </br>Start P.有原 / C.甲斐',
    '2024-05-22': 'vs Eagles , 12-0 </br>Start P.和田 / C.海野',
    '2024-05-24': 'vs Marines , 3-1 </br>Start P.モイネロ / C.甲斐',
    '2024-05-25': 'vs Marines , 2-0 </br>Start P.大津 / C.海野',
    '2024-05-26': 'vs Marines , 7-1 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-05-28': 'vs Giants , 0-2 </br>Start P.有原 / C.甲斐',
    '2024-05-29': 'vs Giants , 1-0 </br>Start P.大関 / C.海野',
    '2024-05-30': 'vs Giants , 6-5 </br>Start P.東浜 / C.甲斐',
    '2024-05-31': 'vs Carp , 2-1 </br>Start P.モイネロ / C.甲斐',
    '2024-06-01': 'vs Carp , 2-0 </br>Start P.大津 / C.海野',
    '2024-06-02': 'vs Carp , 5-3 </br>Start P.和田 / C.海野',
    '2024-06-04': 'vs Dragons , 2-3 </br>Start P.有原 / C.甲斐',
    '2024-06-05': 'vs Dragons , 1-5 </br>Start P.大関 / C.海野',
    '2024-06-06': 'vs Dragons , 3-0 </br>Start P.東浜 / C.甲斐',
    '2024-06-07': 'vs Baystars , 1-10 </br>Start P.モイネロ / C.甲斐',
    '2024-06-08': 'vs Baystars , 3-5 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-06-09': 'vs Baystars , 8-5 </br>Start P.和田 / C.海野',
    '2024-06-11': 'vs Swallows , 4-2 </br>Start P.有原 / C.甲斐',
    '2024-06-12': 'vs Swallows , 3-9 </br>Start P.大津 / C.海野',
    '2024-06-13': 'vs Swallows , 6-3 </br>Start P.大関 / C.海野',
    '2024-06-14': 'vs Tigers , 2-0 </br>Start P.モイネロ / C.甲斐',
    '2024-06-15': 'vs Tigers , 6-2 </br>Start P.東浜 / C.甲斐',
    '2024-06-16': 'vs Tigers , 1-4 </br>Start P.石川 / C.甲斐',
    '2024-06-21': 'vs Marines , 9-4 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-06-22': 'vs Marines , 3-1 </br>Start P.大津 / C.海野',
    '2024-06-23': 'vs Marines , 6-6 </br>Start P.モイネロ / C.甲斐',
    '2024-06-25': 'vs Buffaloes , 2-7 </br>Start P.有原 / C.甲斐',
    '2024-06-26': 'vs Buffaloes , 1-5 </br>Start P.大関 / C.海野',
    '2024-06-27': 'vs Buffaloes , 3-1 </br>Start P.東浜 / C.甲斐',
    '2024-06-28': 'vs Fighters , 1-5 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-06-29': 'vs Fighters , 1-7 </br>Start P.大津 / C.海野',
    '2024-06-30': 'vs Fighters , 3-10 </br>Start P.モイネロ / C.甲斐',
    '2024-07-02': 'vs Lions , 3-2 </br>Start P.有原 / C.甲斐',
    '2024-07-04': 'vs Lions , 0-4 </br>Start P.大関 / C.海野',
    '2024-07-05': 'vs Eagles , 1-5 </br>Start P.和田 / C.海野',
    '2024-07-06': 'vs Eagles , 0-4 </br>Start P.大津 / C.海野',
    '2024-07-07': 'vs Eagles , 5-3 </br>Start P.モイネロ / C.甲斐',
    '2024-07-09': 'vs Buffaloes , 3-0 </br>Start P.有原 / C.甲斐',
    '2024-07-10': 'vs Buffaloes , 4-3 </br>Start P.東浜 / C.甲斐',
    '2024-07-12': 'vs Fighters , 4-5 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-07-13': 'vs Fighters , 3-2 </br>Start P.大津 / C.海野',
    '2024-07-14': 'vs Fighters , 3-1 </br>Start P.モイネロ / C.甲斐',
    '2024-07-15': 'vs Marines , 5-8 </br>Start P.大関 / C.海野',
    '2024-07-16': 'vs Marines , 4-1 </br>Start P.有原 / C.甲斐',
    '2024-07-17': 'vs Marines , 6-4 </br>Start P.大山 / C.甲斐',
    '2024-07-19': 'vs Lions , 0-4 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-07-20': 'vs Lions , 5-3 </br>Start P.大津 / C.海野',
    '2024-07-21': 'vs Lions , 0-1 </br>Start P.モイネロ / C.甲斐',
    '2024-07-26': 'vs Buffaloes , 5-1 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-07-27': 'vs Buffaloes , 3-0 </br>Start P.有原 / C.甲斐',
    '2024-07-28': 'vs Buffaloes , 4-1 </br>Start P.大関 / C.海野',
    '2024-07-30': 'vs Eagles , 1-10 </br>Start P.モイネロ / C.甲斐',
    '2024-07-31': 'vs Eagles , 3-2 </br>Start P.大津 / C.海野',
    '2024-08-01': 'vs Eagles , 0-7 </br>Start P.大山 / C.甲斐',
    '2024-08-02': 'vs Fighters , 6-4 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-08-03': 'vs Fighters , 7-8 </br>Start P.有原 / C.甲斐',
    '2024-08-04': 'vs Fighters , 3-2 </br>Start P.大関 / C.海野',
    '2024-08-06': 'vs Marines , 4-6 </br>Start P.モイネロ / C.甲斐',
    '2024-08-07': 'vs Marines , 6-2 </br>Start P.大津 / C.甲斐',
    '2024-08-08': 'vs Marines , 3-6 </br>Start P.石川 / C.甲斐',
    '2024-08-10': 'vs Eagles , 6-13 </br>Start P.有原 / C.甲斐',
    '2024-08-11': 'vs Eagles , 5-2 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-08-12': 'vs Eagles , 14-4 </br>Start P.大関 / C.海野',
    '2024-08-13': 'vs Lions , 1-6 </br>Start P.モイネロ / C.甲斐',
    '2024-08-14': 'vs Lions , 4-1 </br>Start P.大津 / C.海野',
    '2024-08-15': 'vs Lions , 2-9 </br>Start P.石川 / C.甲斐',
    '2024-08-16': 'vs Marines , 4-0 </br>Start P.有原 / C.甲斐',
    '2024-08-17': 'vs Marines , 2-5 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-08-18': 'vs Marines , 2-1 </br>Start P.松本 / C.甲斐',
    '2024-08-20': 'vs Eagles , 3-0 </br>Start P.モイネロ / C.甲斐',
    '2024-08-21': 'vs Eagles , 2-1 </br>Start P.大関 / C.海野',
    '2024-08-23': 'vs Fighters , 5-6 </br>Start P.有原 / C.甲斐',
    '2024-08-24': 'vs Fighters , 6-1 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-08-25': 'vs Fighters , 5-3 </br>Start P.松本 / C.甲斐',
    '2024-08-27': 'vs Buffaloes , 3-1 </br>Start P.モイネロ / C.甲斐',
    '2024-08-28': 'vs Buffaloes , 1-4 </br>Start P.大関 / C.海野',
    '2024-08-30': 'vs Marines , 6-2 </br>Start P.有原 / C.甲斐',
    '2024-08-31': 'vs Marines , 1-4 </br>Start P.スチュワート・ジュニア / C.甲斐',
    '2024-09-01': 'vs Marines , 2-10 </br>Start P.石川 / C.甲斐',
    '2024-09-03': 'vs Fighters , 3-6 </br>Start P.モイネロ / C.甲斐',
    '2024-09-04': 'vs Fighters , 5-8 </br>Start P.大関 / C.海野',
    '2024-09-06': 'vs Lions , 0-1 </br>Start P.有原 / C.甲斐',
    '2024-09-07': 'vs Lions , 2-3 </br>Start P.スチュワート・ジュニア / C.甲斐',
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
