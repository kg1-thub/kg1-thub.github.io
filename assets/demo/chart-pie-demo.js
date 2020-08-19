// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart 2018 Defense_inning
var ctx18 = document.getElementById("myPieChart18");
var myPieChart18 = new Chart(ctx18, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: [801, 362, 114, 3],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2018 v2 Starting_games
var ctx18v2 = document.getElementById("myPieChart18v2");
var myPieChart18v2 = new Chart(ctx18v2, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: [96, 35, 12, 0],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2018 v3 Stealing_bases
var ctx18v3 = document.getElementById("myPieChart18v3");
var myPieChart18v3 = new Chart(ctx18v3, {
  type: 'pie',
  data: {
    labels: ["小林", "大城", "宇佐見", "河野"],
    datasets: [{
      data: [29, 28, 7, 0],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    }
  }
});

// Pie Chart 2019 Defense_inning
var ctx19 = document.getElementById("myPieChart19");
var myPieChart19 = new Chart(ctx19, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: [591, 349, 306.33, 33],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2019 v2 Starting_games
var ctx19v2 = document.getElementById("myPieChart19v2");
var myPieChart19v2 = new Chart(ctx19v2, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: [68, 41, 30, 4],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2019 v3 Stealing_bases
var ctx19v3 = document.getElementById("myPieChart19v3");
var myPieChart19v3 = new Chart(ctx19v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: [18, 24, 24, 3],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2020 Defense_inning
var ctx20 = document.getElementById("myPieChart20");
var myPieChart20 = new Chart(ctx20, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: [12, 152, 241, 29.33],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2020 v2 Starting_games
var ctx20v2 = document.getElementById("myPieChart20v2");
var myPieChart20v2 = new Chart(ctx20v2, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "岸田"],
    datasets: [{
      data: [2, 19, 26, 2],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    }
  }
});
// Pie Chart 2020 v3 Stealing_bases
var ctx20v3 = document.getElementById("myPieChart20v3");
var myPieChart20v3 = new Chart(ctx20v3, {
  type: 'pie',
  data: {
    labels: ["小林", "炭谷", "大城", "その他"],
    datasets: [{
      data: [0, 6, 12, 0],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    }
  }
});
