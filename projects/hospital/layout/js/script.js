const todaysDate = document.getElementById("date-time");

var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
if (month < 10) {
    month = '0' + month
}
if (day < 10) {
    day = '0' + day
}
todaysDate.setAttribute('value', d.getFullYear() + '-' + month + '-' + day + 'T' + '00:00');
todaysDate.setAttribute('min', d.getFullYear() + '-' + month + '-' + day + 'T' + '00:00');
todaysDate.setAttribute('max', (d.getFullYear() + 2) + '-' + month + '-' + day + 'T' + '00:00');