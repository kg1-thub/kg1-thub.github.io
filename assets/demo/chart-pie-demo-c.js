// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var pie_data26 = {'Catcher': ['坂倉', '石原', '會澤', 'その他'], 'Defense_inning': [[36.0, 51.0, 0, 0, 0, 0, 0, 0], [0, 3.67, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], 'Starting_games': [[4, 6, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], 'Winning_games': [[3, 2, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]};
var catchers = ['坂倉', '石原', '會澤'];

var innings26 = pie_data26.Defense_inning;
var starting_games26 = pie_data26.Starting_games;
var wins26 = pie_data26.Winning_games;
var total_innings26 = get_total_by_row(innings26);
var innings26 = get_percentage_of_total(innings26);
var total_starting_games26 = get_total_by_row(starting_games26);
var starting_games26 = get_percentage_of_total(starting_games26);
var total_wins26 = get_total_by_row(wins26);
var wins26 = get_percentage_of_total(wins26);

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

// 2026
var innings26_ctx_config = {
  type: 'line',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
          label: catchers[0],
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings26.p[0],
          fill: true
      }, {
          label: catchers[1],
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings26.p[1],
          fill: true
      }, {
          label: catchers[2],
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings26.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings26.p[3],
          fill: true
    }]
  },
  options: options_prm
};
var starting_games26_ctx_config = {
  type: 'line',
  data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
          label: catchers[0],
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games26.p[0],
          fill: true
      }, {
          label: catchers[1],
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games26.p[1],
          fill: true
      }, {
          label: catchers[2],
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games26.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games26.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings26_ctx = document.getElementById('canvas26innings').getContext('2d');
var line26innings = new Chart(innings26_ctx, innings26_ctx_config);
var starting_games26_ctx = document.getElementById('canvas26startings').getContext('2d');
var line26startings = new Chart(starting_games26_ctx, starting_games26_ctx_config);

document.getElementById('redraw_canvas26innings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(innings26_ctx_config, innings26, 'innings')
  window.line26innings.update();
});

document.getElementById('redraw_canvas26startings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(starting_games26_ctx_config, starting_games26, 'games')
  window.line26startings.update();
});

// Pie Chart 2026 Defense_inning
var ctx26 = document.getElementById("pie26innings");
var pie26innings = new Chart(ctx26, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], 'その他'],
    datasets: [{
      data: total_innings26,
      backgroundColor: ['#ffc107', '#dc3545', '#28a745', '#007bff'],
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
// Pie Chart 2026 v2 Starting_games
var ctx26v2 = document.getElementById("pie26startings");
var pie26startings = new Chart(ctx26v2, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], 'その他'],
    datasets: [{
      data: total_starting_games26,
      backgroundColor: ['#ffc107', '#dc3545', '#28a745', '#007bff'],
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
// Pie Chart 2026 v3 wins
var ctx26v3 = document.getElementById("pie26wins");
var pie26wins = new Chart(ctx26v3, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], 'その他'],
    datasets: [{
      data: total_wins26,
      backgroundColor: ['#ffc107', '#dc3545', '#28a745', '#007bff'],
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
// Bar Chart 2026
var ctx26 = document.getElementById("bar26wins");
var myLineChart26 = new Chart(ctx26, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: catchers[0],
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data26.Winning_games[0],
      },
      {
        label: catchers[1],
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: pie_data26.Winning_games[1],
      },
      {
        label: catchers[2],
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data26.Winning_games[2],
      },
      {
        label: 'その他',
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data26.Winning_games[3],
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
