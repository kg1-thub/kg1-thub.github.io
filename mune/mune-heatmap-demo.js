var squareLength = 22;
var _colorRange = ['#FFFFFE', '#008b8b'];

var datas22 = {
    '2022-03-25': 1, '2022-03-26': 0, '2022-03-27': 2, '2022-03-29': 0, '2022-03-30': 2, '2022-03-31': 0, '2022-04-01': 3, '2022-04-02': 2, '2022-04-05': 5, '2022-04-06': 0, '2022-04-07': 1, '2022-04-08': 2, '2022-04-09': 0, '2022-04-10': 1, '2022-04-12': 0, '2022-04-13': 1, '2022-04-15': 1, '2022-04-16': 1, '2022-04-17': 2, '2022-04-19': 4, '2022-04-20': 4, '2022-04-22': 0, '2022-04-23': 0, '2022-04-24': 2, '2022-04-27': 5, '2022-04-28': 2, '2022-04-30': 0, '2022-05-03': 5, '2022-05-04': 2, '2022-05-05': 0, '2022-05-06': 4, '2022-05-07': 4, '2022-05-08': 0, '2022-05-10': 1, '2022-05-11': 0, '2022-05-12': 0, '2022-05-14': 5, '2022-05-15': 5, '2022-05-17': 1, '2022-05-18': 0, '2022-05-19': 0, '2022-05-20': 0, '2022-05-21': 4, '2022-05-22': 2, '2022-05-24': 5, '2022-05-25': 1, '2022-05-26': 0, '2022-05-27': 0, '2022-05-28': 1, '2022-05-29': 4, '2022-05-31': 0, '2022-06-01': 0, '2022-06-02': 0, '2022-06-03': 0, '2022-06-04': 5, '2022-06-05': 1, '2022-06-07': 0, '2022-06-08': 2, '2022-06-09': 1, '2022-06-10': 4, '2022-06-11': 5, '2022-06-12': 0, '2022-06-17': 0, '2022-06-18': 2, '2022-06-19': 5, '2022-06-21': 1, '2022-06-22': 1, '2022-06-23': 5, '2022-06-24': 5, '2022-06-25': 2, '2022-06-26': 4, '2022-06-28': 4, '2022-06-29': 5, '2022-06-30': 0, '2022-07-01': 0, '2022-07-02': 1, '2022-07-03': 0, '2022-07-05': 0, '2022-07-06': 1, '2022-07-07': 2, '2022-07-08': 1, '2022-07-12': 0, '2022-07-13': 4, '2022-07-14': 1, '2022-07-15': 0, '2022-07-16': 5, '2022-07-17': 2, '2022-07-18': 0, '2022-07-19': 1, '2022-07-20': 5, '2022-07-22': 0, '2022-07-23': 3, '2022-07-24': 0, '2022-07-29': 0, '2022-07-30': 5, '2022-07-31': 5, '2022-08-02': 5, '2022-08-03': 1, '2022-08-05': 1, '2022-08-06': 0, '2022-08-07': 0, '2022-08-09': 1, '2022-08-10': 1, '2022-08-11': 3, '2022-08-12': 3, '2022-08-14': 0, '2022-08-16': 2, '2022-08-17': 4, '2022-08-18': 1, '2022-08-19': 1, '2022-08-20': 5, '2022-08-21': 0, '2022-08-23': 4, '2022-08-24': 2, '2022-08-25': 0, '2022-08-26': 5, '2022-08-27': 5, '2022-08-28': 4, '2022-08-30': 1, '2022-08-31': 1, '2022-09-02': 4, '2022-09-03': 1, '2022-09-04': 4, '2022-09-06': 5, '2022-09-07': 0, '2022-09-09': 3, '2022-09-10': 1, '2022-09-11': 0, '2022-09-12': 0, '2022-09-13': 5,
    '2022-09-16': 0,'2022-09-17': 1,'2022-09-18': 0,'2022-09-20': 0,'2022-09-21': 1,'2022-09-22': 0,'2022-09-23': 0,
    '2022-09-24': 1,'2022-09-25': 0,
    '2022-09-27': 0,
    '2022-09-28': 0,
    '2022-09-29': 1,
    '2022-09-30': 1,
    '2022-10-02': 0,
    '2022-10-03': 5,
};
var score22 = {
    '2022-03-25': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-03-26': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-03-27': '2 Hits for 3 AtBats</br>0 HR, 1 RBI', '2022-03-29': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-03-30': '1 Hits for 3 AtBats</br>0 HR, 1 RBI', '2022-03-31': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-04-01': '1 Hits for 3 AtBats</br>1 HR, 1 RBI', '2022-04-02': '1 Hits for 4 AtBats</br>0 HR, 1 RBI', '2022-04-05': '2 Hits for 4 AtBats</br>2 HR, 4 RBI', 
    '2022-04-06': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-04-07': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-04-08': '2 Hits for 4 AtBats</br>0 HR, 1 RBI', '2022-04-09': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-04-10': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-04-12': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-04-13': '2 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-04-15': '2 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-04-16': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-04-17': '2 Hits for 5 AtBats</br>0 HR, 2 RBI', '2022-04-19': '1 Hits for 4 AtBats</br>1 HR, 2 RBI', '2022-04-20': '2 Hits for 4 AtBats</br>1 HR, 1 RBI', '2022-04-22': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-04-23': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-04-24': '1 Hits for 2 AtBats</br>0 HR, 1 RBI', '2022-04-27': '3 Hits for 5 AtBats</br>1 HR, 3 RBI', '2022-04-28': '1 Hits for 3 AtBats</br>0 HR, 2 RBI', '2022-04-30': '0 Hits for 1 AtBats</br>0 HR, 0 RBI', '2022-05-03': '2 Hits for 4 AtBats</br>1 HR, 2 RBI', '2022-05-04': '1 Hits for 4 AtBats</br>0 HR, 1 RBI', '2022-05-05': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-05-06': '1 Hits for 4 AtBats</br>1 HR, 4 RBI', '2022-05-07': '1 Hits for 5 AtBats</br>1 HR, 4 RBI', '2022-05-08': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-05-10': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-05-11': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-05-12': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-05-14': '3 Hits for 5 AtBats</br>2 HR, 2 RBI', '2022-05-15': '2 Hits for 6 AtBats</br>1 HR, 2 RBI', '2022-05-17': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-05-18': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-05-19': '0 Hits for 1 AtBats</br>0 HR, 0 RBI', '2022-05-20': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-05-21': '1 Hits for 4 AtBats</br>1 HR, 3 RBI', '2022-05-22': '2 Hits for 3 AtBats</br>0 HR, 2 RBI', '2022-05-24': '2 Hits for 5 AtBats</br>1 HR, 2 RBI', '2022-05-25': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-05-26': '0 Hits for 1 AtBats</br>0 HR, 0 RBI', '2022-05-27': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-05-28': '1 Hits for 5 AtBats</br>0 HR, 0 RBI', 
    '2022-05-29': '2 Hits for 4 AtBats</br>1 HR, 1 RBI', '2022-05-31': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-06-01': '0 Hits for 0 AtBats</br>0 HR, 0 RBI', '2022-06-02': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-06-03': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-06-04': '2 Hits for 3 AtBats</br>1 HR, 2 RBI', '2022-06-05': '2 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-06-07': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-06-08': '3 Hits for 4 AtBats</br>0 HR, 1 RBI', '2022-06-09': '2 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-06-10': '2 Hits for 3 AtBats</br>1 HR, 1 RBI', '2022-06-11': '3 Hits for 4 AtBats</br>2 HR, 6 RBI', '2022-06-12': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-06-17': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-06-18': '2 Hits for 5 AtBats</br>0 HR, 1 RBI', '2022-06-19': '3 Hits for 3 AtBats</br>2 HR, 2 RBI', '2022-06-21': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-06-22': '2 Hits for 5 AtBats</br>0 HR, 0 RBI', '2022-06-23': '4 Hits for 5 AtBats</br>2 HR, 6 RBI', '2022-06-24': '2 Hits for 5 AtBats</br>2 HR, 5 RBI', '2022-06-25': '1 Hits for 3 AtBats</br>0 HR, 1 RBI', '2022-06-26': '1 Hits for 4 AtBats</br>1 HR, 3 RBI', '2022-06-28': '1 Hits for 3 AtBats</br>1 HR, 3 RBI', '2022-06-29': '3 Hits for 5 AtBats</br>2 HR, 4 RBI', '2022-06-30': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-07-01': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-02': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-03': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-07-05': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-07-06': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-07': '2 Hits for 5 AtBats</br>0 HR, 1 RBI', '2022-07-08': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-12': '0 Hits for 0 AtBats</br>0 HR, 0 RBI', '2022-07-13': '1 Hits for 2 AtBats</br>1 HR, 2 RBI', 
    '2022-07-14': '1 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-07-15': '0 Hits for 0 AtBats</br>0 HR, 0 RBI', '2022-07-16': '2 Hits for 3 AtBats</br>1 HR, 2 RBI', '2022-07-17': '2 Hits for 4 AtBats</br>0 HR, 1 RBI', '2022-07-18': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-07-19': '2 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-20': '2 Hits for 3 AtBats</br>1 HR, 4 RBI', '2022-07-22': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-23': '1 Hits for 3 AtBats</br>1 HR, 1 RBI', '2022-07-24': '0 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-07-29': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-07-30': '2 Hits for 4 AtBats</br>1 HR, 2 RBI', '2022-07-31': '3 Hits for 5 AtBats</br>3 HR, 4 RBI', '2022-08-02': '3 Hits for 4 AtBats</br>2 HR, 3 RBI', '2022-08-03': '1 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-08-05': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-08-06': 'Out of the game.', '2022-08-07': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-08-09': '3 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-08-10': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-08-11': '1 Hits for 4 AtBats</br>1 HR, 1 RBI', '2022-08-12': '1 Hits for 1 AtBats</br>1 HR, 1 RBI', '2022-08-14': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-08-16': '1 Hits for 3 AtBats</br>0 HR, 1 RBI', '2022-08-17': '1 Hits for 3 AtBats</br>1 HR, 3 RBI', '2022-08-18': '2 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-08-19': '2 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-08-20': '3 Hits for 4 AtBats</br>2 HR, 3 RBI', '2022-08-21': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-08-23': '1 Hits for 3 AtBats</br>1 HR, 3 RBI', '2022-08-24': '1 Hits for 1 AtBats</br>0 HR, 1 RBI', '2022-08-25': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-08-26': '2 Hits for 4 AtBats</br>2 HR, 4 RBI', '2022-08-27': '5 Hits for 5 AtBats</br>1 HR, 4 RBI', '2022-08-28': '2 Hits for 2 AtBats</br>1 HR, 1 RBI', '2022-08-30': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-08-31': '1 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-09-02': '1 Hits for 5 AtBats</br>1 HR, 3 RBI', '2022-09-03': '3 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-09-04': '1 Hits for 3 AtBats</br>1 HR, 2 RBI', '2022-09-06': '2 Hits for 6 AtBats</br>1 HR, 2 RBI', '2022-09-07': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', 
    '2022-09-09': '1 Hits for 4 AtBats</br>1 HR, 1 RBI', '2022-09-10': '1 Hits for 4 AtBats</br>0 HR, 0 RBI', '2022-09-11': '0 Hits for 3 AtBats</br>0 HR, 0 RBI', '2022-09-12': '0 Hits for 2 AtBats</br>0 HR, 0 RBI', '2022-09-13': '3 Hits for 4 AtBats</br>2 HR, 4 RBI',
    '2022-09-16': '0 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-17': '1 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-18': '0 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-20': '0 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-21': '1 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-22': '0 Hits for 4 AtBats</br>0 HR, 0 RBI',
    '2022-09-23': '0 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-24': '1 Hits for 4 AtBats</br>0 HR, 0 RBI',
    '2022-09-25': '0 Hits for 4 AtBats</br>0 HR, 0 RBI',
    '2022-09-27': '0 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-28': '0 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-09-29': '1 Hits for 5 AtBats</br>0 HR, 0 RBI',
    '2022-09-30': '1 Hits for 3 AtBats</br>0 HR, 0 RBI',
    '2022-10-02': 'Out of the game.',
    '2022-10-03': '2 Hits for 4 AtBats</br>1 HR, 2 RBI',
    //@@TOOLTIP@@
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
  .endDate('2022-10-09')
  .selector('#munemap22')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('300px')
  .colorRange(_colorRange);
heatmap22();  // render the chart
