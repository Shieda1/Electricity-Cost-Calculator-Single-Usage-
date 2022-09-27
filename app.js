// https://www.omnicalculator.com/everyday-life/electricity-cost-single-usage

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const powerconsumedRadio = document.getElementById('powerconsumedRadio');
const powerconsumptionRadio = document.getElementById('powerconsumptionRadio');
const usagetimeRadio = document.getElementById('usagetimeRadio');

let powerconsumed;
let powerconsumption = v1;
let usagetime = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

powerconsumedRadio.addEventListener('click', function() {
  variable1.textContent = 'Power consumption';
  variable2.textContent = 'Usage time';
  powerconsumption = v1;
  usagetime = v2;
  result.textContent = '';
});

powerconsumptionRadio.addEventListener('click', function() {
  variable1.textContent = 'Power consumed';
  variable2.textContent = 'Usage time';
  powerconsumed = v1;
  usagetime = v2;
  result.textContent = '';
});

usagetimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Power consumed';
  variable2.textContent = 'Power consumption';
  powerconsumed = v1;
  powerconsumption = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(powerconsumedRadio.checked)
    result.textContent = `Power consumed = ${computepowerconsumed().toFixed(2)}`;

  else if(powerconsumptionRadio.checked)
    result.textContent = `Power consumption = ${computepowerconsumption().toFixed(2)}`;

  else if(usagetimeRadio.checked)
    result.textContent = `Usage time = ${computeusagetime().toFixed(2)}`;
})

// calculation

function computepowerconsumed() {
  return (Number(powerconsumption.value) * Number(usagetime.value)) / 1000;
}

function computepowerconsumption() {
  return (Number(powerconsumed.value) * 1000) / Number(usagetime.value);
}

function computeusagetime() {
  return (Number(powerconsumed.value) * 1000) / Number(powerconsumption.value);
}