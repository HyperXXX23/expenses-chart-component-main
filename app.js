const chartsData = `
[
{
    "day": "mon",
    "amount": 17.45
},
{
    "day": "tue",
    "amount": 34.91
},
{
    "day": "wed",
    "amount": 52.36
},
{
    "day": "thu",
    "amount": 31.07
},
{
    "day": "fri",
    "amount": 23.39
},
{
    "day": "sat",
    "amount": 43.28
},
{
    "day": "sun",
    "amount": 25.48
}
]
`;

const jsonData = JSON.parse(chartsData);

console.log(jsonData);
//Max amount of data
let maxNum = 0;
for (let i = 0; i < jsonData.length; i++) {
    // console.log(jsonData[i]['amount']);
    if (jsonData[i]['amount'] > maxNum) {
        maxNum = jsonData[i]['amount'];
    }
}

//Percent function
const percent = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue
}

const chartCont = document.querySelector('.chart-bars');

chartCont.innerHTML = `
    <div class='bar-otro' style="height: ${percent(jsonData[0]['amount'], maxNum)}%;" ></div>
    <div class='bar-otro' style="height: ${percent(jsonData[1]['amount'], maxNum)}%;" ></div>
    <div class='bar-otro' style="height: ${percent(jsonData[2]['amount'], maxNum)}%;" ></div>
    <div class='bar-otro' style="height: ${percent(jsonData[3]['amount'], maxNum)}%;" ></div>
    <div class='bar-otro' style="height: ${percent(jsonData[4]['amount'], maxNum)}%;" ></div>
    <div class='bar-otro' style="height: ${percent(jsonData[5]['amount'], maxNum)}%;" ></div>
    <div class='bar-otro' style="height: ${percent(jsonData[6]['amount'], maxNum)}%;" ></div>
`;

console.log(chartCont);
//calcular porciento
// function percentage(partialValue, totalValue) {
//     return (100 * partialValue) / totalValue;
// }