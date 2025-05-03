var squareLength = 22;
var _colorRange = ['#EEEEEE', '#008b8b'];

var datas25 = {
'2025-03-18': 1,
'2025-03-19': 3,
'2025-03-27': 3,
'2025-03-28': 1,
'2025-03-29': 2,
'2025-03-31': 2,
'2025-04-01': 1,
'2025-04-02': 3,
'2025-04-04': 1,
'2025-04-05': 0,
'2025-04-06': 0,
'2025-04-07': 3,
'2025-04-08': 1,
'2025-04-09': 3,
'2025-04-11': 0,
'2025-04-12': 3,
'2025-04-13': 0,
'2025-04-14': 3,
'2025-04-15': 2,
'2025-04-16': 3,
'2025-04-20': 0,
'2025-04-22': 1,
'2025-04-23': 1,
'2025-04-25': 0,
'2025-04-26': 4,
'2025-04-27': 1,
'2025-04-28': 3,
'2025-04-29': 5,
'2025-04-30': 3,
'2025-05-02': 0,
//@@TOOLTIP_DATE@@
};
var score25 = {
'2025-03-18': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .400',
'2025-03-19': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>1 Hits / 1 RBI / AVG .375',
    '2025-03-27': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 1 RBI / AVG .417',
    '2025-03-28': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .375',
    '2025-03-29': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .333',
    '2025-03-31': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .286',
    '2025-04-01': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .280',
    '2025-04-02': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 1 RBI / AVG .333',
    '2025-04-04': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .324',
    '2025-04-05': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .297',
    '2025-04-06': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .268',
    '2025-04-07': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 2 RBI / AVG .311',
    '2025-04-08': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .300',
    '2025-04-09': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>2 Hits / 0 RBI / AVG .315',
    '2025-04-11': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .293',
    '2025-04-12': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .295',
    '2025-04-13': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .273',
    '2025-04-14': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>3 Hits / 1 RBI / AVG .296',
    '2025-04-15': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>0 Hits / 0 RBI / AVG .280',
    '2025-04-16': '(Regular Season)</br><span><strong>1 HR / 0 SB</strong></span></br>2 Hits / 2 RBI / AVG .288',
    '2025-04-20': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .277',
    '2025-04-22': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .276',
    '2025-04-23': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>1 Hits / 0 RBI / AVG .272',
    '2025-04-25': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .260',
    '2025-04-26': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>3 Hits / 1 RBI / AVG .277',
    '2025-04-27': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>2 Hits / 0 RBI / AVG .286',
    '2025-04-28': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .290',
    '2025-04-29': '(Regular Season)</br><span><strong>1 HR / 1 SB</strong></span></br>1 Hits / 1 RBI / AVG .288',
    '2025-04-30': '(Regular Season)</br><span><strong>0 HR / 1 SB</strong></span></br>1 Hits / 0 RBI / AVG .287',
    '2025-05-02': '(Regular Season)</br><span><strong>0 HR / 0 SB</strong></span></br>0 Hits / 0 RBI / AVG .277',
    //@@TOOLTIP@@
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
  .startDate('2025-03-18')
  .endDate('2025-10-31')
  .selector('#shomap25')
  .tooltipEnabled(true)
  .legendEnabled(false)
  .squareLength(squareLength)
  .svgWidth('830px')
  .colorRange(_colorRange);
heatmap25();  // render the chart
