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


//Max amount
let maxNum = 0;
for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i]['amount'] > maxNum) {
        maxNum = jsonData[i]['amount'];
    }
}

//Percent function
const percent = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue
}

//select charts bars container
const chartCont = document.querySelector('.chart-bars');

const luis = '$';

//render each chart bar and the highest paint of cyan
const renderChart = jsonData.map(item => {
    if (item['amount'] === maxNum) {
        return `
            <div class="bar-cont">
                <div class="bar-price" style="bottom: ${item['amount'] * 2}%;">
                    <p style="padding: 0 5px;">${luis}${Math.round(item['amount'] * 100) / 100}</p>
                </div>
                <div class="bar" style="height: ${percent(item['amount'], maxNum)}%; background-color: var(--cyan);"></div>
            </div>
        `
    }
    else {
        return `
            <div class="bar-cont">
                <div class="bar-price" style="bottom: ${item['amount'] * 2}%;">
                    <p>${luis}${Math.round(item['amount'] * 100) / 100}</p>
                </div>
                <div class="bar" style="height: ${percent(item['amount'], maxNum)}%;"></div>
            </div>
        `
    }
});


chartCont.innerHTML = renderChart.join(' ');


