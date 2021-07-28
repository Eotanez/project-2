function myFunction(){
    var states = document.getElementById("mySelect").value;

    //United States of America
if (states === 'USA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart"></canvas>`;
    var ctx = document.getElementById('myChart').getContext('2d');
        
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 319249300'],
                datasets: [{
                    label: 'Population',
                    data: [191757100, 38872200, 59102900, 18007200, 2125700, 528200, 8856100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
    // Alabama
} else if (states === 'AL') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart1"></canvas>`;
    var ctx1 = document.getElementById('myChart1').getContext('2d');
        
        var myChart1 = new Chart(ctx1, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 4767100'],
                datasets: [{
                    label: 'Population',
                    data: [3117200, 1263500, 211700, 65200, 18800, 0, 89200],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
    //Alaska
} else if(states === 'AK'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart2"></canvas>`;
    var ctx2 = document.getElementById('myChart2').getContext('2d');
        
        var myChart2 = new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 701700'],
                datasets: [{
                    label: 'Population',
                    data: [421100, 15200, 48900, 42000, 106000, 10400, 58200],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Arizona
} else if (states === 'AZ'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart3"></canvas>`;
    var ctx3 = document.getElementById('myChart3').getContext('2d');
        
        var myChart3 = new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 7098000'],
                datasets: [{
                    label: 'Population',
                    data: [3843700, 306600, 2254800, 231000, 276100, 12500, 173400],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
        //Arkansas
} else if (states === 'AR'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart4"></canvas>`;
    var ctx4 = document.getElementById('myChart4').getContext('2d');
        
        var myChart4 = new Chart(ctx4, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 2922500'],
                datasets: [{
                    label: 'Population',
                    data: [2108400, 444200, 226800, 45500, 16700, 10800, 70100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
        //California
} else if(states === 'CA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart5"></canvas>`;
    var ctx5 = document.getElementById('myChart5').getContext('2d');
        
        var myChart5 = new Chart(ctx5, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 38642700'],
                datasets: [{
                    label: 'Population',
                    data: [14047400, 2066300, 15271400, 5691100, 138800, 137000, 1290700],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
//Colorado
} else if(states === 'CO'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart6"></canvas>`;
    var ctx6 = document.getElementById('myChart6').getContext('2d');
        
        var myChart6 = new Chart(ctx6, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 5611800'],
                datasets: [{
                    label: 'Population',
                    data: [3804100, 211100, 1221900, 180300, 29400, 6200, 158700],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
        // Connecticut
} else if(states === 'CT'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart7"></canvas>`;
    var ctx7 = document.getElementById('myChart7').getContext('2d');
        
        var myChart7 = new Chart(ctx7, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 3453300'],
                datasets: [{
                    label: 'Population',
                    data: [2268200, 346400, 583300, 158600, 5600, 0, 90100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
        //Delaware
} else if (states === 'DE') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart8"></canvas>`;
    var ctx8 = document.getElementById('myChart8').getContext('2d');
        
        var myChart8 = new Chart(ctx8, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 940300'],
                datasets: [{
                    label: 'Population',
                    data: [577700, 205100, 91100, 36900, 3000, 0, 26300],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
        //District of Columbia
} else if (states === 'DC') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart9"></canvas>`;
    var ctx9 = document.getElementById('myChart9').getContext('2d');
        
        var myChart9 = new Chart(ctx9, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 671300'],
                datasets: [{
                    label: 'Population',
                    data: [246100, 302400, 75200, 25200, 1800, 0, 20500],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
        //Florida
} else if (states === 'FL'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart10"></canvas>`;
    var ctx10 = document.getElementById('myChart10').getContext('2d');
        
        var myChart10 = new Chart(ctx10, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 20992000'],
                datasets: [{
                    label: 'Population',
                    data: [11119200, 3150100, 5583900, 573500, 39900, 12200, 513300],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
        // Georgia
} else if (states === 'GA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart11"></canvas>`;
    var ctx11 = document.getElementById('myChart11').getContext('2d');
        
        var myChart11 = new Chart(ctx11, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 10294000'],
                datasets: [{
                    label: 'Population',
                    data: [5354500, 3225900, 1011800, 422400, 19700, 5800, 253900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
 // Hawaii
} else if (states === 'HI'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart12"></canvas>`;
    var ctx12 = document.getElementById('myChart12').getContext('2d');
        
        var myChart12 = new Chart(ctx12, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1343000'],
                datasets: [{
                    label: 'Population',
                    data: [274400, 16400, 137900, 528600, 1600, 136900, 247200],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Idaho
} else if (states === 'ID'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart13"></canvas>`;
    var ctx13 = document.getElementById('myChart13').getContext('2d');
        
        var myChart13 = new Chart(ctx13, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1750900'],
                datasets: [{
                    label: 'Population',
                    data: [1429500, 11500, 225600, 21600, 15900, 0, 44800],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Illinois
} else if (states === 'IL'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart14"></canvas>`;
    var ctx14 = document.getElementById('myChart14').getContext('2d');
        
        var myChart14 = new Chart(ctx14, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 12362300'],
                datasets: [{
                    label: 'Population',
                    data: [7522700, 1679900, 2177500, 695500, 11300, 3000, 272500],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
        
//Indiana 
} else if (states === 'IN'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart15"></canvas>`;
    var ctx15 = document.getElementById('myChart15').getContext('2d');
        
        var myChart15 = new Chart(ctx15, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 6511800'],
                datasets: [{
                    label: 'Population',
                    data: [5116000, 600500, 471000, 158800, 12300, 0, 151300],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Iowa
} else if (states === 'IA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart16"></canvas>`;
    var ctx16 = document.getElementById('myChart16').getContext('2d');
        
        var myChart16 = new Chart(ctx16, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 3060200'],
                datasets: [{
                    label: 'Population',
                    data: [2610600, 119200, 191600, 71600, 8800, 1000, 57400],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Kansas 
} else if (states === 'KS'){  
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart17"></canvas>`;
    var ctx17 = document.getElementById('myChart17').getContext('2d');
        
        var myChart17 = new Chart(ctx17, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 2811200'],
                datasets: [{
                    label: 'Population',
                    data: [2128700, 153300, 341900, 79900, 17500, 0, 89100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Kentucky
} else if(states === 'KY'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart18"></canvas>`;
    var ctx18 = document.getElementById('myChart18').getContext('2d');
        
        var myChart18 = new Chart(ctx18, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 4319300'],
                datasets: [{
                    label: 'Population',
                    data: [3648500, 344900, 160800, 70400, 4900, 0, 87500],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Louisiana
} else if (states === 'LA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart19"></canvas>`;
    var ctx19 = document.getElementById('myChart19').getContext('2d');
        
        var myChart19 = new Chart(ctx19, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 4498600'],
                datasets: [{
                    label: 'Population',
                    data: [2643900, 1433000, 235800, 76600, 21600, 0, 86900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Maine
} else if (states === 'ME'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart20"></canvas>`;
    var ctx20 = document.getElementById('myChart20').getContext('2d');
        
        var myChart20 = new Chart(ctx20, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1302300'],
                datasets: [{
                    label: 'Population',
                    data: [1213500, 17800, 21900, 14500, 9700, 0, 24600],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Maryland
} else if (states === 'MD'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart21"></canvas>`;
    var ctx21 = document.getElementById('myChart21').getContext('2d');
        
        var myChart21 = new Chart(ctx21, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 5875500'],
                datasets: [{
                    label: 'Population',
                    data: [2934100, 1741500, 624500, 373300, 12400, 0, 188100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Massachusetts
} else if (states === 'MA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart22"></canvas>`;
    var ctx22 = document.getElementById('myChart22').getContext('2d');
        
        var myChart22 = new Chart(ctx22, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 6650800'],
                datasets: [{
                    label: 'Population',
                    data: [4687000, 466200, 824100, 448000, 12000, 2600, 210800],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Michigan
} else if (states === 'MI'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart23"></canvas>`;
    var ctx23 = document.getElementById('myChart23').getContext('2d');
        
        var myChart23 = new Chart(ctx23, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 9765600'],
                datasets: [{
                    label: 'Population',
                    data: [7316400, 1305100, 514600, 315900, 47100, 0, 264900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Minnesota
} else if (states === 'MN'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart24"></canvas>`;
    var ctx24 = document.getElementById('myChart24').getContext('2d');
        
        var myChart24 = new Chart(ctx24, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 5514800'],
                datasets: [{
                    label: 'Population',
                    data: [4361600, 353700, 307300, 272500, 50900, 0, 165900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Mississippi
} else if (states === 'MS') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart25"></canvas>`;
    var ctx25 = document.getElementById('myChart25').getContext('2d');
        
        var myChart25 = new Chart(ctx25, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 2867100'],
                datasets: [{
                    label: 'Population',
                    data: [1622400, 1078300, 85900, 28600, 11000, 0, 40700],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Missouri
} else if (states === 'MO') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart26"></canvas>`;
    var ctx26 = document.getElementById('myChart26').getContext('2d');
        
        var myChart26 = new Chart(ctx26, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 5939900'],
                datasets: [{
                    label: 'Population',
                    data: [4715000, 667100, 253900, 122500, 21200, 8200, 152000],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Montana
} else if (states === 'MO'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart27"></canvas>`;
    var ctx27 = document.getElementById('myChart27').getContext('2d');
        
        var myChart27 = new Chart(ctx27, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1039400'],
                datasets: [{
                    label: 'Population',
                    data: [895200, 5900, 38300, 7900, 62900, 0, 28700],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Nebraska
} else if (states === 'NE') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart28"></canvas>`;
    var ctx28 = document.getElementById('myChart28').getContext('2d');
        
        var myChart28 = new Chart(ctx28, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1873600'],
                datasets: [{
                    label: 'Population',
                    data: [1470900, 89200, 212200, 45200, 14800, 0, 40200],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
// Nevada
} else if (states === 'NV'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart29"></canvas>`;
    var ctx29 = document.getElementById('myChart29').getContext('2d');
        
        var myChart29 = new Chart(ctx29, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 3029700'],
                datasets: [{
                    label: 'Population',
                    data: [1448800, 279000, 888400, 257500, 26700, 17500, 111900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        }); 
//New Hampshire
} else if (states === 'NH') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart30"></canvas>`;
    var ctx30 = document.getElementById('myChart30').getContext('2d');
        
        var myChart30 = new Chart(ctx30, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1314000'],
                datasets: [{
                    label: 'Population',
                    data: [1179700, 17600, 51500, 34800, 0, 0, 27600],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });  
// New Jersey
} else if (states === 'NJ'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart31"></canvas>`;
    var ctx31 = document.getElementById('myChart31').getContext('2d');
        
        var myChart31 = new Chart(ctx31, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 8699400'],
                datasets: [{
                    label: 'Population',
                    data: [4738500, 1081400, 1822900, 836400, 8800, 0, 209000],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// New Mexico
} else if (states === 'NM'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart32"></canvas>`;
    var ctx32 = document.getElementById('myChart32').getContext('2d');
        
        var myChart32 = new Chart(ctx32, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 2041400'],
                datasets: [{
                    label: 'Population',
                    data: [750000, 35000, 1010200, 32900, 176600, 0, 36000],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// New York
} else if (states === 'NY'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart33"></canvas>`;
    var ctx33 = document.getElementById('myChart33').getContext('2d');
        
        var myChart33 = new Chart(ctx33, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 18908300'],
                datasets: [{
                    label: 'Population',
                    data: [10432200, 2651600, 3649800, 1625500, 39100, 0, 507900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// North Carolina
} else if (states === 'NC'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart34"></canvas>`;
    var ctx34 = document.getElementById('myChart34').getContext('2d');
        
        var myChart34 = new Chart(ctx34, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 10139700'],
                datasets: [{
                    label: 'Population',
                    data: [6355400, 2124200, 987900, 294400, 112600, 4800, 260600],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// North Dakota
} else if (states === 'ND'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart35"></canvas>`;
    var ctx35 = document.getElementById('myChart35').getContext('2d');
        
        var myChart35 = new Chart(ctx35, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 731000'],
                datasets: [{
                    label: 'Population',
                    data: [614600, 17900, 29400, 10400, 38000, 0, 19100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Ohio
} else if (states === 'OH'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart36"></canvas>`;
    var ctx36 = document.getElementById('myChart36').getContext('2d');
        
        var myChart36 = new Chart(ctx36, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 11351500'],
                datasets: [{
                    label: 'Population',
                    data: [8918300, 1380000, 452300, 260500, 15800, 0, 321400],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Oklahoma
} else if (states === 'OK'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart37"></canvas>`;
    var ctx37 = document.getElementById('myChart37').getContext('2d');
        
        var myChart37 = new Chart(ctx37, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 3826900'],
                datasets: [{
                    label: 'Population',
                    data: [2488200, 262800, 424600, 78900, 295000, 4600, 272800],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Oregon
} else if (states === 'OR'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart38"></canvas>`;
    var ctx38 = document.getElementById('myChart38').getContext('2d');
        
        var myChart38 = new Chart(ctx38, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 4128900'],
                datasets: [{
                    label: 'Population',
                    data: [3097700, 72900, 553400, 192000, 38900, 10900, 163100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Pennsylvania
} else if (states === 'PA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart39"></canvas>`;
    var ctx39 = document.getElementById('myChart39').getContext('2d');
        
        var myChart39 = new Chart(ctx39, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 12377600'],
                datasets: [{
                    label: 'Population',
                    data: [9401500, 1282000, 960500, 438000, 14200, 2300, 279200],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Rhode Island
} else if (states === 'RI'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart40"></canvas>`;
    var ctx40 = document.getElementById('myChart40').getContext('2d');
        
        var myChart40 = new Chart(ctx40, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1017100'],
                datasets: [{
                    label: 'Population',
                    data: [717300, 60300, 169100, 34000, 2300, 0, 33900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// South Carolina
} else if (states === 'SC'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart41"></canvas>`;
    var ctx41 = document.getElementById('myChart41').getContext('2d');
        
        var myChart41 = new Chart(ctx41, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 4984200'],
                datasets: [{
                    label: 'Population',
                    data: [3177000, 1307200, 285200, 84100, 14300, 0, 108300],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//South Dakota
} else if (states === 'SD'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart42"></canvas>`;
    var ctx42 = document.getElementById('myChart42').getContext('2d');
        
        var myChart42 = new Chart(ctx42, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 851300'],
                datasets: [{
                    label: 'Population',
                    data: [697500, 18800, 31400, 11000, 71500, 0, 20500],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Tennessee
} else if (states === 'TN'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart43"></canvas>`;
    var ctx43 = document.getElementById('myChart43').getContext('2d');
        
        var myChart43 = new Chart(ctx43, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 6640900'],
                datasets: [{
                    label: 'Population',
                    data: [4884500, 1088500, 378900, 120600, 17200, 0, 148700],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Texas
} else if (states === 'TX') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart44"></canvas>`;
    var ctx44 = document.getElementById('myChart44').getContext('2d');
        
        var myChart44 = new Chart(ctx44, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 28286200'],
                datasets: [{
                    label: 'Population',
                    data: [11637100, 3297200, 11300500, 1409700, 76800, 19000, 545800],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Utah
} else if (states === 'UT'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart45"></canvas>`;
    var ctx45 = document.getElementById('myChart45').getContext('2d');
        
        var myChart45 = new Chart(ctx45, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 3154100'],
                datasets: [{
                    label: 'Population',
                    data: [2452300, 32600, 455000, 72800, 31100, 25800, 84400],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Vermont
} else if (states === 'VT'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart46"></canvas>`;
    var ctx46 = document.getElementById('myChart46').getContext('2d');
        
        var myChart46 = new Chart(ctx46, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 598100'],
                datasets: [{
                    label: 'Population',
                    data: [555100, 6700, 10600, 9700, 4000, 0, 11900],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
//Virginia
} else if (states === 'VA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart47"></canvas>`;
    var ctx47 = document.getElementById('myChart47').getContext('2d');
        
        var myChart47 = new Chart(ctx47, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 8185100'],
                datasets: [{
                    label: 'Population',
                    data: [5017100, 1543100, 787100, 551900, 13600, 3900, 268300],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Washington
} else if (states === 'WA'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart48"></canvas>`;
    var ctx48 = document.getElementById('myChart48').getContext('2d');
        
        var myChart48 = new Chart(ctx48, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 7423900'],
                datasets: [{
                    label: 'Population',
                    data: [5013200, 282700, 964700, 662400, 82400, 47400, 371100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// West Virginia
} else if (states === 'WV'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart49"></canvas>`;
    var ctx49 = document.getElementById('myChart49').getContext('2d');
        
        var myChart49 = new Chart(ctx49, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 1739000'],
                datasets: [{
                    label: 'Population',
                    data: [1609000, 55900, 24800, 14200, 3900, 0, 31200],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Wisconsin
} else if (states === 'WI'){
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart50"></canvas>`;
    var ctx50 = document.getElementById('myChart50').getContext('2d');
        
        var myChart50 = new Chart(ctx50, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 5677100'],
                datasets: [{
                    label: 'Population',
                    data: [4602500, 349200, 401700, 169100, 37400, 0, 114100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Wyoming
} else if (states === 'WY') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart51"></canvas>`;
    var ctx51 = document.getElementById('myChart51').getContext('2d');
        
        var myChart51 = new Chart(ctx51, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 562700'],
                datasets: [{
                    label: 'Population',
                    data: [471600, 5400, 57100, 3400, 12300, 0, 12000],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });
// Puerto Rico
} else if (states === 'Puerto-Rico') {
    document.getElementById("holder").innerHTML =  ` <canvas id="myChart51"></canvas>`;
    var ctx51 = document.getElementById('myChart51').getContext('2d');
        
        var myChart51 = new Chart(ctx51, {
            type: 'pie',
            data: {
                labels: ['White', 'Black', 'Hispanic', 'Asian', 'American Indian/Alaska Native', 'Native Hawaiian/Other Pacific Islander', 'Multiple Races', 'Total - 3164500'],
                datasets: [{
                    label: 'Population',
                    data: [42600, 3100, 3106600, 0, 0, 0, 9100],
                    backgroundColor: ['#621ee1', '#1ee19c', '#e1c61e', '#e11e1e', '#e11ec2', '#7a7689', '#01a5ff' ],
                borderWidth: 1
                }]
            },
            options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                }
            }
        });

} else {
        document.getElementById("holder").innerHTML = "this is " + states;
    }
    
}