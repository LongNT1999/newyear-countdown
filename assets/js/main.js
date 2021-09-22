var day = document.querySelector('#day');
var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');
var second = document.querySelector('#second');

const NEXT_YEAR = new Date().getFullYear() + 1;
const NEXT_DATE = new Date(NEXT_YEAR, 0, 1, 00, 00, 00); // Jan 01 - 00:00:00

function countdown() {
  setInterval(() => {
    var currentDate = new Date();
    var remaining = NEXT_DATE.getTime() - currentDate.getTime(); // milliseconds

    var d = Math.floor(remaining / (1000 * 60 * 60 * 24));

    // chia ngay lay du duoc gio (mili giay)
    var h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // chia gio lay du duoc phut (mili giay)
    var m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

    // chia phut lay du duoc giay (mili giay)
    var s = Math.floor((remaining % (1000 * 60)) / (1000));
    
    // console.log(d + " - " + h + " - " + m + " - " + s);

    day.innerHTML = formatNumber(d);
    hour.innerHTML = formatNumber(h);
    minute.innerHTML = formatNumber(m);
    second.innerHTML = formatNumber(s);
  }, 1000);
}

countdown();

function formatNumber(number) {
  return number >= 10 ? number : '0' + number;
}
