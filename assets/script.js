setInterval(() => {
    document.getElementById('currentDay').textContent = moment().format('LLL');
}
, 1000 );