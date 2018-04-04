const key = 'b7e1e81e6228412cbfe203819180104';

const url = `https://api.apixu.com/v1/current.json?key=${key}&q=auto:ip`;

const zero = document.getElementById('zero');

const one = document.getElementById('one');

const two = document.getElementById('two');

const date = document.getElementById('date');

date.innerHTML = new Date().toLocaleDateString();

$.getJSON( url, function(json) {
    const loc = json.location;
    const cur = json.current;
    const city = loc.name;
    const tempC = cur.temp_c;
    const tempF = cur.temp_f;
    const condition = {text: cur.condition.text, icon: json.current.condition.icon};
    const windM = cur.wind_mph;
    const windDir = cur.wind_dir;
    const humid = cur.humidity;
    const feelsC = cur.feelslike_c;
    const feelsF = cur.feelslike_f;
    
    zero.innerHTML = `<div class = 'zero'>${city} Weather`;
    
    one.innerHTML = `<img src= ${condition.icon}><div class='cond'>${condition.text}</div><div class='cond'>c${tempC}</div><div class = 'cond'>f${tempF}</div>`
    
    two.innerHTML = `<div class='misc'>Wind: ${windM}mph ${windDir} Humidity: ${humid}</div><div class='feels'>Feels like c${feelsC} F${feelsF}</div>`
          
});