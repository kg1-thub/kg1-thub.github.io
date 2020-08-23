// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart 2018
var ctx18 = document.getElementById("myAreaChart18");
var myLineChart18 = new Chart(ctx18, {
  type: 'line',
  data: {
    labels: [
      'Start',
      '03/30',
      '03/31',
      '04/01',
      '04/03',
      '04/04',
      '04/05',
      '04/06',
      '04/07',
      '04/08',
      '04/10',
      '04/11',
      '04/12',
      '04/13',
      '04/14',
      '04/15',
      '04/17',
      '04/19',
      '04/20',
      '04/21',
      '04/22',
      '04/24',
      '04/25',
      '04/28',
      '04/29',
      '04/30',
      '05/01',
      '05/03',
      '05/04',
      '05/05',
      '05/06',
      '05/08',
      '05/09',
      '05/10',
      '05/11',
      '05/12',
      '05/13',
      '05/14',
      '05/16',
      '05/18',
      '05/19',
      '05/20',
      '05/22',
      '05/23',
      '05/25',
      '05/26',
      '05/27',
      '05/29',
      '05/30',
      '05/31',
      '06/01',
      '06/02',
      '06/03',
      '06/05',
      '06/06',
      '06/07',
      '06/08',
      '06/09',
      '06/10',
      '06/12',
      '06/13',
      '06/14',
      '06/15',
      '06/16',
      '06/17',
      '06/22',
      '06/23',
      '06/24',
      '06/26',
      '06/27',
      '06/28',
      '06/29',
      '06/30',
      '07/01',
      '07/03',
      '07/04',
      '07/05',
      '07/06',
      '07/07',
      '07/08',
      '07/09',
      '07/10',
      '07/11',
      '07/16',
      '07/17',
      '07/18',
      '07/20',
      '07/21',
      '07/22',
      '07/24',
      '07/25',
      '07/26',
      '07/27',
      '07/28',
      '07/29',
      '07/31',
      '08/01',
      '08/02',
      '08/03',
      '08/04',
      '08/05',
      '08/07',
      '08/08',
      '08/09',
      '08/10',
      '08/11',
      '08/12',
      '08/14',
      '08/15',
      '08/16',
      '08/17',
      '08/18',
      '08/19',
      '08/21',
      '08/22',
      '08/23',
      '08/24',
      '08/25',
      '08/26',
      '08/28',
      '08/29',
      '08/30',
      '08/31',
      '09/01',
      '09/02',
      '09/05',
      '09/08',
      '09/11',
      '09/12',
      '09/13',
      '09/14',
      '09/15',
      '09/16',
      '09/17',
      '09/19',
      '09/22',
      '09/23',
      '09/24',
      '09/28',
      '09/29',
      '09/30',
      '10/01',
      '10/04',
      '10/09'
    ],
    datasets: [{
      label: "Giants",
      lineTension: 0,
      backgroundColor: "rgba(255,140,0,0.2)",
      borderColor: "rgba(255,140,0,1)",
      pointRadius: 0.3,
      pointBackgroundColor: "rgba(255,140,0,1)",
      pointBorderColor: "rgba(255,140,0,1)",
      pointHoverRadius: 0.3,
      pointHoverBackgroundColor: "rgba(255,140,0,1)",
      pointHitRadius: 50,
      pointborderWidth: 5,
      data: [
        0,
        -1,
        0,
        1,
        2,
        1,
        2,
        1,
        0,
        -1,
        -2,
        -3,
        -4,
        -3,
        -4,
        -5,
        -4,
        -5,
        -4,
        -3,
        -2,
        -1,
        0,
        1,
        2,
        3,
        2,
        1,
        1,
        2,
        1,
        0,
        1,
        2,
        3,
        2,
        3,
        2,
        3,
        4,
        3,
        2,
        3,
        2,
        1,
        0,
        -1,
        -2,
        -1,
        -2,
        -1,
        -2,
        -3,
        -4,
        -3,
        -4,
        -5,
        -4,
        -3,
        -2,
        -3,
        -2,
        -1,
        -2,
        -3,
        -2,
        -1,
        -2,
        -3,
        -4,
        -5,
        -6,
        -5,
        -4,
        -3,
        -4,
        -5,
        -4,
        -5,
        -4,
        -3,
        -2,
        -1,
        0,
        1,
        2,
        1,
        0,
        -1,
        -2,
        -3,
        -4,
        -3,
        -4,
        -5,
        -4,
        -3,
        -2,
        -3,
        -2,
        -1,
        -2,
        -1,
        -2,
        -3,
        -3,
        -2,
        -3,
        -2,
        -3,
        -4,
        -3,
        -2,
        -1,
        -2,
        -3,
        -2,
        -1,
        -2,
        -3,
        -4,
        -5,
        -4,
        -4,
        -3,
        -4,
        -3,
        -4,
        -4,
        -5,
        -6,
        -7,
        -6,
        -7,
        -8,
        -7,
        -6,
        -6,
        -5,
        -6,
        -5,
        -6,
        -5,
        -4
      ],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true
        },
        ticks: {
          // maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          // min: 0,
          // max: 40000,
          // maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// Area Chart 2019
var ctx19 = document.getElementById("myAreaChart19");
var myLineChart19 = new Chart(ctx19, {
  type: 'line',
  data: {
    labels: [
      'Start',
      '03/29',
      '03/30',
      '03/31',
      '04/02',
      '04/03',
      '04/04',
      '04/05',
      '04/06',
      '04/07',
      '04/09',
      '04/10',
      '04/12',
      '04/13',
      '04/14',
      '04/16',
      '04/17',
      '04/19',
      '04/20',
      '04/21',
      '04/23',
      '04/24',
      '04/25',
      '04/27',
      '04/28',
      '04/29',
      '04/30',
      '05/01',
      '05/02',
      '05/03',
      '05/04',
      '05/05',
      '05/06',
      '05/08',
      '05/10',
      '05/11',
      '05/12',
      '05/14',
      '05/15',
      '05/17',
      '05/18',
      '05/19',
      '05/22',
      '05/23',
      '05/24',
      '05/25',
      '05/26',
      '05/29',
      '05/30',
      '05/31',
      '06/01',
      '06/02',
      '06/04',
      '06/05',
      '06/06',
      '06/07',
      '06/08',
      '06/09',
      '06/11',
      '06/12',
      '06/13',
      '06/14',
      '06/15',
      '06/16',
      '06/18',
      '06/19',
      '06/20',
      '06/21',
      '06/22',
      '06/23',
      '06/29',
      '06/30',
      '07/02',
      '07/03',
      '07/04',
      '07/05',
      '07/06',
      '07/07',
      '07/08',
      '07/09',
      '07/10',
      '07/15',
      '07/16',
      '07/17',
      '07/19',
      '07/20',
      '07/21',
      '07/23',
      '07/24',
      '07/25',
      '07/26',
      '07/27',
      '07/28',
      '07/30',
      '07/31',
      '08/01',
      '08/02',
      '08/03',
      '08/04',
      '08/06',
      '08/07',
      '08/08',
      '08/09',
      '08/10',
      '08/11',
      '08/12',
      '08/13',
      '08/14',
      '08/16',
      '08/17',
      '08/18',
      '08/20',
      '08/21',
      '08/22',
      '08/23',
      '08/24',
      '08/25',
      '08/27',
      '08/28',
      '08/29',
      '08/30',
      '08/31',
      '09/01',
      '09/03',
      '09/04',
      '09/05',
      '09/06',
      '09/07',
      '09/10',
      '09/11',
      '09/12',
      '09/13',
      '09/14',
      '09/15',
      '09/16',
      '09/18',
      '09/19',
      '09/20',
      '09/21',
      '09/22',
      '09/23',
      '09/24',
      '09/27',
      '09/28'
    ],
    datasets: [{
      label: "Giants",
      lineTension: 0,
      backgroundColor: "rgba(255,140,0,0.2)",
      borderColor: "rgba(255,140,0,1)",
      pointRadius: 0.3,
      pointBackgroundColor: "rgba(255,140,0,1)",
      pointBorderColor: "rgba(255,140,0,1)",
      pointHoverRadius: 0.3,
      pointHoverBackgroundColor: "rgba(255,140,0,1)",
      pointHitRadius: 50,
      pointborderWidth: 5,
      data: [
        0,
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        4,
        3,
        4,
        3,
        4,
        3,
        2,
        3,
        2,
        3,
        4,
        5,
        6,
        7,
        6,
        7,
        8,
        7,
        6,
        7,
        8,
        7,
        6,
        6,
        7,
        8,
        9,
        8,
        7,
        6,
        5,
        6,
        7,
        6,
        5,
        6,
        5,
        4,
        5,
        4,
        3,
        2,
        3,
        4,
        5,
        4,
        5,
        6,
        5,
        6,
        5,
        6,
        7,
        6,
        7,
        8,
        9,
        8,
        9,
        8,
        9,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        15,
        16,
        17,
        18,
        19,
        18,
        17,
        16,
        15,
        16,
        15,
        14,
        13,
        12,
        13,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        9,
        9,
        10,
        11,
        12,
        13,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        17,
        16,
        17,
        16,
        15,
        16,
        17,
        18,
        17,
        16,
        15,
        14,
        13,
        12,
        13,
        14,
        13,
        14,
        15,
        14,
        15,
        14,
        13,
        12,
        13,
        14,
        13,
        14,
        13,
        14,
        13
      ],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true
        },
        ticks: {
          // maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          // min: 0,
          // max: 40000,
          // maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// Area Chart 2020
var ctx20 = document.getElementById("myAreaChart20");
var myLineChart20 = new Chart(ctx20, {
  type: 'line',
  data: {
    labels: [
      'Start',
      '06/19',
      '06/20',
      '06/21',
      '06/23',
      '06/24',
      '06/25',
      '06/26',
      '06/27',
      '06/28',
      '06/30',
      '07/01',
      '07/02',
      '07/03',
      '07/04',
      '07/05',
      '07/07',
      '07/08',
      '07/09',
      '07/10',
      '07/11',
      '07/12',
      '07/14',
      '07/15',
      '07/16',
      '07/17',
      '07/18',
      '07/19',
      '07/21',
      '07/22',
      '07/23',
      '07/24',
      '07/25',
      '07/26',
      '07/28',
      '07/29',
      '07/30',
      '07/31',
      '08/01',
      '08/02',
      '08/04',
      '08/05',
      '08/06',
      '08/07',
      '08/08',
      '08/09',
      '08/10',
      '08/11',
      '08/12',
      '08/13',
      '08/14',
      '08/15',
      '08/16',
      '08/18',
      '08/19',
      '08/20',
      '08/21',
      '08/22',
      '08/23',
      '08/25',
      // '08/26',
      // '08/27',
      // '08/28',
      // '08/29',
      // '08/30',
      // '09/01',
      // '09/02',
      // '09/03',
      // '09/04',
      // '09/05',
      // '09/06',
      // '09/08',
      // '09/09',
      // '09/10',
      // '09/11',
      // '09/12',
      // '09/13',
      // '09/15',
      // '09/16',
      // '09/17',
      // '09/18',
      // '09/19',
      // '09/20',
      // '09/21',
      // '09/22',
      // '09/23',
      // '09/25',
      // '09/26',
      // '09/27',
      // '09/29',
      // '09/30',
      // '10/01',
      // '10/02',
      // '10/03',
      // '10/04',
      // '10/06',
      // '10/07',
      // '10/08',
      // '10/10',
      // '10/11',
      // '10/12',
      // '10/13',
      // '10/14',
      // '10/15',
      // '10/16',
      // '10/17',
      // '10/18',
      // '10/20',
      // '10/21',
      // '10/22',
      // '10/23',
      // '10/24',
      // '10/25',
      // '10/27',
      // '10/28',
      // '10/29',
      // '10/30',
      // '10/31',
      // '11/01',
      // '11/03',
      // '11/04',
      // '11/07'
    ],
    datasets: [
      {
        label: "Giants",
        lineTension: 0,
        backgroundColor: "rgba(255,140,0,0.1)",
        borderColor: "#EB9E16",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#EB9E16",
        pointBorderColor: "#EB9E16",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#EB9E16",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: [
          0,
          1,
          2,
          3,
          4,
          3,
          3,
          4,
          3,
          4,
          5,
          4,
          5,
          6,
          7,
          6,
          6,
          6,
          5,
          5,
          4,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          9,
          10,
          10,
          9,
          10,
          11,
          10,
          9,
          10,
          11,
          10,
          11,
          12,
          11,
          10,
          9,
          9,
          9,
          9,
          10,
          11,
          12,
          11,
          10,
          11,
          12,
          13,
          12,
          11,
          10,
        ],
      },
      {
        label: "Tigers",
        lineTension: 0,
        backgroundColor: "rgba(255,215,0,0.05)",
        borderColor: "#F1EA49",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#F1EA49",
        pointBorderColor: "#F1EA49",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#F1EA49",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: [
          0,
          -1,
          -2,
          -3,
          -2,
          -3,
          -4,
          -5,
          -4,
          -5,
          -6,
          -7,
          -8,
          -8,
          -7,
          -6,
          -6,
          -6,
          -5,
          -4,
          -5,
          -4,
          -3,
          -4,
          -3,
          -2,
          -1,
          0,
          1,
          1,
          0,
          1,
          0,
          1,
          2,
          1,
          0,
          0,
          -1,
          0,
          -1,
          -2,
          -1,
          -2,
          -3,
          -2,
          -3,
          -2,
          -1,
          -1,
          -2,
          -1,
          -1,
          -2,
          -3,
          -4,
          -3,
          -2,
          -3,
        ],
      },
      {
        label: "Baystars",
        lineTension: 0,
        backgroundColor: "rgba(135,206,250,0.05)",
        borderColor: "#3893D2",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#3893D2",
        pointBorderColor: "#3893D2",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#3893D2",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: [
          0,
          -1,
          -2,
          -1,
          0,
          1,
          2,
          3,
          2,
          3,
          2,
          3,
          2,
          3,
          2,
          3,
          3,
          2,
          3,
          2,
          3,
          2,
          3,
          2,
          1,
          0,
          -1,
          -2,
          -3,
          -3,
          -2,
          -1,
          0,
          -1,
          -2,
          -1,
          0,
          0,
          1,
          0,
          1,
          2,
          3,
          2,
          3,
          4,
          5,
          4,
          3,
          3,
          4,
          3,
          2,
          3,
          3,
          4,
          3,
          2,
          1,
        ],
      },
      {
        label: "Swallows",
        lineTension: 0,
        backgroundColor: "rgba(51,204,0,0.05)",
        borderColor: "#5DD95D",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#5DD95D",
        pointBorderColor: "#5DD95D",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#5DD95D",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: [
          0,
          -1,
          0,
          -1,
          -2,
          -1,
          0,
          -1,
          0,
          -1,
          -1,
          0,
          1,
          0,
          1,
          0,
          1,
          1,
          2,
          2,
          3,
          4,
          3,
          4,
          3,
          2,
          3,
          3,
          4,
          4,
          3,
          3,
          4,
          3,
          2,
          3,
          4,
          3,
          2,
          2,
          1,
          0,
          1,
          2,
          1,
          0,
          0,
          0,
          -1,
          -2,
          -3,
          -2,
          -1,
          -2,
          -3,
          -2,
          -3,
          -4,
          -3,
        ],
      },
      {
        label: "Dragons",
        lineTension: 0,
        backgroundColor: "rgba(0,0,128,0.05)",
        borderColor: "#6F3BC8",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#6F3BC8",
        pointBorderColor: "#6F3BC8",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#6F3BC8",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: [
          0,
          1,
          0,
          1,
          0,
          -1,
          -2,
          -3,
          -2,
          -3,
          -2,
          -1,
          0,
          -1,
          -2,
          -1,
          -2,
          -2,
          -3,
          -2,
          -3,
          -4,
          -5,
          -4,
          -3,
          -4,
          -5,
          -6,
          -7,
          -6,
          -7,
          -8,
          -7,
          -8,
          -7,
          -8,
          -8,
          -7,
          -6,
          -6,
          -7,
          -8,
          -9,
          -8,
          -7,
          -7,
          -8,
          -7,
          -6,
          -6,
          -7,
          -6,
          -5,
          -4,
          -3,
          -4,
          -3,
          -2,
          -1,
        ],
      },
      {
        label: "Carp",
        lineTension: 0,
        backgroundColor: "rgba(255,0,0,0.05)",
        borderColor: "#EF3A38",
        borderWidth: 5,
        pointRadius: 0.3,
        pointBackgroundColor: "#EF3A38",
        pointBorderColor: "#EF3A38",
        pointHoverRadius: 0.3,
        pointHoverBackgroundColor: "#EF3A38",
        pointHitRadius: 50,
        pointborderWidth: 5,
        data: [
          0,
          1,
          2,
          1,
          0,
          1,
          1,
          2,
          1,
          2,
          2,
          1,
          0,
          0,
          -1,
          -2,
          -2,
          -1,
          -2,
          -3,
          -2,
          -1,
          -2,
          -3,
          -4,
          -3,
          -4,
          -4,
          -5,
          -5,
          -4,
          -5,
          -6,
          -5,
          -6,
          -5,
          -5,
          -6,
          -7,
          -6,
          -5,
          -4,
          -5,
          -4,
          -3,
          -4,
          -3,
          -4,
          -5,
          -5,
          -4,
          -5,
          -5,
          -6,
          -6,
          -7,
          -6,
          -5,
          -4,
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true
        },
        ticks: {
          // maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          // min: 0,
          // max: 40000,
          // maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true,
      position: 'right'
    }
  }
});
