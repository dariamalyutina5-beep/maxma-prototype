/* Package prices reproduce Расчет тарифа!D5:F5, with rates from Рабочая.
   Checkboxes select the lowest package containing every selected feature.
   Individual module prices from the separate sheet are not added to a package. */
(function(){
  'use strict';
  var data=window.MAXMA_PRICING;
  function calculate(count,tier){
    if(!Number.isSafeInteger(count)||count<1)return {invalid:true};
    if(count>=data.thresholds[3])return {individual:true};
    var p=data.plans[tier], t=data.thresholds;
    var price=count<=t[0]?p.small:count<=t[1]?p.base:count<=t[2]?p.base+(count-t[1])*p.rate1:p.base+(t[2]-t[1])*p.rate1+(count-t[2])*p.rate2;
    return {price:Math.round((price+Number.EPSILON)*100)/100,plan:p.name};
  }
  window.calculateMaxmaTariff=calculate;
  var input=document.getElementById('customerCount');if(!input)return;
  var number=new Intl.NumberFormat('ru-RU',{maximumFractionDigits:2});
  var options=Array.from(document.querySelectorAll('.price-option input'));
  function update(){
    var raw=input.value.replace(/\s/g,'');var count=/^\d+$/.test(raw)?Number(raw):NaN;
    var selected=options.filter(function(x){return x.checked;});var tier=selected.reduce(function(a,x){return Math.max(a,Number(x.dataset.tier));},0);
    options.forEach(function(x){x.closest('label').classList.toggle('is-selected',x.checked);});
    var list=document.getElementById('selectedOptionsList');
    list.replaceChildren();
    selected.forEach(function(x){var li=document.createElement('li');li.textContent=x.closest('label').querySelector('b').textContent;list.appendChild(li);});
    document.getElementById('selectedOptions').hidden=selected.length===0;
    var result=calculate(count,tier);
    document.getElementById('baseError').hidden=!result.invalid;input.setAttribute('aria-invalid',String(!!result.invalid));
    document.getElementById('summaryCount').textContent=result.invalid?'—':number.format(count);
    document.getElementById('priceTotal').textContent=result.invalid?'—':result.individual?'По запросу':number.format(result.price)+' ₽';
    document.getElementById('pricePeriod').textContent=result.individual?'для базы от 100 000 клиентов':result.invalid?'Укажите размер базы':'в месяц';
  }
  input.addEventListener('input',update);
  input.addEventListener('blur',function(){var raw=input.value.replace(/\s/g,'');if(/^\d+$/.test(raw)&&Number.isSafeInteger(Number(raw)))input.value=number.format(Number(raw));});
  options.forEach(function(x){x.addEventListener('change',update);});update();
})();
