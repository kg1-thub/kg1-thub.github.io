// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var pie_data21 = {'Catcher': ['小林', '炭谷', '大城', '岸田'], 'Stealing_bases': [7, 12, 24, 0], 'Defense_inning': [[7.0, 4.0, 0, 41.0, 30.33, 32.0, 83.0, 0], [1.0, 46.0, 82.0, 40.0, 1.0, 0, 0, 0], [36.0, 166.0, 101.0, 113.0, 59.67, 97.0, 85.67, 0], [0, 4.0, 12.0, 0, 4.0, 4.0, 32.33, 0]], 'Starting_games': [[0, 0, 0, 4, 4, 2, 9, 0], [0, 4, 10, 4, 0, 0, 0, 0], [5, 21, 12, 14, 7, 13, 12, 0], [0, 0, 0, 0, 0, 0, 2, 0]], 'Winning_games': [[1, 0, 0, 1, 1, 0, 3, 0], [0, 1, 5, 1, 0, 0, 0, 0], [1, 13, 5, 10, 4, 8, 2, 0], [0, 0, 0, 0, 0, 0, 1, 0]]};

var innings21 = pie_data21.Defense_inning;
var starting_games21 = pie_data21.Starting_games;
var stealing_bases21 = pie_data21.Stealing_bases;

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
var stealing_bases20 = [2, 11, 31, 4];

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

var stealing_bases19 = [18, 24, 24, 3];

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

var stealing_bases18 = [29, 28, 7, 0];

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
          position: 'right'
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

window.onload = function() {
    var innings21_ctx = document.getElementById('innings21canvas').getContext('2d');
    window.myLine21v1 = new Chart(innings21_ctx, innings21_ctx_config);
    var starting_games21_ctx = document.getElementById('starting_games21canvas').getContext('2d');
    window.myLine21v2 = new Chart(starting_games21_ctx, starting_games21_ctx_config);
};

document.getElementById('innings21redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings21_ctx_config, innings21, 'innings')
    window.myLine21v1.update();
});

document.getElementById('starting_games21redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games21_ctx_config, starting_games21, 'games')
    window.myLine21v2.update();
});

document.getElementById('innings20redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings20_ctx_config, innings20, 'innings')
    window.myLine20v1.update();
});

document.getElementById('starting_games20redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games20_ctx_config, starting_games20, 'games')
    window.myLine20v2.update();
});

document.getElementById('innings19redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings19_ctx_config, innings19, 'innings')
    window.myLine19v1.update();
});

document.getElementById('starting_games19redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games19_ctx_config, starting_games19, 'games')
    window.myLine19v2.update();
});

document.getElementById('innings18redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(innings18_ctx_config, innings18, 'innings')
    window.myLine18v1.update();
});

document.getElementById('starting_games18redraw').addEventListener('click', function() {
    switch_chart_type_line_to_bar(starting_games18_ctx_config, starting_games18, 'games')
    window.myLine18v2.update();
});


// Pie Chart 2021 Defense_inning
var ctx21 = document.getElementById("myPieChart21");
var myPieChart21 = new Chart(ctx21, {
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
        position: 'right'
      }
    },
    responsive: true,
  }
});
// Pie Chart 2021 v2 Starting_games
var ctx21v2 = document.getElementById("myPieChart21v2");
var myPieChart21v2 = new Chart(ctx21v2, {
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
        position: 'right'
      }
    },
    responsive: true,
  }
});
// Pie Chart 2021 v3 Stealing_bases
var ctx21v3 = document.getElementById("myPieChart21v3");
var myPieChart21v3 = new Chart(ctx21v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: stealing_bases21,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right'
      }
    },
    responsive: true,
  }
});

// Pie Chart 2020 Defense_inning
var ctx20 = document.getElementById("myPieChart20");
var myPieChart20 = new Chart(ctx20, {
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
        position: 'right'
      }
    },
    responsive: true,
  }
});
// Pie Chart 2020 v2 Starting_games
var ctx20v2 = document.getElementById("myPieChart20v2");
var myPieChart20v2 = new Chart(ctx20v2, {
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
        position: 'right'
      }
    },
    responsive: true,
  }
});
// Pie Chart 2020 v3 Stealing_bases
var ctx20v3 = document.getElementById("myPieChart20v3");
var myPieChart20v3 = new Chart(ctx20v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: stealing_bases20,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right'
      }
    },
    responsive: true,
  }
});

// Pie Chart 2019 Defense_inning
var ctx19 = document.getElementById("myPieChart19");
var myPieChart19 = new Chart(ctx19, {
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
        position: 'right'
      }
    },
  }
});
// Pie Chart 2019 v2 Starting_games
var ctx19v2 = document.getElementById("myPieChart19v2");
var myPieChart19v2 = new Chart(ctx19v2, {
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
        position: 'right'
      }
    },
  }
});
// Pie Chart 2019 v3 Stealing_bases
var ctx19v3 = document.getElementById("myPieChart19v3");
var myPieChart19v3 = new Chart(ctx19v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: stealing_bases19,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right'
      }
    },
    responsive: true,
  }
});

// Pie Chart 2018 Defense_inning
var ctx18 = document.getElementById("myPieChart18");
var myPieChart18 = new Chart(ctx18, {
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
        position: 'right'
      }
    },
  }
});
// Pie Chart 2018 v2 Starting_games
var ctx18v2 = document.getElementById("myPieChart18v2");
var myPieChart18v2 = new Chart(ctx18v2, {
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
        position: 'right'
      }
    },
  }
});
// Pie Chart 2018 v3 Stealing_bases
var ctx18v3 = document.getElementById("myPieChart18v3");
var myPieChart18v3 = new Chart(ctx18v3, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: stealing_bases18,
    //   data: [29, 28, 7, 0],
      backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545'],
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right'
      }
    },
    responsive: true,
  }
});

// Bar Chart
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
        position: 'top'
        // position: 'right'
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
        position: 'top'
        // position: 'right'
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
        position: 'top'
        // position: 'right'
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
        position: 'top'
        // position: 'right'
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
