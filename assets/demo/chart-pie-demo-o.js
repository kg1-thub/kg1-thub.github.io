// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var pie_data25 = {'Catcher': ['森', '若月', '福永', 'その他'], 'Defense_inning': [[0, 0, 18.0, 53.0, 18.0, 0, 0, 0], [22.0, 179.67, 114.67, 108.33, 141.0, 18.0, 0, 0], [6.0, 41.0, 55.0, 36.0, 36.0, 0, 0, 0], [0, 0, 2.0, 0, 0, 0, 0, 0]], 'Starting_games': [[0, 0, 2, 6, 2, 0, 0, 0], [2, 18, 13, 11, 16, 2, 0, 0], [1, 6, 6, 5, 4, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], 'Winning_games': [[0, 0, 0, 3, 1, 0, 0, 0], [1, 11, 5, 9, 7, 1, 0, 0], [1, 2, 5, 1, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]};
var catchers = ['森', '若月', '福永'];

var innings25 = pie_data25.Defense_inning;
var starting_games25 = pie_data25.Starting_games;
var wins25 = pie_data25.Winning_games;
var total_innings25 = get_total_by_row(innings25);
var innings25 = get_percentage_of_total(innings25);
var total_starting_games25 = get_total_by_row(starting_games25);
var starting_games25 = get_percentage_of_total(starting_games25);
var total_wins25 = get_total_by_row(wins25);
var wins25 = get_percentage_of_total(wins25);

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

// 2025
var innings25_ctx_config = {
  type: 'line',
  data: {
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [{
          label: catchers[0],
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: innings25.p[0],
          fill: true
      }, {
          label: catchers[1],
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: innings25.p[1],
          fill: true
      }, {
          label: catchers[2],
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: innings25.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: innings25.p[3],
          fill: true
    }]
  },
  options: options_prm
};
var starting_games25_ctx_config = {
  type: 'line',
  data: {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [{
          label: catchers[0],
          lineTension: 0,
          borderColor: window.chartColors.yellow,
          backgroundColor: window.chartColors.yellow,
          data: starting_games25.p[0],
          fill: true
      }, {
          label: catchers[1],
          lineTension: 0,
          borderColor: window.chartColors.red,
          backgroundColor: window.chartColors.red,
          data: starting_games25.p[1],
          fill: true
      }, {
          label: catchers[2],
          lineTension: 0,
          borderColor: window.chartColors.green,
          backgroundColor: window.chartColors.green,
          data: starting_games25.p[2],
          fill: true
      }, {
          label: 'その他',
          lineTension: 0,
          borderColor: window.chartColors.blue,
          backgroundColor: window.chartColors.blue,
          data: starting_games25.p[3],
          fill: true
      }]
  },
  options: options_prm
};

var innings25_ctx = document.getElementById('canvas25innings').getContext('2d');
var line25innings = new Chart(innings25_ctx, innings25_ctx_config);
var starting_games25_ctx = document.getElementById('canvas25startings').getContext('2d');
var line25startings = new Chart(starting_games25_ctx, starting_games25_ctx_config);

document.getElementById('redraw_canvas25innings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(innings25_ctx_config, innings25, 'innings')
  window.line25innings.update();
});

document.getElementById('redraw_canvas25startings').addEventListener('click', function() {
  switch_chart_type_line_to_bar(starting_games25_ctx_config, starting_games25, 'games')
  window.line25startings.update();
});

// Pie Chart 2025 Defense_inning
var ctx25 = document.getElementById("pie25innings");
var pie25innings = new Chart(ctx25, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], 'その他'],
    datasets: [{
      data: total_innings25,
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
// Pie Chart 2025 v2 Starting_games
var ctx25v2 = document.getElementById("pie25startings");
var pie25startings = new Chart(ctx25v2, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], 'その他'],
    datasets: [{
      data: total_starting_games25,
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
// Pie Chart 2025 v3 wins
var ctx25v3 = document.getElementById("pie25wins");
var pie25wins = new Chart(ctx25v3, {
  type: 'pie',
  data: {
    labels: [catchers[0], catchers[1], catchers[2], 'その他'],
    datasets: [{
      data: total_wins25,
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
// Bar Chart 2025
var ctx25 = document.getElementById("bar25wins");
var myLineChart25 = new Chart(ctx25, {
  type: 'bar',
  data: {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: catchers[0],
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
        data: pie_data25.Winning_games[0],
      },
      {
        label: catchers[1],
        backgroundColor: "#dc3545",
        borderColor: "#dc3545",
        data: pie_data25.Winning_games[1],
      },
      {
        label: catchers[2],
        backgroundColor: "#28a745",
        borderColor: "#28a745",
        data: pie_data25.Winning_games[2],
      },
      {
        label: 'その他',
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: pie_data25.Winning_games[3],
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
