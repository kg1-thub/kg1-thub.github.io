// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var pie_data24 = {'Catcher': ['山本', '伊藤', '戸柱', '松尾'], 'stolen_bases': [35, 14, 8, 1], 'Defense_inning': [[18.0, 150.0, 160.33, 138.67, 166.33, 172.33, 87.67, 0], [9.0, 35.0, 11.33, 25.0, 17.0, 9.0, 31.0, 0], [0, 5.0, 44.0, 24.0, 11.0, 18.0, 22.0, 0], [0, 14.0, 0, 0, 3.0, 8.0, 0, 0]], 'Starting_games': [[2, 17, 18, 15, 19, 19, 10, 0], [1, 4, 1, 3, 2, 1, 3, 0], [0, 0, 5, 3, 1, 2, 2, 0], [0, 2, 0, 0, 0, 1, 0, 0]], 'Winning_games': [[2, 7, 10, 10, 7, 10, 5, 0], [0, 1, 0, 2, 0, 0, 3, 0], [0, 0, 2, 1, 2, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0]]};
var catchers = ['山本', '伊藤', '戸柱', '松尾'];

var innings24 = pie_data24.Defense_inning;
var starting_games24 = pie_data24.Starting_games;
var stolen_bases24 = pie_data24.stolen_bases;
var total_innings24 = get_total_by_row(innings24);
var innings24 = get_percentage_of_total(innings24);
var total_starting_games24 = get_total_by_row(starting_games24);
var starting_games24 = get_percentage_of_total(starting_games24);

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
          label: catchers[0],
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings24.p[0],
          fill: true
      }, {
          label: catchers[1],
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings24.p[1],
          fill: true
      }, {
          label: catchers[2],
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings24.p[2],
          fill: true
      }, {
          label: 'その他',
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
          label: catchers[0],
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games24.p[0],
          fill: true
      }, {
          label: catchers[1],
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games24.p[1],
          fill: true
      }, {
          label: catchers[2],
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games24.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games24.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings24_ctx = document.getElementById('canvas24innings').getContext('2d');
var line24innings = new Chart(innings24_ctx, innings24_ctx_config);
var starting_games24_ctx = document.getElementById('canvas24startings').getContext('2d');
var line24startings = new Chart(starting_games24_ctx, starting_games24_ctx_config);

document.getElementById('redraw_canvas24innings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(innings24_ctx_config, innings24, 'innings')
  window.line24innings.update();
});

document.getElementById('redraw_canvas24startings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(starting_games24_ctx_config, starting_games24, 'games')
  window.line24startings.update();
});

// Pie Chart 2024 Defense_inning
var ctx24 = document.getElementById("pie24innings");
var pie24innings = new Chart(ctx24, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], "その他"],
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
    labels: [catchers[0], catchers[1], catchers[2], "その他"],
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
    labels: [catchers[0], catchers[1], catchers[2], "その他"],
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

// Bar Chart
// Bar Chart 2024
var ctx24 = document.getElementById("bar24wins");
var myLineChart24 = new Chart(ctx24, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: catchers[0],
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data24.Winning_games[0],
      },
      {
        label: catchers[1],
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data24.Winning_games[1],
      },
      {
        label: catchers[2],
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data24.Winning_games[2],
      },
      {
        label: "その他",
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
