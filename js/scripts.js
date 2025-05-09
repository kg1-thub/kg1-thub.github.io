/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
var years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});

function tab_change(year) {
    if (year.length>0) {
        // var years = ['2024','2023', '2022', '2021', '2020', '2019', '2018'];
        let tabYear;
        let ddYear;
        let tabYear_i;
        let ddYear_i;
        for (i=0; i<years.length; i++) {
            if (years[i]==year) {
                $(".dropdown-toggle")[0].innerText=year;
                tabYear = document.getElementById('t'+year);
                ddYear = document.getElementById('d'+year);
                if (tabYear && ddYear){
                    tabYear.classList.add('active');
                    ddYear.classList.add('d-none');
                }
                calmap_scroll_right();
            } else {
                // document.getElementById('t'+years[i]).classList.remove('active');
                // document.getElementById('d'+years[i]).classList.remove('d-none');
                tabYear_i = document.getElementById('t'+years[i]);
                ddYear_i = document.getElementById('d'+years[i]);
                if (tabYear_i && ddYear_i){
                    tabYear_i.classList.remove('active');
                    ddYear_i.classList.remove('d-none');
                }
                calmap_scroll_right();
            }
        };
        if (year != '2024') {
            downbtn.classList.add('d-none');
        } else {
            downbtn.classList.remove('d-none');
        }
    };
};

const dd2024 = document.getElementById('d2024');
if (dd2024){
    dd2024.addEventListener('click', function() {
        tab_change('2024');
        var innings24_ctx = document.getElementById('canvas24innings').getContext('2d');
        window.line24innings = new Chart(innings24_ctx, innings24_ctx_config);
        var starting_games24_ctx = document.getElementById('canvas24startings').getContext('2d');
        window.line24startings = new Chart(starting_games24_ctx, starting_games24_ctx_config);
        csvLoad('24');
    });
}
const dd2023 = document.getElementById('d2023');
if (dd2023){
    dd2023.addEventListener('click', function() {
        tab_change('2023');
        var innings23_ctx = document.getElementById('canvas23innings').getContext('2d');
        window.line23innings = new Chart(innings23_ctx, innings23_ctx_config);
        var starting_games23_ctx = document.getElementById('canvas23startings').getContext('2d');
        window.line23startings = new Chart(starting_games23_ctx, starting_games23_ctx_config);
        csvLoad('23');
    });
}
const dd2022 = document.getElementById('d2022');
if (dd2022){
    dd2022.addEventListener('click', function() {
        tab_change('2022');
        var innings22_ctx = document.getElementById('canvas22innings').getContext('2d');
        window.line22innings = new Chart(innings22_ctx, innings22_ctx_config);
        var starting_games22_ctx = document.getElementById('canvas22startings').getContext('2d');
        window.line22startings = new Chart(starting_games22_ctx, starting_games22_ctx_config);
        csvLoad('22');
    });
}
const dd2021 = document.getElementById('d2021');
if (dd2021){
    dd2021.addEventListener('click', function() {
        tab_change('2021');
        var innings21_ctx = document.getElementById('canvas21innings').getContext('2d');
        window.line21innings = new Chart(innings21_ctx, innings21_ctx_config);
        var starting_games21_ctx = document.getElementById('canvas21startings').getContext('2d');
        window.line21startings = new Chart(starting_games21_ctx, starting_games21_ctx_config);
    });
}
const dd2020 = document.getElementById('d2020');
if (dd2020){
    dd2020.addEventListener('click', function() {
        tab_change('2020');
        var innings20_ctx = document.getElementById('canvas20innings').getContext('2d');
        window.line20innings = new Chart(innings20_ctx, innings20_ctx_config);
        var starting_games20_ctx = document.getElementById('canvas20startings').getContext('2d');
        window.line20startings = new Chart(starting_games20_ctx, starting_games20_ctx_config);
    });
}
const dd2019 = document.getElementById('d2019');
if (dd2019){
    dd2019.addEventListener('click', function() {
        tab_change('2019');
        var innings19_ctx = document.getElementById('canvas19innings').getContext('2d');
        window.line19innings = new Chart(innings19_ctx, innings19_ctx_config);
        var starting_games19_ctx = document.getElementById('canvas19startings').getContext('2d');
        window.line19startings = new Chart(starting_games19_ctx, starting_games19_ctx_config);
    });
}
const dd2018 = document.getElementById('d2018');
if (dd2018){
    dd2018.addEventListener('click', function() {
        tab_change('2018');
        var innings18_ctx = document.getElementById('canvas18innings').getContext('2d');
        window.line18innings = new Chart(innings18_ctx, innings18_ctx_config);
        var starting_games18_ctx = document.getElementById('canvas18startings').getContext('2d');
        window.line18startings = new Chart(starting_games18_ctx, starting_games18_ctx_config);
    });
}

$(document).ready(function() {
    var year = location.hash.substring(1, 5);
    if (year.includes(years)) {
        tab_change(year);
    }
    calmap_scroll_right();
});

const tabCeLeague = document.getElementById('tab-ce-league');
const tabPaLeague = document.getElementById('tab-pa-league');
if (tabCeLeague && tabPaLeague){
    tabCeLeague.addEventListener('click', function() {
        console.log('clicked ce');
        document.getElementById('ce-league').classList.add('d-flex');
        document.getElementById('ce-league').classList.remove('d-none');
        document.getElementById('pa-league').classList.remove('d-flex');
        document.getElementById('pa-league').classList.add('d-none');
    });
    tabPaLeague.addEventListener('click', function() {
        console.log('clicked pa');
        document.getElementById('ce-league').classList.remove('d-flex');
        document.getElementById('ce-league').classList.add('d-none');
        document.getElementById('pa-league').classList.add('d-flex');
        document.getElementById('pa-league').classList.remove('d-none');
    });
}

function get_total_by_row(sample_list) {
    var total_by_row = Array(sample_list.length).fill(0);
    for (let i=0; i < sample_list.length; i++) {
        total_by_row[i] += sample_list[i].reduce((a,x) => a+x,0);;
    };
    return total_by_row;
};

function get_total(sample_list) {
    var total = Array(sample_list[0].length).fill(0);
    for (let i=0; i < sample_list.length; i++) {
        for (let j = 0; j < sample_list[i].length; j++) {
            total[j] += sample_list[i][j];
        }
    };
    return total;
};

function get_percentage_of_total(sample_list) {
    var total = get_total(sample_list);

    var sample_list_p = Array.from(new Array(sample_list.length), () => new Array(sample_list[0].length).fill(0))
    for (let i=0; i < sample_list.length; i++) {
        for (let j=0; j < sample_list[i].length; j++) {
            sample_list_p[i][j] += Math.round(sample_list[i][j]/total[j]*10000)/100;
        }
    };

    var result_list = {v: sample_list, p: sample_list_p};
    return result_list;
};


function switch_chart_type_line_to_bar(config, sample_list, unit) {
    if (config.type == 'line') {
        config.type = 'bar';
        delete config.options.scales.y.max;
        config.options.scales.y.title.text = unit;
        config.data.datasets.forEach(function(dataset, index) {
            dataset.data = sample_list.v[index];
        });
    } else {
        config.type='line';
        config.options.scales.y.max = 100;
        config.options.scales.y.title.text = 'percent of total in team';
        config.data.datasets.forEach(function(dataset, index) {
            dataset.data = sample_list.p[index];
        });
    }
};

function calmap_scroll_right() {
    var calmapR = document.getElementsByClassName('calmap-r');
    for (let i=0; i<calmapR.length; i++) {
        calmapR[i].scrollTo({top: 0, left: calmapR[i].scrollWidth, behavior: "smooth"});
    };
};

function minValue(ctx) {
    const dataset = ctx.chart.data.datasets[0];
    return dataset.data.reduce((max, point) => Math.min(point, max), Infinity);
};

function maxValue(ctx) {
    const datasets = ctx.chart.data.datasets;
    const count = datasets[0].data.length;
    let max = 0;
    for (let i = 0; i < count; i++) {
      let sum = 0;
      for (const dataset of datasets) {
        sum += dataset.data[i];
      }
      max = Math.max(max, sum);
    }
    return max;
};

//Get the button:
topbtn = document.getElementById("top-btn");
downbtn = document.getElementById("down-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topbtn.classList.remove('d-none');
    topbtn.classList.add('d-flex');
  } else {
    topbtn.classList.remove('d-flex');
    topbtn.classList.add('d-none');
  }
};

if (topbtn){
    topbtn.addEventListener("click", backToTop);
}
downbtn.addEventListener("click", goToDown);

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goToDown() {
    window.scrollBy({
        top: window.innerHeight*1.2,
        behavior: "smooth"
    });
}
