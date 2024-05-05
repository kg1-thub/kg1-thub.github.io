// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var pie_data24 = {'Catcher': ['大城', '小林', '岸田', 'その他'], 'stolen_bases': [2, 4, 1, 0], 'Defense_inning': [[27.0, 99.0, 7.0, 0, 0, 0, 0, 0], [0, 73.0, 25.0, 0, 0, 0, 0, 0], [0, 52.0, 5.0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], 'Starting_games': [[3, 11, 0, 0, 0, 0, 0, 0], [0, 8, 3, 0, 0, 0, 0, 0], [0, 6, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], 'Winning_games': [[2, 3, 1, 0, 0, 0, 0, 0], [0, 6, 1, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]};
var innings24 = pie_data24.Defense_inning;
var starting_games24 = pie_data24.Starting_games;
var stolen_bases24 = pie_data24.stolen_bases;
var total_innings24 = get_total_by_row(innings24);
var innings24 = get_percentage_of_total(innings24);
var total_starting_games24 = get_total_by_row(starting_games24);
var starting_games24 = get_percentage_of_total(starting_games24);

var pie_data23 = {'Catcher': ['大城', '小林', '山瀬', 'その他'], 'stolen_bases': [43, 2, 0, 5], 'Defense_inning': [[9.0, 182.0, 186.0, 159.0, 183.67, 164.67, 159.67, 16.0], [0, 18.0, 14.0, 4.0, 3.0, 3.0, 4.0, 0], [0, 6.0, 13.0, 0, 0, 0, 0, 0], [0, 2.0, 0, 23.0, 10.0, 66.0, 39.33, 11.0]], 'Starting_games': [[1, 23, 22, 19, 20, 19, 19, 2], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 2, 1, 7, 4, 1]], 'Winning_games': [[0, 11, 13, 11, 10, 9, 6, 2], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 4, 1]]};
var innings23 = pie_data23.Defense_inning;
var starting_games23 = pie_data23.Starting_games;
var stolen_bases23 = pie_data23.stolen_bases;
var total_innings23 = get_total_by_row(innings23);
var innings23 = get_percentage_of_total(innings23);
var total_starting_games23 = get_total_by_row(starting_games23);
var starting_games23 = get_percentage_of_total(starting_games23);

var pie_data22 = {'Catcher': ['大城', '小林', '岸田', 'その他'], 'stolen_bases': [41, 11, 2, 3], 'Defense_inning': [[35.0, 132.0, 163.67, 76.0, 130.0, 188.0, 130.0, 13.0], [20.0, 73.0, 25.0, 79.0, 3.0, 33.0, 38.0, 0], [0, 14.0, 32.33, 7.0, 24.0, 0, 0, 0], [0, 1.0, 0, 29.0, 6.0, 12.0, 6.0, 4.0]], 'Starting_games': [[4, 16, 20, 7, 16, 22, 17, 2], [2, 8, 3, 11, 0, 3, 2, 0], [0, 1, 2, 0, 2, 0, 0, 0], [0, 0, 0, 4, 0, 1, 0, 0]], 'Winning_games': [[3, 10, 10, 3, 4, 9, 10, 1], [2, 4, 1, 4, 0, 2, 1, 0], [0, 1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0]]};
var innings22 = pie_data22.Defense_inning;
var starting_games22 = pie_data22.Starting_games;
var stolen_bases22 = pie_data22.stolen_bases;
var total_innings22 = get_total_by_row(innings22);
var innings22 = get_percentage_of_total(innings22);
var total_starting_games22 = get_total_by_row(starting_games22);
var starting_games22 = get_percentage_of_total(starting_games22);

var pie_data21 = {'Catcher': ['小林', '炭谷', '大城', '岸田'], 'stolen_bases': [8, 12, 26, 1], 'Defense_inning': [[7.0, 4.0, 0, 41.0, 30.33, 32.0, 98.0, 53.67], [1.0, 46.0, 82.0, 40.0, 1.0, 0, 0, 0], [36.0, 166.0, 101.0, 113.0, 59.67, 97.0, 86.67, 91.0], [0, 4.0, 12.0, 0, 4.0, 4.0, 32.33, 10.0]], 'Starting_games': [[0, 0, 0, 4, 4, 2, 11, 6], [0, 4, 10, 4, 0, 0, 0, 0], [5, 21, 12, 14, 7, 13, 12, 11], [0, 0, 0, 0, 0, 0, 2, 1]], 'Winning_games': [[1, 0, 0, 1, 1, 0, 3, 2], [0, 1, 5, 1, 0, 0, 0, 0], [1, 13, 5, 10, 4, 8, 2, 2], [0, 0, 0, 0, 0, 0, 1, 0]]};
var innings21 = pie_data21.Defense_inning;
var starting_games21 = pie_data21.Starting_games;
var stolen_bases21 = pie_data21.stolen_bases;
var total_innings21 = get_total_by_row(innings21);
var innings21 = get_percentage_of_total(innings21);
var total_starting_games21 = get_total_by_row(starting_games21);
var starting_games21 = get_percentage_of_total(starting_games21);

var innings20 = [ 
    [ //小林
        12,
        0,
        0,
        8,
        29.33,
        0,
    ],
    [ //炭谷
        38,
        78,
        70,
        57,
        49,
        6.34,
    ],
    [ //大城
        37,
        128,
        113,
        158,
        150.67,
        22,
    ],
    [ //岸田
        3,
        5.33,
        37,
        9,
        7,
        44,
    ],
];
var starting_games20 = [
    [2, 0, 0, 1, 3, 0], //小林
    [5, 10, 8, 6, 6, 0], //炭谷
    [3, 14, 14, 19, 18, 3], //大城
    [0, 0, 3, 0, 0, 5], //その他
];
//小林,炭谷,大城,その他
var stolen_bases20 = [2, 11, 31, 4];
var total_innings20 = get_total_by_row(innings20);
var innings20 = get_percentage_of_total(innings20);
var total_starting_games20 = get_total_by_row(starting_games20);
var starting_games20 = get_percentage_of_total(starting_games20);

var innings19 = [
    [
        19,
        89,
        86,
        80,
        90,
        131,
        96,
    ],
    [
        7,
        52,
        75,
        73,
        93.33,
        5,
        43.67,
    ],
    [
        0,
        62,
        43,
        37,
        25,
        87.67,
        51.67,
    ],
    [
        0,
        0,
        6,
        5,
        0,
        21,
        1,
    ],
];
var starting_games19 = [
    [ //小林
        2,
        11,
        10,
        9,
        10,
        15,
        11,
    ],
    [ //炭谷
        1,
        6,
        9,
        8,
        11,
        1,
        5,
    ],
    [ //大城
        0,
        6,
        4,
        4,
        2,
        9,
        5,
    ],
    [ //その他
        0,
        0,
        0,
        1,
        0,
        2,
        1,
    ],
];
var stolen_bases19 = [18, 24, 24, 3];
var total_innings19 = get_total_by_row(innings19);
var innings19 = get_percentage_of_total(innings19);
var total_starting_games19 = get_total_by_row(starting_games19);
var starting_games19 = get_percentage_of_total(starting_games19);

var innings18 = [
    [ //小林
        16,
        173,
        127.67,
        164.33,
        43.67,
        156.33,
        96,
        24,
    ],
    [ //大城
        2,
        28,
        85,
        27,
        83,
        63,
        72,
        2,
    ],
    [ //宇佐見
        0,
        0,
        0,
        10,
        81,
        22,
        1,
        0,
    ],
    [ //河野
        0,
        1,
        0,
        2,
        0,
        0,
        0,
        0,
    ],
];
var starting_games18 = [
    [ //小林
        2,
        20,
        16,
        21,
        4,
        19,
        11,
        3,
    ],
    [ //大城
        0,
        3,
        8,
        2,
        9,
        6,
        7,
        0,
    ],
    [ //宇佐見
        0,
        0,
        0,
        0,
        10,
        2,
        0,
        0,
    ],
    [ //河野
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ],
];
var stolen_bases18 = [29, 28, 7, 0];
var total_innings18 = get_total_by_row(innings18);
var innings18 = get_percentage_of_total(innings18);
var total_starting_games18 = get_total_by_row(starting_games18);
var starting_games18 = get_percentage_of_total(starting_games18);

var options_prm = {
    responsive: true,
    plugins: {
        title: {
            display: false,
            // text: 'Chart.js Line Chart - Stacked Area'
        },
        tooltip: {
            mode: 'index',
        },
        legend: {
          position: 'right',
          labels: {
            boxWidth: 12
          }
        }
    },
    hover: {
        mode: 'index'
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true
        }
      },
      y: {
        stacked: true,
        display: true,
        title: {
          display: true,
          text: 'percent of total in team'
        },
        max: 100
      },
    },
};

// 2024
var innings24_ctx_config = {
  type: 'line',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings24.p[0],
          fill: true
      }, {
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings24.p[1],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings24.p[2],
          fill: true
      }, {
          label: '山瀬',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings24.p[3],
          fill: true
    }]
  },
  options: options_prm
};
var starting_games24_ctx_config = {
  type: 'line',
  data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games24.p[0],
          fill: true
      }, {
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games24.p[1],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games24.p[2],
          fill: true
      }, {
          label: '山瀬',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games24.p[3],
          fill: true
      }]
  },
  options: options_prm
};

// 2023
var innings23_ctx_config = {
  type: 'line',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings23.p[0],
          fill: true
      }, {
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings23.p[1],
          fill: true
      }, {
          label: '山瀬',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings23.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings23.p[3],
          fill: true
    }]
  },
  options: options_prm
};
var starting_games23_ctx_config = {
  type: 'line',
  data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games23.p[0],
          fill: true
      }, {
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games23.p[1],
          fill: true
      }, {
          label: '山瀬',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games23.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games23.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings22_ctx_config = {
  type: 'line',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings22.p[0],
          fill: true
      }, {
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings22.p[1],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings22.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings22.p[3],
          fill: true
    }]
  },
  options: options_prm
};
var starting_games22_ctx_config = {
  type: 'line',
  data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games22.p[0],
          fill: true
      }, {
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games22.p[1],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games22.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games22.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings21_ctx_config = {
  type: 'line',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings21.p[0],
          fill: true
      }, {
          label: '炭谷',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings21.p[1],
          fill: true
      }, {
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings21.p[2],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings21.p[3],
          fill: true
      }]
  },
  options: options_prm
};
var starting_games21_ctx_config = {
  type: 'line',
  data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games21.p[0],
          fill: true
      }, {
          label: '炭谷',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games21.p[1],
          fill: true
      }, {
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games21.p[2],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games21.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings20_ctx_config = {
  type: 'line',
  data: {
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [{
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings20.p[0],
          fill: true
      }, {
          label: '炭谷',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings20.p[1],
          fill: true
      }, {
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings20.p[2],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings20.p[3],
          fill: true
      }]
  },
  options: options_prm
};
var starting_games20_ctx_config = {
  type: 'line',
  data: {
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      datasets: [{
          label: '小林',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games20.p[0],
          fill: true
      }, {
          label: '炭谷',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games20.p[1],
          fill: true
      }, {
          label: '大城',
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games20.p[2],
          fill: true
      }, {
          label: '岸田',
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games20.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings19_ctx_config = {
    type: 'line',
    data: {
        labels: ['Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: '小林',
            lineTension: 0,
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: innings19.p[0],
            fill: true
        }, {
            label: '炭谷',
            lineTension: 0,
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: innings19.p[1],
            fill: true
        }, {
            label: '大城',
            lineTension: 0,
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            data: innings19.p[2],
            fill: true
        }, {
            label: 'その他',
            lineTension: 0,
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            data: innings19.p[3],
            fill: true
        }]
    },
    options: options_prm
};
var starting_games19_ctx_config = {
    type: 'line',
    data: {
        labels: ['Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: '小林',
            lineTension: 0,
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: starting_games19.p[0],
            fill: true
        }, {
            label: '炭谷',
            lineTension: 0,
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: starting_games19.p[1],
            fill: true
        }, {
            label: '大城',
            lineTension: 0,
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            data: starting_games19.p[2],
            fill: true
        }, {
            label: 'その他',
            lineTension: 0,
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            data: starting_games19.p[3],
            fill: true
        }]
    },
    options: options_prm
};

var innings18_ctx_config = {
    type: 'line',
    data: {
        labels: ['Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: '小林',
            lineTension: 0,
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: innings18.p[0],
            fill: true
        }, {
            label: '大城',
            lineTension: 0,
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            data: innings18.p[1],
            fill: true
        }, {
            label: '宇佐見',
            lineTension: 0,
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            data: innings18.p[2],
            fill: true
        }, {
            label: '河野',
            lineTension: 0,
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: innings18.p[3],
            fill: true
        }]
    },
    options: options_prm
};
var starting_games18_ctx_config = {
    type: 'line',
    data: {
        labels: ['Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: '小林',
            lineTension: 0,
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: starting_games18.p[0],
            fill: true
        }, {
            label: '大城',
            lineTension: 0,
            borderColor: window.chartColors.yellow,
            backgroundColor: window.chartColors.yellow,
            data: starting_games18.p[1],
            fill: true
        }, {
            label: '宇佐見',
            lineTension: 0,
            borderColor: window.chartColors.green,
            backgroundColor: window.chartColors.green,
            data: starting_games18.p[2],
            fill: true
        }, {
            label: '河野',
            lineTension: 0,
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: starting_games18.p[3],
            fill: true
        }]
    },
    options: options_prm
};

window.addEventListener('load', function(){
  var innings24_ctx = document.getElementById('canvas24innings').getContext('2d');
  window.line24innings = new Chart(innings24_ctx, innings24_ctx_config);
  var starting_games24_ctx = document.getElementById('canvas24startings').getContext('2d');
  window.line24startings = new Chart(starting_games24_ctx, starting_games24_ctx_config);
});

document.getElementById('redraw_canvas24innings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(innings24_ctx_config, innings24, 'innings')
  window.line24innings.update();
});

document.getElementById('redraw_canvas24startings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(starting_games24_ctx_config, starting_games24, 'games')
  window.line24startings.update();
});

document.getElementById('redraw_canvas23innings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(innings23_ctx_config, innings23, 'innings')
  window.line23innings.update();
});

document.getElementById('redraw_canvas23startings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(starting_games23_ctx_config, starting_games23, 'games')
  window.line23startings.update();
});

document.getElementById('redraw_canvas22innings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(innings22_ctx_config, innings22, 'innings')
  window.line22innings.update();
});

document.getElementById('redraw_canvas22startings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(starting_games22_ctx_config, starting_games22, 'games')
  window.line22startings.update();
});

document.getElementById('redraw_canvas21innings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings21_ctx_config, innings21, 'innings')
    window.line21innings.update();
});

document.getElementById('redraw_canvas21startings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games21_ctx_config, starting_games21, 'games')
    window.line21startings.update();
});

document.getElementById('redraw_canvas20innings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings20_ctx_config, innings20, 'innings')
    window.line20innings.update();
});

document.getElementById('redraw_canvas20startings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games20_ctx_config, starting_games20, 'games')
    window.line20startings.update();
});

document.getElementById('redraw_canvas19innings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings19_ctx_config, innings19, 'innings')
    window.line19innings.update();
});

document.getElementById('redraw_canvas19startings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games19_ctx_config, starting_games19, 'games')
    window.line19startings.update();
});

document.getElementById('redraw_canvas18innings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings18_ctx_config, innings18, 'innings')
    window.line18innings.update();
});

document.getElementById('redraw_canvas18startings').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games18_ctx_config, starting_games18, 'games')
    window.line18startings.update();
});

// Pie Chart 2024 Defense_inning
var ctx24 = document.getElementById("pie24innings");
var pie24innings = new Chart(ctx24, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "岸田", "山瀬"],
    datasets: [{
      data: total_innings24,
      backgroundColor: ['#ffc107', '#007bff', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2024 v2 Starting_games
var ctx24v2 = document.getElementById("pie24startings");
var pie24startings = new Chart(ctx24v2, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "岸田", "山瀬"],
    datasets: [{
      data: total_starting_games24,
      backgroundColor: ['#ffc107', '#007bff', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2024 v3 stolen_bases
var ctx24v3 = document.getElementById("pie24stolenbases");
var pie24stolenbases = new Chart(ctx24v3, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "岸田", "山瀬"],
    datasets: [{
      data: stolen_bases24,
      backgroundColor: ['#ffc107', '#007bff', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Pie Chart 2023 Defense_inning
var ctx23 = document.getElementById("pie23innings");
var pie23innings = new Chart(ctx23, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "山瀬", "その他"],
    datasets: [{
      data: total_innings23,
      backgroundColor: ['#ffc107', '#007bff', '#dc3545', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2023 v2 Starting_games
var ctx23v2 = document.getElementById("pie23startings");
var pie23startings = new Chart(ctx23v2, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "山瀬", "その他"],
    datasets: [{
      data: total_starting_games23,
      backgroundColor: ['#ffc107', '#007bff', '#dc3545', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2023 v3 stolen_bases
var ctx23v3 = document.getElementById("pie23stolenbases");
var pie23stolenbases = new Chart(ctx23v3, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "山瀬", "その他"],
    datasets: [{
      data: stolen_bases23,
      backgroundColor: ['#ffc107', '#007bff', '#dc3545', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Pie Chart 2022 Defense_inning
var ctx22 = document.getElementById("pie22innings");
var pie22innings = new Chart(ctx22, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "岸田", "その他"],
    datasets: [{
      data: total_innings22,
      backgroundColor: ['#ffc107', '#007bff', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2022 v2 Starting_games
var ctx22v2 = document.getElementById("pie22startings");
var pie22startings = new Chart(ctx22v2, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "岸田", "その他"],
    datasets: [{
      data: total_starting_games22,
      backgroundColor: ['#ffc107', '#007bff', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2022 v3 stolen_bases
var ctx22v3 = document.getElementById("pie22stolenbases");
var pie22stolenbases = new Chart(ctx22v3, {
  type: 'pie',
  data: {
    labels: ["大城", "小林", "岸田", "その他"],
    datasets: [{
      data: stolen_bases22,
      backgroundColor: ['#ffc107', '#007bff', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Pie Chart 2021 Defense_inning
var ctx21 = document.getElementById("pie21innings");
var pie21innings = new Chart(ctx21, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: total_innings21,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2021 v2 Starting_games
var ctx21v2 = document.getElementById("pie21startings");
var pie21startings = new Chart(ctx21v2, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: total_starting_games21,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2021 v3 stolen_bases
var ctx21v3 = document.getElementById("pie21stolenbases");
var pie21stolenbases = new Chart(ctx21v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: stolen_bases21,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Pie Chart 2020 Defense_inning
var ctx20 = document.getElementById("pie20innings");
var pie20innings = new Chart(ctx20, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: total_innings20,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2020 v2 Starting_games
var ctx20v2 = document.getElementById("pie20startings");
var pie20startings = new Chart(ctx20v2, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: total_starting_games20,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});
// Pie Chart 2020 v3 stolen_bases
var ctx20v3 = document.getElementById("pie20stolenbases");
var pie20stolenbases = new Chart(ctx20v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: stolen_bases20,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Pie Chart 2019 Defense_inning
var ctx19 = document.getElementById("pie19innings");
var pie19innings = new Chart(ctx19, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: total_innings19,
    //   data: [591, 349, 306.33, 33],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
  }
});
// Pie Chart 2019 v2 Starting_games
var ctx19v2 = document.getElementById("pie19startings");
var pie19startings = new Chart(ctx19v2, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: total_starting_games19,
    //   data: [68, 41, 30, 4],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
  }
});
// Pie Chart 2019 v3 stolen_bases
var ctx19v3 = document.getElementById("pie19stolenbases");
var pie19stolenbases = new Chart(ctx19v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: stolen_bases19,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Pie Chart 2018 Defense_inning
var ctx18 = document.getElementById("pie18innings");
var pie18innings = new Chart(ctx18, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: total_innings18,
    //   data: [801, 362, 114, 3],
      backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12
        }
      }
    },
  }
});
// Pie Chart 2018 v2 Starting_games
var ctx18v2 = document.getElementById("pie18startings");
var pie18startings = new Chart(ctx18v2, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: total_starting_games18,
    //   data: [96, 35, 12, 0],
      backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12
        }
      }
    },
  }
});
// Pie Chart 2018 v3 stolen_bases
var ctx18v3 = document.getElementById("pie18stolenbases");
var pie18stolenbases = new Chart(ctx18v3, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: stolen_bases18,
    //   data: [29, 28, 7, 0],
      backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true
        }
      }
    },
    responsive: true,
  }
});

// Bar Chart
// Bar Chart 2024
var ctx24 = document.getElementById("bar24wins");
var myLineChart24 = new Chart(ctx24, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data24.Winning_games[0],
      },
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data24.Winning_games[1],
      },
      {
        label: "岸田",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data24.Winning_games[2],
      },
      {
        label: "山瀬",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: pie_data24.Winning_games[3],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});

// Bar Chart 2023
var ctx23 = document.getElementById("bar23wins");
var myLineChart23 = new Chart(ctx23, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data23.Winning_games[0],
      },
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data23.Winning_games[1],
      },
      {
        label: "山瀬",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: pie_data23.Winning_games[2],
      },
      {
        label: "その他",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data23.Winning_games[3],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});

// Bar Chart 2022
var ctx22 = document.getElementById("bar22wins");
var myLineChart22 = new Chart(ctx22, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data22.Winning_games[0],
      },
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data22.Winning_games[1],
      },
      {
        label: "岸田",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data22.Winning_games[2],
      },
      {
        label: "その他",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: pie_data22.Winning_games[3],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});

// Bar Chart 2021
var ctx21 = document.getElementById("myBarChart21");
var myLineChart21 = new Chart(ctx21, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data21.Winning_games[0],
      },
      {
        label: "炭谷",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: pie_data21.Winning_games[1],
      },
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data21.Winning_games[2],
      },
      {
        label: "岸田",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data21.Winning_games[3],
      }
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});

// Bar Chart 2020
var ctx20 = document.getElementById("myBarChart20");
var myLineChart20 = new Chart(ctx20, {
  type: 'bar',
  data: {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [2, 0, 0, 1, 2, 0],
      },
      {
        label: "炭谷",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: [4, 5, 4, 2, 2, 0],
      },
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: [1, 9, 8, 16, 6, 1],
      },
      {
        label: "岸田",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: [0, 0, 2, 0, 0, 2],
      }
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});

// Bar Chart 2019
var ctx19 = document.getElementById("myBarChart19");
var myLineChart19 = new Chart(ctx19, {
  type: 'bar',
  data: {
    labels: ["3・4月", "5月", "6月", "7月", "8月", "9月"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [8, 2, 7, 7, 10, 7],
      },
      {
        label: "炭谷",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: [4, 4, 7, 4, 0, 1],
      },
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: [4, 3, 1, 2, 5, 1],
      },
      {
        label: "その他",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: [0, 0, 0, 0, 0, 0],
      }
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});

// Bar Chart 2018
var ctx18 = document.getElementById("myBarChart18");
var myLineChart18 = new Chart(ctx18, {
  type: 'bar',
  data: {
    labels: ["3・4月", "5月", "6月", "7月", "8月", "9・10月"],
    datasets: [
      {
        label: "小林",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: [12, 7, 9, 2, 9, 6],
      },
      {
        label: "大城",
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: [2, 2, 1, 3, 3, 3],
      },
      {
        label: "宇佐見",
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: [0, 0, 0, 7, 1, 1],
      },
      {
        label: "河野",
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: [0, 0, 0, 0, 0, 0],
      }
    ],
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 12
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }
});
