$(document).ready(function(){
   
    //getCovidDailyConfirmed();
   
});

//get Covid Daily Confirmed count
function getCovidDailyConfirmed(){
    $.ajax({
        url: "https://api.covid19india.org/data.json", 
        success: function(result){
            var x = ['x'];
            var dialyConfirmed = ['Daily Confirmed'];
            var dailyRecovered = ['Daily Recovered']; 
            var dailyDeceased = ['Daily Deceased'];

           $.each(result.cases_time_series,function(i){
                //console.log(result.cases_time_series[i]);
                x.push(result.cases_time_series[i].dateymd);
                dialyConfirmed.push(result.cases_time_series[i].dailyconfirmed);
                dailyRecovered.push(result.cases_time_series[i].dailyrecovered);
                dailyDeceased.push(result.cases_time_series[i].dailydeceased);
           });

           createChart(x,dialyConfirmed,dailyRecovered);
           getDailyDeceased(x,dailyDeceased);
        }
    });
}
    
function createChart(xVal,dialyConfirmed,dailyRecovered){
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'x',
            columns: [  
                xVal,dialyConfirmed,dailyRecovered
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });
}

function getDailyDeceased(xVal,dailyDeceased){
    var chart = c3.generate({
        bindto: '#chartD',
        data: {
            x: 'x',
            columns: [  
                xVal,dailyDeceased
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });
}





