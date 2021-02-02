/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// (function($) {
//     "use strict";

//     // Add active state to sidbar nav links
//     var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
//         $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
//             if (this.href === path) {
//                 $(this).addClass("active");
//             }
//         });

//     // Toggle the side navigation
//     $("#sidebarToggle").on("click", function(e) {
//         e.preventDefault();
//         $("body").toggleClass("sb-sidenav-toggled");
//     });
// })(jQuery);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
});

function tab_change(year) {
    if (year.length>0) {
        // var years = ['2021', '2020', '2019', '2018'];
        var years = ['2020', '2019', '2018'];
        for (i=0; i<years.length; i++) {
            if (years[i]==year) {
                $(".dropdown-toggle")[0].innerText=year;
                document.getElementById('t'+year).classList.add('active');''
                document.getElementById('d'+year).classList.add('d-none');
            } else {
                document.getElementById('t'+years[i]).classList.remove('active');
                document.getElementById('d'+years[i]).classList.remove('d-none');
            }
        };
    };
};

// document.getElementById('d2021').addEventListener('click', function() {
//     tab_change('2021');
// });
document.getElementById('d2020').addEventListener('click', function() {
    tab_change('2020');
});
document.getElementById('d2019').addEventListener('click', function() {
    tab_change('2019');
});
document.getElementById('d2018').addEventListener('click', function() {
    tab_change('2018');
});


$(document).ready(function() {
    var year = location.hash.substring(1, 5);
    if (year.length>0) {
        tab_change(year);
    };
});


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
        delete config.options.scales.yAxes[0].ticks.max;
        config.options.scales.yAxes[0].scaleLabel.labelString = unit;
        config.data.datasets.forEach(function(dataset, index) {
            dataset.data = sample_list.v[index];
        });
    } else {
        config.type='line';
        config.options.scales.yAxes[0].ticks.max = 100;
        config.options.scales.yAxes[0].scaleLabel.labelString = 'percent of total in team';
        config.data.datasets.forEach(function(dataset, index) {
            dataset.data = sample_list.p[index];
        });
    }
};
