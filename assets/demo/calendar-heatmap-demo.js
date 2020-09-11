var datas = {
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
    '2020-09-10': 1,
};
var chartData = [];
for (var d in datas) {
    chartData.push({
        date: moment(d, 'YYYY-MM-DD').startOf('day').toDate(),
        count: datas[d]
    });
};
var squareLength = 15;
var heatmap = calendarHeatmap()
  .data(chartData)
  .startDate('2020-06-01')
  .endDate('2020-11-30')
  .selector('#calmap')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
//   .height(squareLength * 7)
//   .width('100%')
//   .width(squareLength * 40)
  .colorRange(['#ECEFF2', '#CE6009']);
console.log(chartData);
heatmap();  // render the chart
