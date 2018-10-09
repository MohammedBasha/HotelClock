(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        const currentTime = document.getElementById("current-time"),
              currentDate = document.getElementById("current-date"),
              months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        function updateTime() {
            var date = new Date(),
                month = date.getMonth(),
                monthDay = date.getDate(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                sepClass = (date.getSeconds() % 2 === 0) ? "" : "trans",
                sep = "<span class='" + sepClass + "'>:</span>",
                am_pm = (hours > 12) ? "PM" : "AM";

            if (hours > 12) {
                hours -= 12;
            } else if (hours === 12) {
                hours = 12;
            }
            
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;

            currentTime.innerHTML = hours + sep + minutes + " " + am_pm;
            currentDate.textContent = months[month] + " " + monthDay;
        }

        setInterval(updateTime, 1000);

    });

}());